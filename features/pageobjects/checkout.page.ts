import Page from './page';
import InventoryPage from './inventory.page';
import CartPage from './cart.page';

class CheckoutPage extends Page{    

    public get firstNameInputField() {
        return $('#first-name');
    }

    public get lastNameInputField() {
        return $('#last-name');
    }

    public get zipCodeInputField() {
        return $('#postal-code');
    }

    public get continueCheckoutButton() {
        return $('#continue');
    }

    public get summarySubTotalLabel () {
        return $('.summary_subtotal_label');
    }

    public get listOfPricesCheckout () {
        return $$('.inventory_item_price');
    }

    public async fillContactAndZipCode(fistName:string, lastName:string, zipCode:string) {
        await this.firstNameInputField.setValue(fistName);
        await this.lastNameInputField.setValue(lastName);
        await this.zipCodeInputField.setValue(zipCode);
        await this.continueCheckoutButton.click();       
    }

    public async getSummarySubTotalPricePromise():Promise<number> {
        var stringToTrim = await this.summarySubTotalLabel.getText();
        var elementString = stringToTrim.split("$").pop()
        var elementNumber:number = +elementString;  
        return elementNumber;        
    }    

    public async getArrayOfIndividualCheckoutPricesPromise():Promise<number[]> {
        var listOfPrices:number[] = []        
        for await (var element of await this.listOfPricesCheckout) {
            var stringToTrim = await element.getText();
            var elementString = stringToTrim.split("$").pop()
            var elementNumber:number = +elementString;
            listOfPrices.push(elementNumber);
        }
        return listOfPrices;
    }    

    public async sumOfIndividualPrices():Promise<number> {
        var sum:number = 0;
        var arrayOfNumbers =  await this.getArrayOfIndividualCheckoutPricesPromise();
        for (let i = 0; i < arrayOfNumbers.length; i++) {
                sum += arrayOfNumbers[i];
        };
        return sum;
    }

    public async goToCheckout(fistName:string, lastName:string, zipCode:string) {
        await InventoryPage.cartButton.click();
        await CartPage.checkoutButton.click();        
        await this.fillContactAndZipCode(fistName, lastName, zipCode);        
    }
}
export default new CheckoutPage();
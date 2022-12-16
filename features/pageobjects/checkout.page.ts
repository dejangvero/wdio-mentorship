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
        this.listOfPricesCheckout.forEach(async element => {
            var stringToTrim = await element.getText();
            var elementString = stringToTrim.split("$").pop()
            var elementNumber:number = +elementString;
            listOfPrices.push(elementNumber);
        });
        return listOfPrices;
    }

    public async totalSumWithoutTax() {
        var total:number = 0
        for (let i = 0; i < this.getSummarySubTotalPricePromise.length; i++) {
            total = total + this.getSummarySubTotalPricePromise[i];
        };
        return total;        
    }

    // public async  sumOfIndividualPrices() {
    //     var sum:number = 0;     
    //     for (let i = 0; i < this.getArrayOfIndividualCheckoutPricesPromise.length; i++) {
    //             sum = sum + await this.getArrayOfIndividualCheckoutPricesPromise[i];
    //     };
    //     return sum;
    // }

    public async goToCheckout(fistName:string, lastName:string, zipCode:string) {
        await InventoryPage.cartButton.click();
        await CartPage.checkoutButton.click();        
        await this.fillContactAndZipCode(fistName, lastName, zipCode);        
    }
}
export default new CheckoutPage();
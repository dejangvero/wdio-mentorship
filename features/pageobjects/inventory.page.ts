
import Page from './page';

class InventoryPage extends Page {

    public get buyBackPackButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    public get buyTShirtButton () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    } 

    public get cartButton () {
        return $('.shopping_cart_link');
    }

    public open () {
        return super.open('inventory.html');
    }
}
export default new InventoryPage();
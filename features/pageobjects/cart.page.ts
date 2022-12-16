
import Page from './page';

class CartPage extends Page{

    public get checkoutButton () {
        return $('#checkout');
    }
}
export default new CartPage();
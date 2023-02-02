class HerokuappHoverPage {

    public async hoverElement(element:string){
        if (element == "first") {
            var desiredElement = await $$('.figure')[0];            
        }
        else if (element == "second") {
            var desiredElement = await $$('.figure')[1];
        }
        else if (element == "third") {
            var desiredElement = await $$('.figure')[2];
        }

        await desiredElement.moveTo();      
    }

    public async isNameDisplayed(name:string):Promise<boolean> {
        const desiredName:WebdriverIO.Element = await $$("div.figcaption>h5").find(async(element) => await element.getText() === `name: ${name}`);        
         return await desiredName.isDisplayed();
    }
    
}

export default new HerokuappHoverPage();
class HerokuappDragAndDropPage {

    public get boxA() {
        return $('#column-a');
    }

    public get boxB(){
        return $('#column-b');
    }

    public get headerA(){
        return $('#column-a>header')
    }

    public get headerB(){
        return $('#column-b>header')
    }
    
    public async dragAndDropElement(element:string){
        if (element == "A") {
            await this.boxA.dragAndDrop(await this.boxB);            
        }
        else if (element == "B") {
            await this.boxB.dragAndDrop(await this.boxA);            
        } 
    }
}

export default new HerokuappDragAndDropPage();
class HerokuappiFramePage {

    public get textEditoriFrame() {
        return $('#mce_0_ifr');
    }

    public get textEditorTextArea(){        
        return $('#tinymce')
    }

    public get textEditorTextValue(){
        return $('#tinymce>p')
    }

    public async enterTextIntoTextEditor(text:string)
    {
        await browser.switchToFrame(await this.textEditoriFrame);
        await this.textEditorTextArea.clearValue();
        await this.textEditorTextArea.setValue(text);        
    }
}

export default new HerokuappiFramePage();
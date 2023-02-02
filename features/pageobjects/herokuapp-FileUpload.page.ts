const path = require('path');

class HerokuappFileUploadPage {

    public get getChoseFileButton() {
        return $('#file-upload');
    }

    public get getUploadButton(){        
        return $('#file-submit');
    }

    public async uploadDesiredFile(relativePath:string)
    {
        const filePath = path.join(__dirname, relativePath);     
        const remoteFilePath = await browser.uploadFile(filePath);

        await this.getChoseFileButton.setValue(remoteFilePath);
        await this.getUploadButton.click();
    }
}

export default new HerokuappFileUploadPage();
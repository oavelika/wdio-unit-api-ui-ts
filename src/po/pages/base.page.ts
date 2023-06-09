import { Header, SideMenu, TitleComponent } from '@components';

class BasePage {
    url: string
    header: object
    sideMenu: object
    title: object

    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.sideMenu = new SideMenu();
        this.title = new TitleComponent();
    }

    open() {
        return browser.url(this.url);
    }
}

export { BasePage } 

//import { Header, SideMenu, TitleComponent } from '../components';
import { Header, SideMenu, TitleComponent } from '@common/*';


import { BaseComponent } from '@common/BaseComponent'

class BasePage {
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

export { BasePage };




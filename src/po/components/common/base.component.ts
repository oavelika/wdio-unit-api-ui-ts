export class BaseComponent {
    rootSelector: string

    constructor(rootSelector: string) {
        this.rootSelector = rootSelector;
    }

    get rootEl() {
        return $(this.rootSelector);
    }
}


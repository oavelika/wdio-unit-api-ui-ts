export class BaseComponent {
    rootSelector

    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootEl() {
        return $(this.rootSelector);
    }
}


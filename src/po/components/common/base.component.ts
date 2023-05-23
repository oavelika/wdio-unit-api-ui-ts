class BaseComponent {
    rootSelector: string

    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootEl() {
        return $(this.rootSelector);
    }
}

export { BaseComponent };

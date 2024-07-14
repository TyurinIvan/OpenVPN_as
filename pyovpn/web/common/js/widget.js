class Widget {
    elementTemplate;
    templateValues;
    #element;

    constructor(elementTemplate, templateValues) {
        this.elementTemplate = elementTemplate;
        this.templateValues = templateValues;
    }

    get element() {
        return this.#element;
    }

    render() {
        let elementText = renderTemplate(this.elementTemplate, this.templateValues);

        const newElement = $(elementText);

        if (this.#element) {
            this.#element.replaceWith(newElememnt);
        }
        this.#element = newElement;
        return this.#element;
    }

    show(method = 'show', ...args) {
        this.#element[method](...args);
    }

    hide(method = 'hide', ...args) {
        this.#element[method](...args);
    }
}


class WidgetWithTooltip extends Widget {
    tooltipText;
    pluginOptions;
    #tooltipTargetSelector;
    #previousTargetSelectors;

    constructor(tooltipText, tooltipTargetSelector, pluginOptions, ...rest) {
        super(...rest);
        this.tooltipText = tooltipText;
        this.#tooltipTargetSelector = tooltipTargetSelector;
        this.pluginOptions = pluginOptions;
        this.#previousTargetSelectors = [];
    }

    get tooltipTargetSelector() {
        return this.#tooltipTargetSelector;
    }

    set tooltipTargetSelector(selector) {
        this.#previousTargetSelectors.push(this.#tooltipTargetSelector);
        this.#tooltipTargetSelector = selector;
    }

    render() {
        let element = super.render();
        this.renderTooltip();
        return element;
    }

    renderTooltip(previousSelector = null) {
        const newTarget = this.element.find(this.#tooltipTargetSelector);

        this.#disposeOfPreviousTooltips(newTarget);
        newTarget.attr('title', this.tooltipText);
        newTarget.tooltip(this.pluginOptions || {});
    }

    #disposeOfPreviousTooltips(newTarget) {
        for (const selector of this.#previousTargetSelectors) {
            const oldTarget = this.element.find(selector);
            if (oldTarget.get(0) !== newTarget.get(0)) {
                oldTarget.tooltip('dispose');
            }
        }
        this.#previousTargetSelectors = [];
    }
}

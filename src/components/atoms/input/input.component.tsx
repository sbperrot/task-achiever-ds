import { Component, h, Host, Element } from '@stencil/core';

@Component({
    tag: 'ta-input',
    styleUrl: 'input.component.scss',
    shadow: true
})
export class TAInput {
    @Element() public el: HTMLElement;

    componentWillLoad() {
        const _el = this.el.querySelector('input');
        this.appendClass(_el);
    };

    private appendClass = (_el : HTMLInputElement) => {
        _el.classList.add('ta-input');
    }


    render() {
        return <slot />
    }
}

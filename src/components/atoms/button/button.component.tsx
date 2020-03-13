import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'ta-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class TAButton {
    /**
     * Set the shape of borders button.
     * Can be set to circle, round or square.
     * If not set, the default value will be set to 'square'
     */

    @Prop() shape : string = 'square';
    
    @Watch('shape') 
    validateShape(value : string) {
        if(!value || typeof value !== 'string') this.shape = 'square';
        else this.shape = value;
    };
    /**
    * Set the type of button.
    * Can be set to primarydasheddanger or omitted (meaning default)
    * If not set, the default value will be set to 'default'
    */
    @Prop() type: string = 'default';


    render() {
        return (
            <button class={`${ this.type } ${ this.shape }`}>
                <slot></slot>
            </button>
        )
    }
}

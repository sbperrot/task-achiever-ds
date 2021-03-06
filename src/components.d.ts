/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TaButton {
        /**
          * Set the shape of borders button. Can be set to circle, round or square. If not set, the default value will be set to 'square'
         */
        "shape": string;
        /**
          * Set the type of button. Can be set to primary dashedd anger or omitted (meaning default) If not set, the default value will be set to 'default'
         */
        "taType": string;
        /**
          * Set the type (HTML sens) of button.
         */
        "type": string;
    }
    interface TaInput {
    }
}
declare global {
    interface HTMLTaButtonElement extends Components.TaButton, HTMLStencilElement {
    }
    var HTMLTaButtonElement: {
        prototype: HTMLTaButtonElement;
        new (): HTMLTaButtonElement;
    };
    interface HTMLTaInputElement extends Components.TaInput, HTMLStencilElement {
    }
    var HTMLTaInputElement: {
        prototype: HTMLTaInputElement;
        new (): HTMLTaInputElement;
    };
    interface HTMLElementTagNameMap {
        "ta-button": HTMLTaButtonElement;
        "ta-input": HTMLTaInputElement;
    }
}
declare namespace LocalJSX {
    interface TaButton {
        /**
          * Set the shape of borders button. Can be set to circle, round or square. If not set, the default value will be set to 'square'
         */
        "shape"?: string;
        /**
          * Set the type of button. Can be set to primary dashedd anger or omitted (meaning default) If not set, the default value will be set to 'default'
         */
        "taType"?: string;
        /**
          * Set the type (HTML sens) of button.
         */
        "type"?: string;
    }
    interface TaInput {
    }
    interface IntrinsicElements {
        "ta-button": TaButton;
        "ta-input": TaInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ta-button": LocalJSX.TaButton & JSXBase.HTMLAttributes<HTMLTaButtonElement>;
            "ta-input": LocalJSX.TaInput & JSXBase.HTMLAttributes<HTMLTaInputElement>;
        }
    }
}

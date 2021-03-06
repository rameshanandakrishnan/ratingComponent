/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RatingComponent {
        "maxValue": number;
        "value": number;
    }
}
declare global {
    interface HTMLRatingComponentElement extends Components.RatingComponent, HTMLStencilElement {
    }
    var HTMLRatingComponentElement: {
        prototype: HTMLRatingComponentElement;
        new (): HTMLRatingComponentElement;
    };
    interface HTMLElementTagNameMap {
        "rating-component": HTMLRatingComponentElement;
    }
}
declare namespace LocalJSX {
    interface RatingComponent {
        "maxValue"?: number;
        "onRatingUpdated"?: (event: CustomEvent<any>) => void;
        "value"?: number;
    }
    interface IntrinsicElements {
        "rating-component": RatingComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rating-component": LocalJSX.RatingComponent & JSXBase.HTMLAttributes<HTMLRatingComponentElement>;
        }
    }
}

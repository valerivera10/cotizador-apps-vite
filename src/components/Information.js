import {LitElement, html} from "lit";

export default class Information extends LitElement {
    constructor() {
        super();
    }


    static get styles() {
        return css` 
        `
    }
    render() {
        return html`
        <div>
            <h2> ¿Qué tipo de App necesitas? <h2/>
            <p>Aplicación Android<p/>
            <p>Aplicación iOS<p/>
            <p>Aplicación windows Phone<p/>
            <p>Aplicación Android +iOS<p/>
`
    }

}
customElements.define("information-element", Information)
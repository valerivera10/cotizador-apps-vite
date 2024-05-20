import { LitElement, html } from "lit";
import Question from "./components/Question";

class App extends LitElement {
    constructor() {
        super();
    }

    render() {
        // Esto es un ejemplo de como escribir el js
        return html`
            <fragment>
                <question-element></question-element>
            </fragment>
        `
    }
}

customElements.define("app-element", App)

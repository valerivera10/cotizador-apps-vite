import { LitElement, html } from "lit";

const objeto = {
    title: "¿Que nivel de calidad estas buscando?",
    preguntas: [
        "calidad optima",
        "BBB",
        "no importa la calidad"
    ]
}

const generar = ({ preguntas }) => {
    let res = "";
    
    for (let i = 0; i < preguntas.length; ++i) {
        const pregunta = preguntas[i];
        res += `
            <button>${pregunta}<button>
        `
    }
    return res;
}

export default class Question extends LitElement {
    constructor() {
        super();
    }
    content = html`
        <div>
            <h2>${objeto.title}</h2>
            ${generar(objeto)}
        </div>
    `

    render() {
        return this.content;
    }
}

customElements.define("question-element", Question)

class DespesasComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render()
    }

    async connectedCallback() {
        const btnselect = this.shadowRoot.querySelector("#btnselect")

        btnselect.addEventListener("click", (e)=>{
            e.preventDefault()
            alert('Ok')
        })
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div>

        <select id="carselect">
            <option value='11-11-11'>11-11-11</option>
            <option value='22-22-22'>22-22-22</option>
        </select>

        <button type="button" id="btnselect">View</button>

        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style>
            
        #carselect {
            display: block;
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
        }

        </style>
        `
    }
}

customElements.define('despesas-component', DespesasComp)
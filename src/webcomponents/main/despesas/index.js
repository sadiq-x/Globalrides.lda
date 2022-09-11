
class DespesasComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render()
    }

    async connectedCallback() {
        const btnselect = this.shadowRoot.querySelector("#btnselect")
        let carselect = this.shadowRoot.querySelector("#carselect")
       
        let url = '/'
        let body = {}

        btnselect.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log(carselect.value)
        })
    }

    async getCar(url, body) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body)
        }).then(async response => { return response.json().then((e) => { return e }) })
    }

    getTable(data){
        
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
            margin-bottom: 5px;
        }

        </style>
        `
    }
}

customElements.define('despesas-component', DespesasComp)
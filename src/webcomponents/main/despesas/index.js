class DespesasComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render()
    }

    async connectedCallback() {
        let carselect = this.shadowRoot.querySelector("#carselect")
        const btnselect = this.shadowRoot.querySelector("#btnselect")
        const divmain = this.shadowRoot.querySelector("div")
        const tablecar = this.shadowRoot.querySelector("#tablecar")
       
        let url = '/analytics/car';
        let body = {}

        if (tablecar) {
            tablecar.remove()
        }
        
        btnselect.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation()
            body.car = carselect.value
            let car = await this.getCar(url, body)
            divmain.append(tablecar)
            this.getTable(car)
        })  
    }

    disconnectedCallback(){
        const tablecar = this.shadowRoot.querySelector("#tablecar")
        if (tablecar) {
            tablecar.remove()
        }
    }

    async getCar(url, body) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body)
        }).then(async response => { return response.json().then((e) => { return e }) })
    }

    getTable(data){
        data.reverse()
        const table = this.shadowRoot.querySelector("#tablecar")

        if (data) {
            table.innerHTML = null
            var header = table.createTHead();
            var row = header.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Car</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Litre</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Data</b>";
            
            for (let count in data) {
                let soloData = data[count]
                soloData.caropt.data = new Date(soloData.caropt.data).toUTCString()
                var tr = table.insertRow(-1);
                for (let entry in soloData.caropt) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = soloData.caropt[entry]
                }
            }
        }
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div>
            <select id="carselect">
                <option value="AO-35-ZR-despesas">Dacia</option>
                <option value="33-VB-29-despesas">Renault</option>
            </select>
            <button type="button" id="btnselect">View</button>
            <table id="tablecar">
            </table>

        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style>

        td{
            border: 1px solid black;
        }

        #carselect {
            display: block;
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5px;
        }

        #tablecar {
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid black;
            width:100%;
        }
        
        </style>
        `
    }
}

customElements.define('despesas-component', DespesasComp)
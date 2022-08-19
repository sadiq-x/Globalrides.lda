class DriverComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async connectedCallback() {
        const tets = this.shadowRoot.querySelector("#driverselect")

        let url = '/analytics/driver';
        let body = {
            driver: 'jose'
        };

        let drivers= await this.getdriver(url,body)
        console.log(JSON.stringify(drivers))
        this.getTable(drivers)
    }

    async getdriver(url, body) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body)
        }).then(async response => { return response.json().then((e) => { return e }) })
    }

    getTable(data){
        const table = this.shadowRoot.querySelector("#tabledriver")
        /*for (let count in data){
            console.log(data[count])
            var tr = table.insertRow(-1);
            var idCell = tr.insertCell(-1);
            idCell.innerHTML = JSON.stringify(data[count])
            idCell.style.border = '1px solid black'
        }*/
        for (let count in data) {
            let soloData = data[count]
            var tr = table.insertRow(-1);
            var idCell = tr.insertCell(-1)
            idCell.innerHTML = data[count]._id
            for (let entry in soloData.user) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = soloData.user[entry]}}
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div>
            <select id="driverselect">
                <option value="Jose">Jose</option>
                <option value="Manuel">Manuel</option>
            </select>

            <table id="tabledriver">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>test</th>
                    <th>Id</th>
                </tr>

            </table>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style>
        
        #driverselect {
            display: block;
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
        }

        #tabledriver {
            margin-top: 5px;
            margin-left: auto;
            margin-right: auto;
        }
        
        </style>
        `
    }
}

customElements.define('driver-component', DriverComp);
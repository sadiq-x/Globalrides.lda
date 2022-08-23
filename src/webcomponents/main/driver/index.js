class DriverComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async connectedCallback() {
        let driverselect = this.shadowRoot.querySelector("#driverselect")
        const btnselect = this.shadowRoot.querySelector("#btnselect")


        let url = '/analytics/driver';
        let body = {
            driver: 'jose'
        };

        btnselect.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation()
            body.driver = driverselect.value
            let drivers = await this.getdriver(url, body)
            this.getTable(drivers)
        })
    }

    disconnectedCallback() {
        const table = this.shadowRoot.querySelector("#tabledriver")
        table.innerHTML = '';
    }

    async getdriver(url, body) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body)
        }).then(async response => { return response.json().then((e) => { return e }) })
    }

    getTable(data) {
        let test
        console.log(data)
        data.reverse()
        const table = this.shadowRoot.querySelector("#tabledriver")

        if (data) {
            table.innerHTML = '';
            var header = table.createTHead();
            var row = header.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Id</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Name</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Numero</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Mood</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Car</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Km</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Data</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Uber money</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Uber portagem</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Uber grojeta</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Bolt money</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Bolt portagem</b>";
            var cell = row.insertCell(-1);
            cell.innerHTML = "<b>Bolt grojeta</b>";

            for (let count in data) {
                console.log(data[count].user.mood)
                let soloData = data[count]
                test = soloData
                var tr = table.insertRow(-1);
                var idCell = tr.insertCell(-1)
                idCell.innerHTML = data[count]._id
                for (let entry in soloData.user) {
                    console.log(soloData.user[entry])
                    if (typeof soloData.user[entry] === 'object') {
                        for (let x in test.user.money) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = test.user.money[x]
                        }
                    } else if (typeof soloData.user[entry] !== 'object') {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = soloData.user[entry]
                        if (soloData.user[entry] === 'Start'){
                            tabCell.style.backgroundColor = 'green'
                            var brRow = table.insertRow(-1)
                            brRow.innerHTML = "<p></p>"
                            
                        }else if(soloData.user[entry] === 'Finish'){
                            tabCell.style.backgroundColor = 'red'
                        }
                        
                    }
                    
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
            <select id="driverselect">
                <option value="jose">Jose</option>
                <option value="Manuel">Manuel</option>
            </select>

            <button type="button" id="btnselect">View</button>

            <table id="tabledriver">
                               
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

        #driverselect {
            display: block;
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
        }

        

        #tabledriver {
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid black;
        }
        
        </style>
        `
    }
}

customElements.define('driver-component', DriverComp);
import './driverwork/index.js';
import './fuelcars/index.js'
class Mainbody extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();

    }

    connectedCallback() {
        const DriverWork = document.createElement('driver-work')
        const FuelCars = document.createElement('fuel-cars')
        const divOper = this.shadowRoot.querySelector("#operdiv")
        divOper.appendChild(DriverWork)
        divOper.appendChild(FuelCars)
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate() { //Template of component
        return `
        <div id="divmain">
            <div id="navbar">
                <a href="">Drivers</a>
                <a href="">Cars and fuel</a>
            </div>
            <div id="operdiv">
            </div>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles() { //Styles template
        return `
        <style>

        a {
            background-color: white;
            text-decoration: none;
            border: 1px solid black;
            padding: 10px;
            margin: 3px;
            color: black;
        }

        #navbar {
            margin-top: 8px;
        }

        #operdiv {
            margin-top: 25px;
        }
        

        </style>
        `
    }
}

customElements.define('site-body', Mainbody);
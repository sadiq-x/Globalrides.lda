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
        const webcompdiv = this.shadowRoot.querySelector("#webcompdiv")
        const driveropt = this.shadowRoot.querySelector("#dA")
        const carfuelopt = this.shadowRoot.querySelector("#cfA")
        
        driveropt.addEventListener('click', (e)=>{
            e.preventDefault()
            webcompdiv.removeChild(webcompdiv.lastChild)
            webcompdiv.appendChild(DriverWork)
        })

        carfuelopt.addEventListener('click', (e)=> {
            e.preventDefault()
            webcompdiv.removeChild(webcompdiv.lastChild)
            webcompdiv.appendChild(FuelCars)
        })
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate() { //Template of component
        return `
        <div id="divmain">
            <div id="navbar">
                <a href="" id="dA">Drivers</a>
                <a href="" id="cfA">Cars and fuel</a>
            </div>
            <div id="webcompdiv">
            </div>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles() { //Styles template
        return `
        <style>

        a:hover {
            background-color:Silver;
        }

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

        #webcompdiv {
            margin-top: 25px;
        }
        

        </style>
        `
    }
}

customElements.define('site-body', Mainbody);
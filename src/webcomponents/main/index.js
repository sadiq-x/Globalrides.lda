import './carview-dacia/index.js';
import './carview-renault/index.js';
import './navbar/index.js'

class SiteBody extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render()
    }

    connectedCallback(){
        const navbar = this.shadowRoot.querySelector("#navbarbody")

        const Drivernavbar = navbar.shadowRoot.querySelector("#driver")
        const Vnavbar = navbar.shadowRoot.querySelector("#viaturas")
        const Despesaspnavbar = navbar.shadowRoot.querySelector("#despesas")
        const Tnavbar = navbar.shadowRoot.querySelector("#test")

        Drivernavbar.addEventListener('click', (e)=>{
            e.preventDefault()
        })

    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
        <ul id="carcomponents">
            <li> <carview-dacia> </carview-dacia> </li>
            <li> <carview-renault> </carview-renault> </li>
        </ul>
        <navbar-body id="navbarbody"> </navbar-body>
        
        </div>
        ${this.getStyle()}
        `
    }

    getStyle(){
        return `
        <style>

        #carcomponents li {
            display: inline-block;
        }

        </style>
        `
    }
}

customElements.define('site-body', SiteBody);
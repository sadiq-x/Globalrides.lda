import './carview-dacia/index.js';
import './carview-renault/index.js';
import './navbar/index.js'
import './driver/index.js'

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

        Drivernavbar.addEventListener('click', (e)=>{
            e.preventDefault()
            alert('ok')
        })

        Vnavbar.addEventListener('click', (e)=> {
            e.preventDefault()
        })

        Despesaspnavbar.addEventListener('click', (e)=>{
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
        
        <div id="componentsoutput">
            <driver-component> </driver-component>
        </div>
        
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

        #navbarbody{
            display: block;
        }

        #componentsoutput {
            margin-top: 35px;
        }        

        </style>
        `
    }
}

customElements.define('site-body', SiteBody);
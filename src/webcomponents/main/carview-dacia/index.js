class CarviewRenault extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render()
    }

    connectedCallback(){
        
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
       
            <ul id="listcar">
                <li> <img src="./images/dacialogdy_carlogo.png" width="250" height="135" alt="Dacia Logdy" title="Dacia Logdy"></li>
            </ul>
            <ul id="listmatriculas">
                <li>XX-XX-XX</li> 
            </ul>
            <ul id="listkm">
                <li>123445 </li>
                <li>Km</li>
            </ul>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return `
        <style>
        
        #listcar li {
            display: inline-block;
            margin-right: 10px;
        }

        #listkm li {
            display: inline-block;
        }

        #listmatriculas li {
            display: inline-block;
        }

        </style>
        `
    }
}

customElements.define('carview-dacia', CarviewRenault);


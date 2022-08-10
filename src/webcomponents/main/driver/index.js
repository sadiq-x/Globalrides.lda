class DriverComp extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    connectedCallback(){

    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
        <div>
        

        <table id="tabledriver">
            <tr>
                <th> <h1> Start </h1> </th>
                <th> <h1> Finish </h1> </th>
            </tr>
            
            <tr>
                <td> 1</td>
                <td> 2</td>
            </tr>
        </table>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return `
        <style>
        
        #tabledriver {
            margin-left: auto;
            margin-right: auto;
        }

        </style>
        `
    }
}

customElements.define('driver-component', DriverComp);
class NavbarBody extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render()
    }

    connectedCallback () {
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
            <a id="driver" href="">Driver</a>
            <a id="viaturas" href="">Viaturas </a>
            <a id="despesas" href="">Despesas </a>
            <a  id="reload" href="">Reload Api</a>
        </div>
        ${this.getStyle()}
        `
    }

    getStyle(){
        return `
        <style>

        #driver, #viaturas, #despesas, #reload{
            border: 1px solid black;
            padding: 10px;
            margin: 25px;
            font-size: 25px;
            color: black;
            font-family: Franklin Gothic Medium;
            text-decoration: none;
        }

        #reload:hover {
            background-color:Silver;
        }

        #driver:hover {
            background-color:Silver;
        }

        #viaturas:hover {
            background-color:Silver;
        }

        #despesas:hover {
            background-color:Silver;
        }

        </style>
        `
    }
}

customElements.define('navbar-body', NavbarBody);
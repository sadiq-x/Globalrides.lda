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
            <a  id="test" href="">test </a>
        </div>
        ${this.getStyle()}
        `
    }

    getStyle(){
        return `
        <style>

        div {
            margin-left: 25%;
            margin-right: 25%;
        }
        
        #driver, #viaturas, #despesas, #test{
            border: 1px solid black;
            padding: 10px;
            margin: 25px;
            font-size: 25px;
            color: black;
            font-family: Franklin Gothic Medium;
            text-decoration: none;
        }

        </style>
        `
    }
}

customElements.define('navbar-body', NavbarBody);
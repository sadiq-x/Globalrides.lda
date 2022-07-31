class Mainbody extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})

    }

    connectedCallback(){

    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){ //Template of component
        return `
        <div id="principalDiv">
            <form id="driverinput">

            </form>

        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){ //Styles template
        return `
        <style>

        </style>
        `
    }
}

customElements.define('main-body', Mainbody);
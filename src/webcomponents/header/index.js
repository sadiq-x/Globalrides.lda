class HeaderBody extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
        <div>
            <h1>Global Rides</h1>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return `
        <style>

        </style>
        `
    }
}

customElements.define('site-header', HeaderBody);
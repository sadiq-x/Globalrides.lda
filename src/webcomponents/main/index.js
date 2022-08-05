

class SiteBody extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render()
    }

    connectedCallback(){}

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
        <h1> test </h1>
        </div>
        ${this.getStyle()}
        `
    }

    getStyle(){
        return `
        <style>

        </style>
        `
    }
}

customElements.define('site-body', SiteBody);
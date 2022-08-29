class SiteFooter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    connectedCallback(){
            let date = new Date();
            let dateresult = date.toUTCString()

            const datenow = this.shadowRoot.querySelector("#datenow")
            datenow.innerHTML = dateresult
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
            <h5 id="datenow"> </h5>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return`
        <style>

        </style>
        `
    }
}

customElements.define('site-footer', SiteFooter)
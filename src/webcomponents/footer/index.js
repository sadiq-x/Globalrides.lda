class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        let datenow = this.shadowRoot.querySelector("#datenow")
        this.clockAutomatic(datenow)
    }

    clockAutomatic(datenow){
        datenow.innerHTML = Date()
        setInterval(() => { datenow.innerHTML = Date() }, 1000)
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate() {
        return `
        <div>
        <div id="datenow"> </div>
        <h6> Develop by <a href="">Sadiq.org</a></h6>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style>

        h6 {
            font-family: cursive;
            font-style: italic;
            color: red;
        } 

        a {
            text-decoration: none;
            color: black;
        }
        
        </style>
        `
    }
}

customElements.define('site-footer', SiteFooter)
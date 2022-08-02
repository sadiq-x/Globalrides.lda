class FooterBody extends HTMLElement {
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
        <div id="ftdiv">
        <a href="">Global Rides.lda</a>
        <h5>Develop by <a href="">Sadiq.org</a></h5>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return `
        <style>

        #ftdiv {
            padding: 8px;
        }

        a {
            text-decoration: none;
            color: black;
        }

        h5 {
            font-family: cursive;
            font-style: italic;
            color: red;
        } 

        </style>
        `
    }
}

customElements.define('site-footer', FooterBody)
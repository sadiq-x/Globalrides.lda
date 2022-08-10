class CarviewRenault extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render()
    }

    async connectedCallback(){
        let kmreload = this.shadowRoot.querySelector("#kmreload")
        const btnreload = this.shadowRoot.querySelector("#btnreload")
        
        const url = '';
        const body = {
            car: 'renaultscenic'
        }

        //kmreload.textContent = await this.getKm(url,body)

        btnreload.addEventListener('click', (e) => {
            e.preventDefault()
            //alert('reload')
            kmreload.textContent = this.getKm(url,body)
        })
    }

    async getKm(url, body) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body)
        }).then( async response => { return response.json().then((e)=>{return e}) })
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate(){
        return `
        <div>
       
            <ul id="listcar">
                <li> <img src="./images/renaultscenic_carlogo.png" width="190" height="125" alt="Renault Scenic" title="Renault Scenic" id="car"></li>
            </ul>
            <ul id="listmatriculas">
                <li>XX-XX-XX</li> 
            </ul>
            <ul id="listkm">
                <li id="kmreload">awaiting</li>
                <li>Km</li>
            </ul>
            <ul>
                <a href="" id="btnreload"> <img src="./images/refreshicon_webcomponent.png" widht="25" height="25" id="imgreload"> </a>
            </ul>
        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){
        return `
        <style>
        
        #imgreload:hover {
            transform: rotate(-180deg);
        }

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

customElements.define('carview-renault', CarviewRenault);


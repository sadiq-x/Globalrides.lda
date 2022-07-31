class Mainbody extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();

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
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
            
            <label for="mood">Mood</label>
            <input type="text" name="mood" id="mood">

            <label for="car">Car</label>
            <input type="text" name="car" id="car">

            <label for="km">Km</label>
            <input type="text" name="km" id="km">

            <label for="fuel">Fuel</label>
            <input type="text" name="fuel" id="fuel">
            </form>

        </div>
        ${this.getStyles()}
        `
    }

    getStyles(){ //Styles template
        return `
        <style>

        #driverinput {

        }

        </style>
        `
    }
}

customElements.define('main-body', Mainbody);
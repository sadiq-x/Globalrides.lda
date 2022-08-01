class DriverWork extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector("#driverinput")

    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div>
            <form id="driverinput">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name...">

                <label for="mood">Mood</label>
                <select name="mood" id="mood" >
                    <option value="start">Start</option>
                    <option value="finish">Finish</option>
                </select>

                <label for="car">Car</label>
                <select type="text" name="car" id="car">
                    <option value="">88-59-PO</option>
                </select>

                <label for="km">Km</label>
                <input type="text" name="km" id="km" placeholder="Km atuais...">

                <label for="money">Money</label>
                <select id=selectmoney">
                    <option>Não</oprion>
                    <option id="optSim">Sim</option>
                </select>
            </form>
            <input type="button" value="Go" id="btformsend">
        </div>
        ${this.getStyles()}
        `
    }


    getStyles(){
        return `
        <style>

        #btform {
            margin-top: 10px;
            padding: 10px 20px 10px 20px;
        }

        input, select {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            text-align: center;
        }

        label {
            padding: 5px;
            color: black;
            font-size: 23px;
        }

        #driverinput {
        }

        </style>
        `
    }
}

customElements.define('driver-work', DriverWork);
class DriverWork extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector("#driver-input")
        const btform = this.shadowRoot.querySelector("#btformsend")

        const divsimopt = this.shadowRoot.querySelector("#divSimopt")
        const moodslc = this.shadowRoot.querySelector("#mood")
        
        let url = 'http://127.0.0.1:9000/driver/startdrive';
        let body;

        moodslc.addEventListener('click', (e)=> {
            e.preventDefault()
            if (moodslc.value === 'start'){
                url = 'http://127.0.0.1:9000/driver/startdrive'
                divsimopt.style.display = 'none';
            }else if (moodslc.value === 'finish'){
                url = 'http://127.0.0.1:9000/driver/finishdrive'
                divsimopt.style.display = 'block';
            }
        })

        btform.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopImmediatePropagation()

            if (moodslc.value === 'start') {
                body = {
                    name: form.querySelector("#name").value,
                    numbero: form.querySelector("#idnumber"),
                    mood: form.querySelector("#mood").value,
                    car: form.querySelector("#car").value,
                    km: form.querySelector("#km").value
                }
            } else if(moodslc.value === 'finish') {
                body = {
                    name: form.querySelector("#name").value,
                    numbero: form.querySelector("#idnumber"),
                    mood: form.querySelector("#mood").value,
                    car: form.querySelector("#car").value,
                    km: form.querySelector("#km").value,
                    money: {
                        ubermoney: divsimopt.querySelector("#uberM").value,
                        uberportagem: divsimopt.querySelector("#uberP").value,
                        ubergrojeta: divsimopt.querySelector("#uberG").value,
                        boltmoney: divsimopt.querySelector("#boltM").value,
                        boltportagem: divsimopt.querySelector("#boltP").value,
                        boltgrojeta: divsimopt.querySelector("#boltG").value
                    }
                }
            }
            if (body.name && body.km){
                fetch(url, {
                    method: "POST",
                    headers: new Headers({"Content-Type": "application/json"}),
                    body: JSON.stringify(body)
                }).then((e)=>{
                    console.log(e)
                })
            }else{
                alert('Formulario incompleto')
            }
            form.reset()
        })
    }

    disconnectedcallback() {

    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div>
            <form id="driver-input">
                <label for="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Your name...">

                <label for="idnumber">Numero pessoal</label>
                <input type="text" name="idnumber" id="idnumber" placeholder="Your name...">

                <label for="mood">Mood</label>
                <select name="mood" id="mood" >
                    <option value="start">Start</option>
                    <option value="finish">Finish</option>
                </select>

                <label for="car">Car</label>
                <select type="text" name="car" id="car">
                    <option value="88-59-po">88-59-PO</option>
                    <option value="88-59-po">88-59-PO</option>
                </select>

                <label for="km">Km</label>
                <input type="text" name="km" id="km" placeholder="Km atuais...">

                <div id="divSimopt">
                    <label for="uberM">Uber</label>
                    <input type="text" name="uberM" id="uberM" placeholder="Uber money...">
                    <input type="text" name="uberP" id="uberP" placeholder="Uber portagens...">
                    <input type="text" name="uberG" id="uberG" placeholder="Uber grojetas...">

                    <label for="boltM">Bolt</label>
                    <input type="text" name="boltM" id="boltM" placeholder="Bolt money...">
                    <input type="text" name="boltP" id="boltP" placeholder="Bolt portagens...">
                    <input type="text" name="boltG" id="boltG" placeholder="Bolt grojetas...">

                </div>
            </form>
            <input type="button" value="Go" id="btformsend">
        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
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

        #divSimopt {
            display: none;
        }
        
        </style>
        `
    }
}

customElements.define('driver-work', DriverWork);
class FuelCars extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    connectedCallback() {
        const btform = this.shadowRoot.querySelector("#btformsend")
        const form = this.shadowRoot.querySelector("#fuelcars")

        const url = '';
        let body;

        btform.addEventListener('click', (e)=> {
            e.preventDefault()
            e.stopImmediatePropagation()
            body = {
                car: form.querySelector("#car").value,
                litre: form.querySelector("#litre").value,
                valor: form.querySelector("#money").value
            }

            if (body.litre && body.valor){
                console.log(body)
            }else{
                alert('Formulario incompleto')
            }

            form.reset()
        })
    }

    render(){
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
        <div>
            <form id="fuelcars">
                
                <label for="car">Car</label>
                <select name="car" id="car" >
                    <option value="1111">1111</option>
                    <option value="2222">2222</option>
                </select>

                <label for="litre">Litre</label>
                <input type="text" name="litre" id="litre" placeholder="Quantidade de litros...">

                <label for="money">Valor</label>
                <input type="text" name="money" id="money" placeholder="Dinheiro gasto...">

            </form>
            <input type="button" value="Send" id="btformsend">
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

        #fuelcars {
        }

        </style>
        `
    }
}

customElements.define('fuel-cars',FuelCars)
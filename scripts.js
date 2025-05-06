class Parquimetro {
    constructor() {
        this.valor = 0;
        this.regras = [
            {valor: 3.00, tempo: 120},
            {valor: 1.75, tempo: 60},
            {valor: 1.00, tempo: 30},
        ];
    }

    receberValor(valor) {
        this.valor = parseFloat(valor);
    }

    calcularTempoeTroco() {
        if(this.valor < 1.00) {
            return {mensagem: "Valor insuficiente para estacionar."};
        }

        for (let regra of this.regras) {
            if (this.valor >= regra.valor) {
                const troco = (this.valor - regra.valor).toFixed(2);
                return {
                    tempo: regra.tempo,
                    troco: troco > 0 ? `R$ ${troco}` : "Sem troco"
                };
            }
        }
    }

    processar () {
        const valorInput = document.getElementById("valor").value;
        this.receberValor(valorInput);
        const resultado = this.calcularTempoeTroco();
        const divResultado = document.getElementById("resultado");

        if (resultado.mensagem) {
            divResultado.innerHTML = `<p class="erro">${resultado.mensagem}</p>`;
        }
        else {
            divResultado.innerHTML = `<p>Tempo de estacionamento: ${resultado.tempo} minutos</p>
            <p>Troco: ${resultado.troco}</p>`;
        }

    }

}

const parquimetro = new Parquimetro();
var Categoria = {
	"MATEMATICA": "matematica",
	"PORTUGUES": "portugues",
	"INGLES": "ingles",
}

var Game = function() {

	var self = this;
	var categoria = null;
	var nivel = null;
	var jogadores = [];
	var perguntas = [];
	var respostas = [];

	this.setCategoria = function(_categoria) {
		categoria = _categoria;
	};

	this.getCategoria = function() {
		return categoria;
	};

	this.setNivel = function(_nivel) {
		nivel = _nivel;
	};

	this.iniciar = function() {
		perguntas = sortearPerguntas(categoria, nivel);

		jogadores.forEach(function(player) {
			player.iniciar();
		});
	};

	this.addPlayer = function(player) {
		player.setGame(self);
		player.setIndex(jogadores.length + 1);
		jogadores.push(player);
	};

	this.finalizado = function(index, _respostas) {
		respostas[index - 1] = _respostas;
		if (respostas.length > 1) {
			calcularResultado();
		}

		$(".restart").show();
	};

	function calcularResultado() {
		respostas.forEach(function(questoes, i) {
			var certas = 0;
			questoes.forEach(function(questao) {
				if (questao.resultado == CORRETO) {
					certas++;
				}
			});

			jogadores[i].exibirResultado(certas);
		});
	};

	this.getPerguntas = function() {
		return perguntas;
	};

};
var Player = function($container) {

	var self = this;
	var game = null;
	var playerIndex = null;
	var container = $container;
	var gameContainer;
	var correctAudio;
	var wrongAudio;
	var perguntas = null;
	var questaoAtual = 0;
	var questaoFinalizada;
	var tempoInicialResposta;
	var respostas = [];

	this.setGame = function(_game) {
		game = _game;
	};

	this.setIndex = function(_index) {
		playerIndex = _index;
		container.addClass("player-"+playerIndex);
	};

	this.iniciar = function() {
		gameContainer = $("<div></div>");
		container.append(gameContainer);

		var soundContainer = $("<div></div>");
		correctAudio = $("<audio></audio>").attr("src", "audio/correct.mp3");
		wrongAudio = $("<audio></audio>").attr("src", "audio/wrong.mp3");
		soundContainer.append(correctAudio);
		soundContainer.append(wrongAudio);
		container.append(soundContainer);

		perguntas = game.getPerguntas().slice().shuffle();
		exibirQuestaoAtual();
	};

	this.exibirResultado = function(respostasCertas) {
		container.empty();

		var resultadoContainer = $("<div></div>").addClass("resultado-container").css("left", container.offset().left)
		var texto;
		if (respostasCertas > 0) {
			resultadoContainer.css("top", (container.height() - 306) / 2);
			resultadoContainer.css("left", container.offset().left + ((container.width() - 418) / 2));

			texto = "Parabéns,<br> você acertou<br>" + respostasCertas;
			texto += (respostasCertas == 1) ? " questão!" : " questões!";
		} else {
			resultadoContainer.css("top", (container.height() - 306) / 2);
			resultadoContainer.css("left", container.offset().left + ((container.width() - 598) / 2));

			texto = "Que pena,<br> você não acertou <br>nenhuma questão.";
		}
		resultadoContainer.html(texto);
		container.append(resultadoContainer);
	}

	function exibirQuestaoAtual() {
		var pergunta = perguntas[questaoAtual];
		if (pergunta != null) {
			exibirPergunta(pergunta);
		} else {
			gameContainer.empty();
		}
	}

	function exibirPergunta(pergunta) {
		questaoFinalizada = false;
		var perguntaSize = container.height() / 3;
		var respostaSize = container.height() / 4;
		var marginTop = respostaSize / 10;
		var marginLeft = respostaSize / 4;

		var x = container.offset().left + (container.width() / 2) - (perguntaSize / 2);
		var y = (container.height() / 2) - (perguntaSize / 2);

		var posRespostas = [
			{ "x": container.offset().left + marginLeft, "y": marginTop},
			{ "x": container.offset().left + container.width() - respostaSize - marginLeft, "y": marginTop},
			{ "x": container.offset().left + marginLeft, "y": container.height() - respostaSize - marginTop},
			{ "x": container.offset().left + container.width() - respostaSize - marginLeft, "y": container.height() - respostaSize - marginTop} ]

		// limpa a tela antes de exibir a pergunta
		gameContainer.empty();

		// Exibe contagem regressiva
		var time = 3;
		var contagemRegressiva = $("<div>" + time + "</div>")
			.addClass("contagem-regressiva")
			.css("width", perguntaSize)
			.css("height", perguntaSize)
			.css("left", x)
			.css("top", y);
		gameContainer.append(contagemRegressiva);

		var interval = setInterval(function() {
			time--;
			contagemRegressiva.text(time);
			if (time < 0) {
				clearInterval(interval);
			}
		}, 700);

		setTimeout(function() {

			if (questaoAtual == 0) {
				exibirBarraProgresso();
			}

			gameContainer.empty();

			tempoInicialResposta = new Date().getTime();

			// Cria canvas da pergunta
			var canvasPergunta = $("<canvas></canvas>")
				.addClass("canvas-pergunta")
				.css("width", perguntaSize)
				.css("height", perguntaSize)
				.css("left", x)
				.css("top", y);
			gameContainer.append(canvasPergunta);

			if (game.getCategoria() == Categoria.MATEMATICA) {
				canvasPergunta[0].width = perguntaSize;
				canvasPergunta[0].height = perguntaSize;
				exibirTexto(canvasPergunta, pergunta.pergunta, perguntaSize / 3);
			} else {
				drawImage(canvasPergunta, game.getCategoria(), pergunta.pergunta);
			}

			// Cria canvas das repostas
			var respostaCorreta = pergunta.respostas[0];
			var respostas = pergunta.respostas;//.shuffle();
			var array = [0,1,2,3];
			array = array.shuffle();
			for (var i = 0; i < respostas.length; i++) {
				var canvasResposta = $("<canvas></canvas>")
					.addClass("canvas-resposta")
					.css("width", respostaSize)
					.css("height", respostaSize)
					.css("left", posRespostas[array[i]].x)
					.css("top", posRespostas[array[i]].y);
				canvasResposta[0].width = respostaSize;
				canvasResposta[0].height = respostaSize;

				// resposta correta
				if (i == 0 ) { //respostas[i] == respostaCorreta) {
					canvasResposta.addClass("resposta-correta");
				}

				var fontSize = respostaSize / 6;
				if (game.getCategoria() == Categoria.MATEMATICA) {
					fontSize = respostaSize / 3;
				}

				exibirTexto(canvasResposta, respostas[i], fontSize);
				gameContainer.append(canvasResposta);
				self.addCollision(canvasResposta);
				self.addMovementToCanvas(canvasResposta[0]);
			}

		}, 2000);

	};

	function exibirBarraProgresso() {
		var barraProgresso = $("<div></div>").addClass("progress").addClass("progress-bar-vertical").append(
			$("<div></div>").addClass("progress-bar").addClass("progress-bar-info").css("height", "100%")
		);
		container.append(barraProgresso);

		var tempoAtual = 0;
		var tempoTotal = 60000;
		var interval = setInterval(function() {
			tempoAtual += 100;
			barraProgresso.find(".progress-bar").css("height", ((tempoTotal - tempoAtual) / tempoTotal) * 100 + "%");
		}, 100);

		setTimeout(function() {
			clearInterval(interval);
			game.finalizado(playerIndex, respostas);
		}, tempoTotal);
	};

	function exibirTexto(canvas, texto, size) {
		var fontSize = size || 36;
		var render = canvas[0].getContext("2d");
		render.font = fontSize + "px Helvetica";
		render.textAlign = "center";
		render.fillText(texto, canvas[0].width / 2, (canvas[0].height / 2) + (fontSize / 3));
	};

	function drawImage(canvas, pasta, nome) {
		if (nome.startsWith("color:")) {
			var color = nome.split(":")[1];
			canvas.css("background-color", color);
		} else {
			var render = canvas[0].getContext("2d");
			var img = new Image();
			img.onload = function () {
	    		render.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas[0].width, canvas[0].height);
			}
			img.src = "img/" + pasta + "/" + nome;			
		}
	};

	function fimDeJogo(resultado) {
		questaoFinalizada = true;

		var perguntaSize = container.height() / 3;
		var respostaSize = container.height() / 4;
		var resultadoContainerTop = (container.height() - 204) / 2;
		var resultadoContainerLeft = (container.width() - 310) / 2;


		var resultadoContainer = $("<div></div>").addClass("resultado")
			.css("left", (resultadoContainerLeft + container.offset().left) + "px")
			.css("top", resultadoContainerTop + "px");

		respostas[questaoAtual] = {
			"tempo": new Date().getTime() - tempoInicialResposta
		}

		if (resultado) {
			correctAudio[0].play();
			resultadoContainer.text("Resposta certa");
			container.css("background-color", "green");
			respostas[questaoAtual].resultado = CORRETO;
		} else {
			wrongAudio[0].play();
			resultadoContainer.text("Resposta errada");
			container.css("background-color", "red");
			respostas[questaoAtual].resultado = INCORRETO;
		}

		gameContainer.empty();
		gameContainer.append(resultadoContainer);

		questaoAtual++;
		setTimeout(function() {
			container.css("background-color", "transparent");
			exibirQuestaoAtual();
		}, 2000);
	}

	this.addMovementToCanvas = function(value) {
		var hammertime = new Hammer(value, {domEvents:true});
		hammertime.on('pan', function(ev) {
			var render = value.getContext("2d");
			var x = ev.center.x - (value.width /2);
			if (x > container.offset().left && x < container.offset().left + container.width() - value.width) {				
				value.style.left = x;
			}

    		var y = ev.center.y - (value.height/2);
			value.style.top = y;
		});
	};

	this.addCollision = function(canvas) {
		$(canvas).on("click touchend", function(event) {

			$("#" + container.attr("id") + " .canvas-resposta.resposta-correta").collision("#" + container.attr("id") + " .canvas-pergunta").each(function(index) {
				$("#" + container.attr("id") + " .canvas-pergunta").addClass("resultado-ok");
				fimDeJogo(true);
			});

			$("#" + container.attr("id") + " .canvas-resposta:not(.resposta-correta)").collision("#" + container.attr("id") + " .canvas-pergunta").each(function(index) {
				$("#" + container.attr("id") + " .canvas-pergunta").addClass("resultado-errado");
				fimDeJogo(false);
			});

		});	
	};

	this.colidiu = function(pergunta, resposta){
		var xInicioPergunta = pergunta.offsetLeft;
		var xFimPergunta = xInicioPergunta + pergunta.width;
		var yInicioPergunta = pergunta.offsetTop;
		var yFimPergunta = yInicioPergunta + pergunta.height;

		var xMid = resposta.offsetLeft + (resposta.width /2);
		var yMid = resposta.offsetTop + (resposta.height /2);

		return xInicioPergunta < xMid && xFimPergunta > xMid && yInicioPergunta < yMid && yFimPergunta > yMid;
	}

};
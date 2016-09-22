function sortearPerguntas(categoria, nivel) {
	var perguntas = null;
	if (categoria == Categoria.MATEMATICA) {
		perguntas = Matematica[nivel];
	} else if (categoria == Categoria.PORTUGUES) {
		perguntas = Portugues[nivel];
	} else if (categoria == Categoria.INGLES) {
		perguntas = Ingles[nivel];
	}

	return perguntas;
}

var INCORRETO = 0;
var CORRETO = 1;

var Matematica = {};
var Portugues = {};
var Ingles = {};

Matematica[1] = [
	{ "pergunta": "9 + 1", "respostas": ["10", "3", "4", "8"] },
	{ "pergunta": "2 + 2", "respostas": ["4", "5", "9", "8"] },
	{ "pergunta": "7 + 1", "respostas": ["8", "6", "4", "5"] },
	{ "pergunta": "6 + 6", "respostas": ["12", "3", "4", "5"] },
	{ "pergunta": "5 + 2", "respostas": ["7", "3", "10", "9"] },
	{ "pergunta": "6 + 3", "respostas": ["9", "2", "4", "7"] },
	{ "pergunta": "7 + 8", "respostas": ["15", "3", "9", "8"] },
	{ "pergunta": "8 + 3", "respostas": ["11", "3", "7", "8"] },
	{ "pergunta": "5 + 1", "respostas": ["6", "2", "4", "7"] },
	{ "pergunta": "9 + 5", "respostas": ["14", "3", "6", "8"] },
	{ "pergunta": "9 - 1", "respostas": ["8", "5", "4", "6"] },
	{ "pergunta": "8 - 2", "respostas": ["6", "3", "7", "8"] },
	{ "pergunta": "7 - 3", "respostas": ["4", "3", "9", "10"] },
	{ "pergunta": "6 - 4", "respostas": ["2", "3", "8", "4"] },
	{ "pergunta": "5 - 5", "respostas": ["0", "3", "4", "5"] },
	{ "pergunta": "6 - 1", "respostas": ["5", "1", "4", "8"] },
	{ "pergunta": "7 - 1", "respostas": ["6", "1", "4", "11"] },
	{ "pergunta": "10 - 3", "respostas": ["7", "3", "6", "9"] },
	{ "pergunta": "10 - 5", "respostas": ["5", "3", "2", "8"] },
	{ "pergunta": "5 - 2", "respostas": ["3", "1", "4", "7"] }
];

Matematica[2] = [
	{ "pergunta": "19 + 1", "respostas": ["20", "3", "4", "11"] },
	{ "pergunta": "18 + 3", "respostas": ["21", "5", "15", "8"] },
	{ "pergunta": "17 + 2", "respostas": ["19", "20", "13", "5"] },
	{ "pergunta": "16 + 1", "respostas": ["17", "12", "4", "10"] },
	{ "pergunta": "15 + 8", "respostas": ["23", "18", "10", "9"] },
	{ "pergunta": "14 + 1", "respostas": ["15", "11", "4", "7"] },
	{ "pergunta": "13 + 1", "respostas": ["14", "3", "18", "8"] },
	{ "pergunta": "12 + 1", "respostas": ["13", "10", "7", "18"] },
	{ "pergunta": "11 + 1", "respostas": ["12", "2", "14", "12"] },
	{ "pergunta": "10 + 1", "respostas": ["11", "6", "5", "19"] },
	{ "pergunta": "10 - 9", "respostas": ["1", "5", "9", "3"] },
	{ "pergunta": "11 - 8", "respostas": ["3", "10", "7", "6"] },
	{ "pergunta": "12 - 7", "respostas": ["5", "3", "9", "10"] },
	{ "pergunta": "13 - 6", "respostas": ["7", "3", "8", "1"] },
	{ "pergunta": "14 - 5", "respostas": ["9", "3", "11", "5"] },
	{ "pergunta": "15 - 4", "respostas": ["11", "15", "4", "8"] },
	{ "pergunta": "16 - 3", "respostas": ["13", "1", "6", "11"] },
	{ "pergunta": "17 - 2", "respostas": ["15", "3", "20", "9"] },
	{ "pergunta": "18 - 1", "respostas": ["17", "3", "6", "15"] },
	{ "pergunta": "19 - 4", "respostas": ["15", "17", "11", "7"] },
];

Portugues[1] = [
	{ "pergunta": "girafa.jpg", "respostas": ["Girafa", "Girrafa ", "Jirafa", "Girapha"] },
	{ "pergunta": "cachorro.png", "respostas": ["Cachorro", "Caxorro", "Cachoro", "Caxoro"] },
	{ "pergunta": "minhoca.jpg", "respostas": ["Minhoca", "Milhoca", "Minoca", "Minhok"] },
	{ "pergunta": "vaca.jpg", "respostas": ["Vaca", "Faca", "Vacka", "Vaka"] },
	{ "pergunta": "dente.jpg", "respostas": ["Dente", "Pente", "Dende", "Tente"] },
	{ "pergunta": "vassoura.png", "respostas": ["Vassoura", "Vasoura", "Vassolra", "Vassourra"] },
	{ "pergunta": "fivela.png", "respostas": ["Fivela", "Vifela", "Fivera", "Fiveia"] },
	{ "pergunta": "dinossauro.png", "respostas": ["Dinossauro", "Dinosauro", "Sinosalro", "Dinosalro"] },
	{ "pergunta": "aranha.jpg", "respostas": ["Aranha", "Arranha", "Aralha", "Arralha"] },
	{ "pergunta": "abelha.png", "respostas": ["Abelha", "Abenha", "Abelia", "Abela"] },
	{ "pergunta": "janela.jpg", "respostas": ["Janela", "Janelia", "Ganela", "Lanela"] },
	{ "pergunta": "bolsa.jpg", "respostas": ["Bolsa", "Bolssa", "Bolça", "Bousa"] },
	{ "pergunta": "joaninha.png", "respostas": ["Joaninha", "Joanilha", "Joalhilha", "Joalinha"] },
	{ "pergunta": "sapato.jpg", "respostas": ["Sapato", "Zapato", "Capato", "Apato"] },
	{ "pergunta": "tartaruga.png", "respostas": ["Tartaruga", "Tataruga", "Tartaruja", "Tataruja"] },
	{ "pergunta": "casa.png", "respostas": ["Casa", "Caça", "Cassa", "Caxas"] },
	{ "pergunta": "peixe.png", "respostas": ["Peixe", "Pexe", "Peiche", "Peche"] },
	{ "pergunta": "caixa.jpg", "respostas": ["Caixa", "Caicha", "Cacha", "Caxa"] },
	{ "pergunta": "elefante.jpg", "respostas": ["Elefante", "Elevante", "Elhefante", "Elefanti"] },
	{ "pergunta": "igreja.png", "respostas": ["Igreja", "Igregra", "Ingreja", "Igeja"] }
];

Portugues[2] = [
	{ "pergunta": "arvore.png", "respostas": ["Árvore", "Arvore", "Arfore", "Árfore"] },
	{ "pergunta": "coruja.jpg", "respostas": ["Coruja", "Coruga", "Curuja", "Curuga"] },
	{ "pergunta": "galinha.png", "respostas": ["Galinha", "Galhinha", "Jalinha", "Galilha"] },
	{ "pergunta": "ovelha.jpg", "respostas": ["Ovelha", "Ofelha", "Ovenha", "Ofenha"] },
	{ "pergunta": "abacaxi.jpg", "respostas": ["Abacaxi", "Abacachi", "Abacaci", "Abacashi"] },
	{ "pergunta": "violao.jpg", "respostas": ["Violão", "Fiolão", "Violao", "Violau"] },
	{ "pergunta": "golfinho.jpg", "respostas": ["Golfinho", "Goufinho", "Golvinho", "Gouvinho"] },
	{ "pergunta": "bruxa.png", "respostas": ["Bruxa", "Brucha", "Buxa", "Bluxa"] },
	{ "pergunta": "calca.jpg", "respostas": ["Calça", "Cauça", "Calsa", "Causa"] },
	{ "pergunta": "cafe.jpg", "respostas": ["Xícara", " Chicara", "Zicara", "Sicara"] },
	{ "pergunta": "televisao.jpg", "respostas": ["Televisão", "Televizão", "Televição", "Televissão"] },
	{ "pergunta": "radio.jpg", "respostas": ["Rádio", "Radio", "Ádio", "Vádio"] },
	{ "pergunta": "oculos.gif", "respostas": ["Óculos", "Oculos", "Hoculos", "Roculos"] },
	{ "pergunta": "computador.png", "respostas": ["Computador", " Cumputador", "Romputador", "Conputador"] },
	{ "pergunta": "geladeira.jpg", "respostas": ["Geladeira", "Jeladeira", "Jeladera", "Geladera"] },
	{ "pergunta": "chupeta.jpg", "respostas": ["Chupeta", "Jupeta", "Xupeta", "Xuppta"] },
	{ "pergunta": "carroca.jpg", "respostas": ["Carroça ", "Caroça", "Carossa", "Carrosa"] },
	{ "pergunta": "caminhao.png", "respostas": ["Caminhão", "Camilhão", "Caminhao", "Kaminhão"] },
	{ "pergunta": "baleia.jpg", "respostas": ["Baleia", "Baléia", "Balheia", "Balela"] },
	{ "pergunta": "aviao.png", "respostas": ["Avião", "Aviao", "Afião", "Afiã"] },
	{ "pergunta": "maca.png", "respostas": ["Maçã", "Massã", "Maça", "Macã"] },
];

Ingles[1] = [
	{ "pergunta": "color:black", "respostas": ["BLACK", "BLEQUE", "BLAK", "BLAQUE"] },
	{ "pergunta": "color:#404040", "respostas": ["GRAY", "GREY", "GRAI", "GREI"] },
	{ "pergunta": "color:white", "respostas": ["WHITE", "WHEITE", "WHAITE", "WHATE"] },
	{ "pergunta": "color:#FF8C00", "respostas": ["ORANGE", "HORANGE", "ORANGI", "ORENGI"] },
	{ "pergunta": "color:red", "respostas": ["RED", "RAD", "RADE", "HAD"] },
	{ "pergunta": "color:green", "respostas": ["GREEN", "GRIN", "GREN", "GREIN"] },
	{ "pergunta": "color:#FF00FF", "respostas": ["PINK", "PINQUE", "PENK", "PINKE"] },
	{ "pergunta": "color:yellow", "respostas": ["YELLOW", "IELLOU", "YELOU", "YALLOW"] },
	{ "pergunta": "color:#800080", "respostas": ["PURPLE", "PARPLE", "POURPLE", "PURPLLE"] },
	{ "pergunta": "color:#8B4513", "respostas": ["BROWN", "BREWN", "BRAUN", "BRAWN"] },
	{ "pergunta": "um.jpg", "respostas": ["ONE", "ONNE", "UNE", "UAN"] },
	{ "pergunta": "dois.jpg", "respostas": ["TWO", "TUO", "TCHU", "TWOU"] },
	{ "pergunta": "tres.jpg", "respostas": ["THREE", "TRI", "TRE", "TREE"] },
	{ "pergunta": "quatro.jpg", "respostas": ["FOUR", "FHOR", "PHOR", "FOOR"] },
	{ "pergunta": "cinco.jpg", "respostas": ["FIVE", "FEIVE", "FAIVE", "FEIV"] },
	{ "pergunta": "seis.jpg", "respostas": ["SIX", "SEX", "CIX", "SIQS"] },
	{ "pergunta": "sete.jpg", "respostas": ["SEVEN", "CEVEM", "SAVAN", "SEEVEN"] },
	{ "pergunta": "oito.jpg", "respostas": ["EIGHT", "EITH", "HEIGT", "HEIGHT"] },
	{ "pergunta": "nove.jpg", "respostas": ["NINE", "NAINE", "NAINE", "NINEE"] },
	{ "pergunta": "dez.png", "respostas": ["TEN", "TEM", "TAN", "TENN"] }
];

Ingles[2] = [
	{ "pergunta": "lapis.png", "respostas": ["PENCIL", "PEENCIL", "PENSIL", "PENCIU"] },
	{ "pergunta": "caneta.gif", "respostas": ["PEN", "PEEN", "PEM", "PEEM"] },
	{ "pergunta": "caderno.jpg", "respostas": ["NOTEBOOK", "NOTBOOK", "NOOTBOK", "NOTEBBOK"] },
	//{ "pergunta": "apontador.jpg", "respostas": ["SHARPENER", "SCHARPPENER", "SHAPENER", "SCHARPENER"] },
	{ "pergunta": "cadeira.jpg", "respostas": ["CHAIR", "CHEIR", "XAIR", "CHEER"] },
	{ "pergunta": "borracha.jpeg", "respostas": ["ERASER", "ERRASE", "ESRASER", "ARESER"] },
	{ "pergunta": "mochila.jpg", "respostas": ["SCHOOLBAG", "ESCOOLBEG", "SCHOOLBBAG", "SCHOLBAG"] },
	{ "pergunta": "tesoura.png", "respostas": ["SCISSORS", "ISCISSORS", "CISSORS", "SCISORS"] },
	{ "pergunta": "estojo.png", "respostas": ["CASE", "KAISE", "QUEISY", "CEISE"] },
	{ "pergunta": "regua.png", "respostas": ["RULER", "REILER", "HULLER", "RULLER"] },
	{ "pergunta": "carro.jpg", "respostas": ["CAR", "KARRO", "KAR", "CAAR"] },
	{ "pergunta": "computador.png", "respostas": ["COMPUTER", "CONPUTTER", "COMPIUTER", "CONPUTER"] },
	{ "pergunta": "celular.jpg", "respostas": ["CELL PHONE", "CEUPHONE", "CELL FONE", "CEL PHONE"] },
	{ "pergunta": "onibus.jpg", "respostas": ["BUS", "BOS", "BASS", "BUSS"] },
	{ "pergunta": "bola.png", "respostas": ["BALL", "BOOL", "BAU", "BOOU"] },
	{ "pergunta": "bicicleta.jpg", "respostas": ["BICYCLE", "BICICLE", "BECYCLE", "BICICLE"] },
	{ "pergunta": "escola.gif", "respostas": ["SCHOOL", "ISCOOL", "ESCOL", "SHOOL"] },
	{ "pergunta": "mesa.jpeg", "respostas": ["TABLE", "TABLOW", "TEIBOU", "TABBLE"] },
	{ "pergunta": "televisao.jpg", "respostas": ["TELEVISION", "TELLEVISION", "TELEVISON", "TIVI"] },
	{ "pergunta": "camera.jpg", "respostas": ["CAMERA", "QUEMERA", "PHOTOGRAFY", "MACHINE"] }
];
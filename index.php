<!DOCTYPE html>
<html lang="br">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">



<title>TP Final de Visualização de Dados</title>

<link rel="stylesheet" href="css/visualizacao.css">
<link rel="stylesheet" type="text/css" href="css/sunburst.css" />

<link href="./lib/bootstrap3/css/bootstrap.css" rel="stylesheet">
<link href="./lib/bootstrap3/css/bootstrap-theme.css" rel="stylesheet">

<link href="./lib/bootstrap3/css/bootstrap.css" rel="stylesheet">
<link href="./lib/bootstrap3/css/bootstrap-theme.css" rel="stylesheet">
<script type="text/javascript" src="./lib/jquery/jquery-1.11.3.js"></script>
<script type="text/javascript" src="./lib/bootstrap3/js/bootstrap.js"></script>
<script type="text/javascript" src="./lib/d3/d3.js"></script>

<!-- Custom styles for this template -->
<link href="lib/ie/starter-template.css" rel="stylesheet">
<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<script src="./lib/ie/ie-emulation-modes-warning.js"></script>
<script src="./lib/ie/ie10-viewport-bug-workaround.js"></script>
</head>

<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Trabalho Final</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">

				<ul class="nav navbar-nav">
					<li class="active"><a href="#inicio"
						data-toggle="tab">Visualização</a></li>
					<li class=""><a href="#about" data-toggle="tab">Sobre</a></li>
					<li class=""><a href="#contact" data-toggle="tab">Contatos</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>

<!-- Aqui entra o que vai conter em cada aba -->
	<div class="tab-content">
	
		<!-- Aba de inicio contem as visualizações -->
		<div class="tab-pane  active" id="inicio">
			<?php include('visualizacao.php');?>
		</div>

		<div class="tab-pane" id="about">
			<div id = "sobre">
			<h2>Trabalho final da disciplina Visualização de Dados</h2>
			<br>
			<h3>Instruções</h3>
			<p>1 - Cada disco pequeno no grafico a esquerda representa uma localidade.</p>
			<p>2 - Ao se clicar em um disco, o sunburst, a direita representa o qual foi a contribuição de cada tipo de falha.
			<p>3 - Ao se passar o mouse sobre o sunburst, podemos visualizar a contribuição que cada item de confuguração teve na media do periodo de interrupçao, bem como a causa da falha.   
			</div>
		</div>

		<div class="tab-pane" id="contact">
			<div id ="contatos">
			<h3>Guilherme Henrique Rodrigues Nascimento</h3>
			<h3>Mauri Miguel</h3>
			<h3>Leandro Augusto</h3>
			 
			</div>
		</div>
	</div>
</body>

</html>

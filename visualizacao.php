<div id="content" class="row"> 
		<!--Grafico Scatterplot : col-md-8-->
		<div id="scatteGraph" class="col">
		</div>
		
		<!--Grafico Sunburst col-md-4 -->
		<div id="sunburstGraph" class="col">
			<div id="sequence"></div>
			<div id="chart">
				<div id="explanation" style="visibility: hidden;">
					<span id="percentage"></span><br /> Tempo médio de recuperação.
				</div>
			</div>
		</div>
		<div id="sidebar">			
			<!-- Mudei o checkbox da legenda para um botão -->
			<div id="conjuntoLegenda">
				<div id="legend"></div>
				<button type="button" class="btn btn-primary" id="botaoLegenda">
					<i class="glyphicon glyphicon-list"></i>
				</button>
			</div>
		</div>
	</div>

	<!-- JS's -->
	<script src="js/visualizacao.js"></script>
	<script src="js/scatterplot.js"></script>

	<!-- Sunburst -->
	<script src="js/sunburst.js"></script>
	<script type="text/javascript">
		// Hack to make this example display correctly in an iframe on bl.ocks.org
		//d3.select(self.frameElement).style("height", "700px");
	</script>

	<!--Inicio-->
	

		<script type="text/javascript">
			$(document).ready(function() {
				scarter ();

				parseSunburst("dados");
			});

		</script>

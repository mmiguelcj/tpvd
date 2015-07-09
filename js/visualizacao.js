/*
 *Pega um arquivo CSV no formato  RFC4180 e
 *o transforma em um Objeto.
 */
//Gera Scaterplot
function scarter() {
    d3.text("data/data.csv", function(text) {
        var json = d3.csv.parse(text);
        var dataScatter = parseScatterplot(json);
        console.log(dataScatter);
        createScatterplot(dataScatter);
    });
}


function parseSunburst(name) {
    d3.text("data/" + name + ".csv", function(text) {
        var csv = d3.csv.parseRows(text);
        dados = buildHierarchy(csv);
        console.log(dados);
        globalSun(dados);
    });
}

//Configurando os dados para serem usados no Scatterplot.
function parseScatterplot(Data) {
    //Separando os objetos por tipos.
    var vetor = new Array();
    Data.forEach(function(elemento) {
        vetor[elemento.Area] = Data.filter(function(dado) {
            return dado.Area == elemento.Area;
        });
    });

    //Tempo Médio de interrupções por área.
    var tempoTotal = [];
    //Para cada Área.
    for (var key in vetor) {
        //Some seus tempos totais em segundos.
        tempoTotal = vetor[key].reduce(function(prev, cur) {
            temposegundos = cur["Interrupcao"].split(':');
            if (isNaN(temposegundos)) {
                temposegundos = parseInt(temposegundos[0] * 60 + temposegundos[1] * 60 + temposegundos[2] * 60);
            } else
                temposegundos = 0;
            return prev + temposegundos;
        }, 0) / vetor[key].length;
        //vetor[key]["tempoTotal"] =  Math.log(tempoTotal) / Math.log(2);
        vetor[key]["tempoTotal"] = tempoTotal / 60; //minutos
    }
    //Ordenando por tempo total;
    return sortObject(vetor);
}

//Transforma segundos em horas
function formatTime(secs) {
    var times = new Array(3600, 60, 1);
    var time = '';
    var tmp;
    for (var i = 0; i < times.length; i++) {
        tmp = Math.floor(secs / times[i]);
        if (tmp < 1) {
            tmp = '00';
        } else if (tmp < 10) {
            tmp = '0' + tmp;
        }
        time += tmp;
        if (i < 2) {
            time += ':';
        }
        secs = secs % times[i];
    }

    return time;
}

//Ordenando por tempo total;
function sortObject(obj) {
    var newObj = [];
    keysSorted = Object.keys(obj).sort(function(a, b) {
        return obj[a]["tempoTotal"] - obj[b]["tempoTotal"];
    });
    for (var key in obj) {
        x = keysSorted.pop();
        newObj[x] = obj[x];
    }
    return newObj;
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
    var root = {
        "name": "root",
        "children": []
    };
    for (var i = 0; i < csv.length; i++) {
        var sequence = csv[i][0];
        var size = +csv[i][1];
        if (isNaN(size)) { // e.g. if this is a header row
            continue;
        }
        var parts = sequence.split("-");
        var currentNode = root;
        for (var j = 0; j < parts.length; j++) {
            var children = currentNode["children"];
            var nodeName = parts[j];
            var childNode;
            if (j + 1 < parts.length) {
                // Not yet at the end of the sequence; move down the tree.
                var foundChild = false;
                for (var k = 0; k < children.length; k++) {
                    if (children[k]["name"] == nodeName) {
                        childNode = children[k];
                        foundChild = true;
                        break;
                    }
                }
                // If we don't already have a child node for this branch, create it.
                if (!foundChild) {
                    childNode = {
                        "name": nodeName,
                        "children": []
                    };
                    children.push(childNode);
                }
                currentNode = childNode;
            } else {
                // Reached the end of the sequence; create a leaf node.
                childNode = {
                    "name": nodeName,
                    "size": size
                };
                children.push(childNode);
            }
        }
    }
    return root;
};

//codigo para manipular a legenda

$(document).ready(function() {
    $("#botaoLegenda").click(function() {
        $("#legend").slideToggle("slow");
    });
});

//Códigos que não uso mais.
/* //Mapeandos Areas.
     var dataMap = data.map(function(elemento) {
         return elemento.Area;
     });
     //Array do tipo diferente de Áreas.
     var labelData = dataMap.filter(function(este, i) {
         return dataMap.indexOf(este) == i;
     });*/
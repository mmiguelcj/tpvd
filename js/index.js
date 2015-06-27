/*
 *Pega um arquivo CSV no formato  RFC4180 e
 *o transforma em um Objeto.
 */
d3.text("data/data.csv", function(text) {
    var json = d3.csv.parse(text);
    dataScatter = parseScatterplot(json);
    console.log(dataScatter);
    createScatterplot(dataScatter);
});

//Configurando os dados para serem usados no Scatterplot.
function parseScatterplot(Data) {
    //Separando os objetos por tipos
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


//Códigos que não uso mais.
/* //Mapeandos Areas.
     var dataMap = data.map(function(elemento) {
         return elemento.Area;
     });
     //Array do tipo diferente de Áreas.
     var labelData = dataMap.filter(function(este, i) {
         return dataMap.indexOf(este) == i;
     });*/
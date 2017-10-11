angular.module('app').controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

    var fechaSinAbreviar = function(fecha){
        var fechaResultado = '';
        var mes = fecha.split(' ')[0];
        var anho = fecha.split(' ')[1];

        switch(mes){
            case 'Ene':
                fechaResultado = 'Enero';
                break;
            case 'Feb':
                fechaResultado = 'Febrero';
                break;
            case 'Mar':
                fechaResultado = 'Marzo';
                break;
            case 'Abr':
                fechaResultado = 'Abril';
                break;
            case 'May':
                fechaResultado = 'Mayo';
                break;
            case 'Jun':
                fechaResultado = 'Junio';
                break;
            case 'Jul':
                fechaResultado = 'Julio';
                break;
            case 'Ago':
                fechaResultado = 'Agosto';
                break;
            case 'Sep':
                fechaResultado = 'Septiembre';
                break;
            case 'Oct':
                fechaResultado = 'Octubre';
                break;
            case 'Nov':
                fechaResultado = 'Noviembre';
                break;
            case 'Dic':
                fechaResultado = 'Diciembre';
                break;
            default:
                break;

                  }
        
        return fechaResultado = fechaResultado + " 20" + anho;
    }

    var ctx = document.getElementById("bar").getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.2, '#0091B2');   
    gradient.addColorStop(1, '#49479d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sep 16", "Oct 16", "Nov 16", "Ene 17", "Feb 17", "Mar 16"],
            datasets: [{
                data: [24000, 30000, 15000, 40000, 30990, 43000],
                backgroundColor: '#0091B2',
                borderWidth: 0,
                hoverBackgroundColor : gradient,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                }],
                xAxes: [{
                    barPercentage: 0.4,
                    gridLines : {
                        display : false
                    }
                }]
            },
            tooltips: {
                mode: 'index',
                yPadding: 20,
                xPadding: 20,
                caretSize: 10,
                backgroundColor: '#ffffff',
                displayColors: false,
                borderColor: '#9a9a9a',
                borderWidth: 0.5,
                titleFontFamily:'NeoSansStd Regular' ,
                titleFontColor: '#333333',
                titleFontSize: 18,
                bodyFontFamily: 'NeoSansStd Bold',
                bodyFontColor: '#333333',
                bodyFontSize: 22,
                bodyFontColor: '#49479d',
                callbacks: {
                    beforeTitle: function(tooltipItems, chart) {
                        return "Facturación";
                    },
                    title: function(tooltipItems, chart) {
                        return fechaSinAbreviar(tooltipItems[0].xLabel);
                    },
                    beforeLabel: function(tooltipItems, chart) {
                        return "Monto Pagado";
                    },
                    label: function(tooltipItems, chart) {
                        return '$' + tooltipItems.yLabel.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + '.');
                    },
                }
            }

        }
    });

}]);

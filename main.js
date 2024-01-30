var dynamicData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const canvas = document.getElementById('roda-da-vida');

Chart.register(ChartDataLabels);

const legendLabelColors = ['#7ea34b',
    '#7ea34b',
    '#7ea34b',
    '#F4A8AA',
    '#F4A8AA',
    '#F4A8AA',
    '#57b8f0',
    '#57b8f0',
    '#57b8f0',
    '#C6AAD2',
    '#C6AAD2',
    '#C6AAD2'];

const config = {
    type: "polarArea",
    data: {
        labels: ["Hobbies e Diversão", "Plenitude e Felicidade", "Espiritualidade",
            "Saúde e Disposição", "Desenvolvimento Intelectual", "Equilíbrio Emocional",
            "Contribuição Social", "Recursos Financeiros", "Realização e Propósito",
            "Vida Social", "Relacionamento Amoroso", "Família"],
        datasets: [
            {
                data: dynamicData,
                backgroundColor: ['#7ea34b',
                    '#7ea34b',
                    '#7ea34b',
                    '#F4A8AA',
                    '#F4A8AA',
                    '#F4A8AA',
                    '#57b8f0',
                    '#57b8f0',
                    '#57b8f0',
                    '#C6AAD2',
                    '#C6AAD2',
                    '#C6AAD2'],
                datalabels: {
                    formatter: (value) => value,
                    color: "#ffffff"
                },
            },
            {
                helper: true,
                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                backgroundColor: ['transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent'],
                datalabels: {
                    display: false
                }
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                ticks: {
                    display: false
                },
                pointLabels: {
                    display: false
                }
            }
        },
        scale: {
            min: 0,
            max: 10
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false // Remover completamente a exibição do tooltip
            },
            labels: {
                arc: true,
                fontColor: '#000',
                position: 'outside',
                fontSize: 14,
                render: (args) => args.dataset.helper ? args.label : '',
                fontColor: (args) => legendLabelColors[args.index]
            }
        }
    }
}

const chart = new Chart('roda-da-vida', config);


function handleRatingClick(containerId, category, rating) {
    chart.data.datasets[0].data[category] = rating;
    chart.update();

    var buttonsContainer = document.getElementById(containerId + "-ratings");
    var buttons = buttonsContainer.querySelectorAll('.rating-button');
    buttons.forEach(function (button, index) {
        if (index <= rating) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function createButtons(containerId, category) {
    var container = document.getElementById(containerId + "-ratings");
    for (var i = 0; i <= 10; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.classList.add('rating-button');
        button.addEventListener('click', function () {
            handleRatingClick(containerId, category, parseInt(this.textContent));
        });
        container.appendChild(button);
    }
}

// Criar os botões para cada categoria
createButtons("hobbies", 0);
createButtons("plenitude", 1);
createButtons("espiritualidade", 2);

createButtons("saude", 3);
createButtons("desenvolvimento", 4);
createButtons("equilibrio", 5);

createButtons("contribuicao", 6);
createButtons("recursos", 7);
createButtons("realizacao", 8);

createButtons("vida", 9);
createButtons("relacionamento", 10);
createButtons("familia", 11);
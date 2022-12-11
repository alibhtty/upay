const ctx = document.getElementById('myChart')
const names = ['Carlos', 'Pedro', 'Pau', 'Juan', 'Ali']
const ages = [24, 12, 18, 29, 20]

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: 'Consumo',
            data: ages,
            backgroundColor: [
                'rgb(0, 204, 153, 1)',
                'rgb(153, 153, 255, 1)',
                'rgb(255, 153, 51, 1)',
                'rgba(75, 102, 255, 1)',
                'rgb(102, 0, 255, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWith: 1.5
    }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'right',
          },
          /* title: {
            display: true,
            text: 'Tu mesa'
          } */
        }
      },
})
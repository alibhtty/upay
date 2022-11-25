const ctx = document.getElementById('myChart')
const names = ['Carlos', 'Pedro', 'María', 'Juan', 'Ali']
const ages = [24, 12, 18, 29, 20]

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: 'Consumo',
            data: ages,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 206, 86, 1)',
                'rgba(255, 192, 192, 1)',
                'rgba(75, 102, 255, 1)',
                'rgba(153, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 206, 86, 1)',
                'rgba(255, 192, 192, 1)',
                'rgba(75, 102, 255, 1)',
                'rgba(153, 162, 235, 1)',
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
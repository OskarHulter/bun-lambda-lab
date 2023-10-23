import gradient from 'chartjs-plugin-gradient'

Chart.register(gradient)

const chart = new Chart(ctx, {
  data: {
    datasets: [{
      // data
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: 'red',
            50: 'yellow',
            100: 'green'
          }
        },
        borderColor: {
          axis: 'x',
          colors: {
            0: 'black',
            1: 'white',
            2: 'black',
            3: 'white'
          }
        }
      }
    }]
  }
})


// color: 'green'                  // named color
// color: '#dc143c'                // HEX color
// color: 'rgb(51, 170, 51)'       // RGB color (opaque)
// color: 'rgba(51, 170, 51, .5)'  // RGBa color (semi-transparent)
export const datalabelsConfig = {
  options: {
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
        color: '#36A2EB'
      }
    }
  },
  data: {
    datasets: [{
      // Change options only for labels of THIS DATASET
      datalabels: {
        color: '#FFCE56'
      }
    }]
  }
} as const

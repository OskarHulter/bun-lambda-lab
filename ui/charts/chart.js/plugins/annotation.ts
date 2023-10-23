
export const annotationOptions = {
  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          xMin: 'February',
          xMax: 'February',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
        }
      }
    }
  }
} as const

export const config = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: annotationOptions
} as const

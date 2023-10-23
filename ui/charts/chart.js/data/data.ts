export const data = {
  datasets: [{
    data: [0, 0],
  }, {
    data: [0, 1]
  }, {
    data: [1, 0],
    showLine: true // overrides the `line` dataset default
  }, {
    type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
    data: [1, 1]
  }]
}

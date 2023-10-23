import Chart from 'chart.js/auto'
import { config } from './configs'

export const myChart = new Chart(
  document.getElementById('myChart'),
  config,
)

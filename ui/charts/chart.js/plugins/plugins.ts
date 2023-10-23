import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import annotationPlugin from 'chartjs-plugin-annotation'
import datalabelsPlugin from 'chartjs-plugin-datalabels'
import a11yPlugin from "chartjs-plugin-a11y-legend"
import zoomPlugin from 'chartjs-plugin-zoom'
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes'
// import colorschemesPlugin from 'chartjs-plugin-colorschemes'
// ? https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
import { SuperfishelStone10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau'
import { de } from 'date-fns/locale'

Chart.register(zoomPlugin, a11yPlugin, annotationPlugin, datalabelsPlugin)
Chart.defaults.set('plugins.datalabels', {
  color: '#FE777B'
})


// 'millisecond'
// 'second'
// 'minute'
// 'hour'
// 'day'
// 'week'
// 'month'
// 'quarter'
// 'year'

export const timeConfig = {
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
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'month'
      }
    }
  },
  options: {
    adapters: {
      date: {
        locale: de
      }
    },
  }
} as const

export const barConfig = {
  type: "bar",
  data: {
    datasets: [{
      data: [1, 4, 2, 8]
    }]
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'xy',
      }
    }
  },
  colorschemes: {
    scheme: SuperfishelStone10
  }
} as const



// ? global plugins
// Chart.register({
//     // plugin implementation
// });

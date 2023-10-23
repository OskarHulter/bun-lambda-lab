import Chart from 'chart.js/auto'
import { data } from './data/data'
import { getRelativePosition } from 'chart.js/helpers'
import { Colors } from 'chart.js'

Chart.register(Colors)
const getCanvasPosition = (e: any, chart: any, get: any) => get(e, chart)
const getClickPosition = (e: any, cb: any) => {

  const canvasPosition = cb(e, chart)

  // Substitute the appropriate scale IDs
  const dataX = chart.scales.x.getValueForPixel(canvasPosition.x)
  const dataY = chart.scales.y.getValueForPixel(canvasPosition.y)
}
export const experimentalConfig = {
  data,
  type: 'line',
  options: {
    scales: {
      y: {
        stacked: true
      },
      x: {
        type: 'timeseries',
      }
    },
    plugins: {
      colors: {
        enabled: true
      }
    }
  },
  onClick: (e: Event): any => getRelativePosition(e, chart)
}

export const lineConfig = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
}

export const barConfig = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
}

export const interpolationConfig = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200
      }
    }
  },
}
// const chart = new Chart(ctx, config)

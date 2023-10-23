let width, height, gradient
export function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth
    height = chartHeight
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
    gradient.addColorStop(0, Utils.CHART_COLORS.blue)
    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow)
    gradient.addColorStop(1, Utils.CHART_COLORS.red)
  }

  return gradient
}

const DATA_COUNT = 7
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 }
const labels = Utils.months({ count: 7 })

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: function (context) {
        const chart = context.chart
        const { ctx, chartArea } = chart

        if (!chartArea) {
          // This case happens on initial chart load
          return
        }
        return getGradient(ctx, chartArea)
      },
    },
  ]
}

import 'chartjs-plugin-style'

export const stylePlugin = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [45, 20, 64, 32, 76, 51],
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      pointBevelWidth: 3,
      pointBevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
      pointBevelShadowColor: 'rgba(0, 0, 0, 0.5)',
      pointShadowOffsetX: 3,
      pointShadowOffsetY: 3,
      pointShadowBlur: 10,
      pointShadowColor: 'rgba(0, 0, 0, 0.5)',
      pointHoverInnerGlowWidth: 20,
      pointHoverInnerGlowColor: 'rgba(255, 255, 0, 0.5)',
      pointHoverOuterGlowWidth: 20,
      pointHoverOuterGlowColor: 'rgba(255, 255, 0, 1)',
      backgroundOverlayColor: ctx.createPattern(img, 'repeat'),
      backgroundOverlayMode: 'multiply'
    }]
  },
  options: {
    tooltips: {
      bevelWidth: 3,
      bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
      bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  }
}

const talib = require("../build/Release/talib")
// market data as arrays
const marketData = { open: [0, 1], close: [2, 3], high: [5, 7], low: [0, 1], volume: [100, 200] }

// execute Average Directional Movement Index indicator with time period 9
talib.execute({
  name: "ADX",
  startIdx: 0,
  endIdx: marketData.close.length - 1,
  high: marketData.high,
  low: marketData.low,
  close: marketData.close,
  optInTimePeriod: 9
}, function (err, result) {

  console.log("ADX Function Results:")
  console.log(result)

})

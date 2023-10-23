import { PolygonAPI, Quote, HistoricalData, CryptoData } from './PolygonAPI'
import { formatDate } from './utils'

const polygonAPI = new PolygonAPI('YOUR_API_KEY')

async function main() {
  try {
    const quote: Quote = await polygonAPI.getQuote('AAPL')
    console.log(quote)

    const startDate = formatDate(new Date('2021-01-01'))
    const endDate = formatDate(new Date('2021-12-31'))
    const historicalData: HistoricalData[] = await polygonAPI.getHistoricalData('AAPL', startDate, endDate)
    console.log(historicalData)

    const cryptoData: CryptoData[] = await polygonAPI.getCryptoData('BTC')
    console.log(cryptoData)
  } catch (error) {
    console.error(error)
  }
}

main()

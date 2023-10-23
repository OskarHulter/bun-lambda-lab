import axios from 'axios'

interface StockQuote {
  symbol: string
  price: number
  volume: number
  timestamp: number
}

interface HistoricalData {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

interface CryptoQuote {
  symbol: string
  price: number
  volume: number
  timestamp: number
}

interface PolygonAPIOptions {
  apiKey: string
}

class PolygonAPI {
  private apiKey: string

  constructor(options: PolygonAPIOptions) {
    this.apiKey = options.apiKey
  }

  async getStockQuote(symbol: string): Promise<StockQuote> {
    const response = await axios.get(`https://api.polygon.io/v1/last/stocks/${symbol}?apiKey=${this.apiKey}`)
    return response.data
  }

  async getHistoricalData(symbol: string, date: string): Promise<HistoricalData[]> {
    const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${date}/${date}?apiKey=${this.apiKey}`)
    return response.data.results
  }

  async getCryptoQuote(symbol: string): Promise<CryptoQuote> {
    const response = await axios.get(`https://api.polygon.io/v1/last/crypto/${symbol}?apiKey=${this.apiKey}`)
    return response.data
  }
}

export default PolygonAPI

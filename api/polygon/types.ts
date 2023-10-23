interface Quote {
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

interface CryptoData {
  symbol: string
  price: number
  volume: number
  timestamp: number
}

export { Quote, HistoricalData, CryptoData }

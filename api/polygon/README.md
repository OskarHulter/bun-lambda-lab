# Polygon.io API Wrapper

This is a TypeScript wrapper for the Polygon.io API, providing comprehensive and detailed functionality to access financial data such as stock quotes, historical data, and more. It also includes support for retrieving information about cryptocurrencies.

## Installation (NOT WORKING)

To use this wrapper in your TypeScript project, you can install it via npm:

```bash
npm install polygon-io-api-wrapper
```

## Usage (WORKING)

To get started, import the necessary classes and types from the package:

```typescript
import { PolygonAPI, Quote, HistoricalData, CryptoData } from 'polygon-io-api-wrapper';
```

### Initialization

Create an instance of the `PolygonAPI` class by providing your API key:

```typescript
const polygonAPI = new PolygonAPI('YOUR_API_KEY');
```

### Stock Quotes

To retrieve stock quotes, use the `getQuote` method:

```typescript
const quote: Quote = await polygonAPI.getQuote('AAPL');
console.log(quote);
```

### Historical Data

To fetch historical data for a specific stock, use the `getHistoricalData` method:

```typescript
const historicalData: HistoricalData[] = await polygonAPI.getHistoricalData('AAPL', '2021-01-01', '2021-12-31');
console.log(historicalData);
```

### Cryptocurrency Data

To get information about cryptocurrencies, use the `getCryptoData` method:

```typescript
const cryptoData: CryptoData[] = await polygonAPI.getCryptoData('BTC');
console.log(cryptoData);
```

## API Reference

For detailed information about all available methods and types, please refer to the [API Reference](https://polygon.io/docs/stocks/getting-started).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://mit-license.org/).

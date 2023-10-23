import { Money } from "@half0wl/money"

/**
 * Basic operations
 */
const listing = new Money('USD', 19999)                // Default constructor from int
listing.getCurrency()                                  // => USD
listing.getAmount()                                    // => 19999
listing.toLocaleString()                               // => '$199.99'

const shipping = Money.fromFloat('USD', 15.00)         // From float
shipping.getAmount()                                   // => 1500
shipping.toLocaleString()                              // => '$15.00'

const xmasDiscount = Money.fromString('USD', '2000')   // From int-string
xmasDiscount.getAmount()                               // => 2000
xmasDiscount.toLocaleString()                          // => '$20.00'

const promoDiscount = Money.fromString('USD', '10.00') // From float-string
promoDiscount.getAmount()                              // => 1000
promoDiscount.toLocaleString()                         // => '$10.00'

const subtotal = listing
  .add(shipping)
  .subtract(xmasDiscount, promoDiscount)
subtotal.getCurrency()                                 // => 'USD'
subtotal.getAmount()                                   // => 18499
subtotal.toLocaleString()                              // => '$184.99'

/**
 * Other arithmetic operations
 */
subtotal.multiply(2.4).toLocaleString()                // => '$443.98'
subtotal.divide(8).toLocaleString()                    // => $23.12

/**
 * Comparisons
 */
promoDiscount.equals(promoDiscount)                    // => false
promoDiscount.greaterThan(promoDiscount)               // => true
shipping.greaterThanOrEqual(listing)                   // => false
shipping.lessThan(listing)                             // => true

/**
 * Formatting
 */
const tenDollars = new Money('USD', 1000)
// Using default locale (`en-US`):
tenDollars.toLocaleString()                            // => $10.00
// Using different locale:
tenDollars.toLocaleString('fr-CA')                     // => 10,00 $ US
// JSON
tenDollars.toJSON()                                    // => {
//      currency: 'USD',
//      amount: 1000
//    }

/**
 * Immutability
 */
// All operations return a new `Money` object:
const sixEur = new Money('EUR', 600)
const oneEur = new Money('EUR', 100)
sixEur.add(oneEur)       // This returns a new Money object!
sixEur.toLocaleString()  // => '€6.00'
// The amount value is *not* updated in-place.

// To get the result of `sixEur.add(oneEur)`:
const result = sixEur.add(oneEur)
result.toLocaleString()  // => '€7.00'

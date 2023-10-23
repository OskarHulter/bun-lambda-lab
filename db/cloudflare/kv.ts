import { createStorage } from "unstorage"
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding"

// Using binding name to be picked from globalThis
const storage = createStorage({
  driver: cloudflareKVBindingDriver({ binding: "STORAGE" }),
})

// Directly setting binding
const storage = createStorage({
  driver: cloudflareKVBindingDriver({ binding: globalThis.STORAGE }),
})

// Using from Durable Objects and Workers using Modules Syntax
const storage = createStorage({
  driver: cloudflareKVBindingDriver({ binding: this.env.STORAGE }),
})

// Using outside of Cloudflare Workers (like Node.js)
// Use cloudflare-kv-http

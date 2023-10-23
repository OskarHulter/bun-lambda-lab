import { createStorage } from "unstorage"
import cloudflareR2BindingDriver from "unstorage/drivers/cloudflare-r2-binding"

// Using binding name to be picked from globalThis
const storage = createStorage({
  driver: cloudflareR2BindingDriver({ binding: "MY_BUCKET" }),
})

// Directly setting binding
const storage = createStorage({
  driver: cloudflareR2BindingDriver({ binding: globalThis.MY_BUCKET }),
})

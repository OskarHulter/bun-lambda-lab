import { createStorage } from "unstorage"

const storage = createStorage(/* opts */)

await storage.getItem("foo:bar") // or storage.getItem('/foo/bar')

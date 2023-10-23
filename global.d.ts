declare module "*.svg" {
  const content: string
  export default content
}

declare module "bun" {
  interface Env {
    CONVEX_DEPLOYMENT: string
    CONVEX_URL: string
  }
}

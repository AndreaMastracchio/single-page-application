export const options = {
    endpoint: URL,
    method: "GET",
    headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
    }
}
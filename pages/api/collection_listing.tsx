

export default async function handler(req, res) {

    const URL = `https://pippolotto.myshopify.com/admin/api/2022-04/collection_listings.json`
    // const URL_1 = 'https://pippolotto.myshopify.com/admin/api/2022-04/collections/266329686089/products.json'
    // const URL_2 = 'https://pippolotto.myshopify.com/admin/api/2022-04/products/'+req.product+'.json'
        
    const options = {
        endpoint: URL,
        method: "GET",
        headers: {
            "X-Shopify-Access-Token": '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'
        }
    }

    const shopy_collection = await fetch(URL, options)
    // const product_collection_await = await fetch(URL_1, options)
    const data = await shopy_collection.json()
    // const product_collection = await product_collection_await.json()

    res.status(200).json({ data: data })
}
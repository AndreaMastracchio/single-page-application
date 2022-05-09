

export default async function handler(req, res) {

    const URL = `https://pippolotto.myshopify.com/admin/api/2022-04/collection_listings.json`
        
    const options = {
        endpoint: URL,
        method: "GET",
        headers: {
            "X-Shopify-Access-Token": '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'
        }
    }

    const shopy_collection = await fetch(URL, options)
    const data = await shopy_collection.json()

    res.status(200).json({ data: data })
}
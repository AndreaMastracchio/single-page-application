import { options } from '../../configuration'

export default async function handler(req, res) {

    const URL = `https://`+process.env.SHOPIFY_STORE_DOMAIN+`/admin/api/2022-04/collection_listings.json`

    const shopy_collection = await fetch(URL, options)
    const data = await shopy_collection.json()

    res.status(200).json({ data: data })
}
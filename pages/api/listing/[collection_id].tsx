import { options } from '../../../configuration'

export default async function handler(req, res) {

    const { collection_id } = req.query
    const URL = 'https://'+process.env.SHOPIFY_STORE_DOMAIN+'/admin/api/2022-04/collections/'+collection_id+'/products.json'

    const listing = await fetch(URL, options)
    const data = await listing.json()

    res.status(200).json({ data: data })

}
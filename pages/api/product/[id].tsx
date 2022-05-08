import { options } from '../../../configuration'

export default async function handler(req, res) {
    const { id } = req.query
    const URL = 'https://'+process.env.SHOPIFY_STORE_DOMAIN+'/admin/api/2022-04/products/'+id+'.json'

    const product = await fetch(URL, options)
    const data = await product.json()

    res.status(200).json({ data: data })

  }
/* Dep */
import ReactHtmlParser from 'react-html-parser';
import Zoom from 'react-medium-image-zoom'
import axios from 'axios';

/* Style/Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTag,
    faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import 'react-medium-image-zoom/dist/styles.css'

/* Components */
import Image from '../../../components/Image'
import ProductCarousel from '../../../components/ProductCarousel'
import ReviewCarousel from '../../../components/ReviewCarousel'
import StarReview from '../../../components/StarReview' 

const Listing: React.FC<any> = (props: any) => {

    const { product, error } = props
    const product_tag = product?.tags.split(',')
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6'>
                <div>
                    <Zoom>
                        <Image 
                            src={product.image.src}
                            width={925}
                            height={617}
                        />
                    </Zoom>
                </div>
                <div className='flex flex-col gap-4 md:justify-center'>
                    <h1 className='text-2xl font-semibold'>{product.title}</h1>
                    <div className='flex space-x-1'>
                        <StarReview index={Math.floor(Math.random() * 5)} />
                        <p className='pl-4'> Leggi la recensioni </p>
                    </div>
                    <p className='text-lg'>{ReactHtmlParser(product.body_html)}</p>
                    <p className='text-lg'>Prodotto da - {product.vendor}</p>
                    <div className='flex gap-4'>
                        {
                            product_tag.map((value, index) => {
                                return (
                                    <div key={index} className='bg-slate-500 px-6 py-2 rounded-md flex space-x-4'>
                                        <div className=''>
                                            <FontAwesomeIcon
                                                icon={faTag}
                                                style={{ fontSize: 26, color: "white" }}
                                            />
                                        </div>
                                        <p className='text-white italic'>
                                            {value}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full flex items-center justify-center 
                            space-x-2 dark:bg-gray-800 
                            px-3 py-2 rounded cursor-pointer hover:bg-gray-400">
                    <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ fontSize: 20, color: "white" }}
                        className=''
                    />
                    <p className='text-white uppercase font-medium'>
                        Aggiungi al carrello
                    </p>
                </div>
            </div>
            <ReviewCarousel />
            <ProductCarousel />
        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { id } = query
    const product = await axios.get(process.env.URL_DEV+`/api/product/`+id)
    const listing = await axios.get(process.env.URL_DEV+`/api/collection_listing`)

    if ( product && listing ) {
        return { props: { 
            product: product.data.data.product,
            collection: listing.data.data.collection_listings
        }} 
    }

    return { props: { error: true }}
}

export default Listing
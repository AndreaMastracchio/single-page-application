/* Dep */
import Link from 'next/link'
import axios from 'axios'

/* Components */
import Image from '../components/Image'
import Error from '../components/Error'
import Loader from '../components/Loader'

/* Interface */
import { Collection } from '../interface/Collection'

const Homepage: React.FC<any> = (props: any) => {
    
    const { collection, error } = props

    if (error) return <Error />
    if (!collection) return <Loader /> 

    return (
        <div className='px-6 py-6'>
        {
            collection.map((index: Collection, value: number) => {
                return (
                    <Link key={value} href={"/listing/"+index.collection_id}>
                        <div className="p-10 lg:flex hover:border border-gray-900 rounded-sm cursor-pointer">  
                            <div className="bg-slate-100 overflow-hidden shadow-lg 
                                            lg:flex lg:justify-center lg:items-center lg:w-3/6">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-center text-xl mb-2">{index.title}</div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className="w-full object-cover object-center" 
                                    src={index.default_product_image.src} 
                                    alt={index.handle} 
                                    width={1000}
                                    height={800}
                                />
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        </div>
    )
}

export const getServerSideProps = async () => {
    
    const collection_listing = await axios.get(process.env.URL_DEV+`/api/collection_listing`)
  
    if (collection_listing) {
        return {
          props: {
            collection: collection_listing.data.data.collection_listings
          }
        }
    } 
    
    return {
        props: {
          error: true
        }
    }
}
  
export default Homepage
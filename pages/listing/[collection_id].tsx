/* Dep */
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios'

/* Styles/Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEye
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Image from '../../components/Image'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

/*  Utils */
import { createCarousel } from '../../utility/GeneralUtility'
import { GetServerSideProps } from 'next';

const Listing: React.FC<any> = (props: any) => {

    const { products, error } = props

    // For fun: Genero un carousel casuale
    useEffect(() => {
        if ( !window.localStorage.getItem('product_carousel') ) {
            window.localStorage.setItem('product_carousel', JSON.stringify(createCarousel(products)));
        }
    }, [])

    // Pagination
    let itemsPerPage  = 12;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);

    const pagginationHandler = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        window.scrollTo(0, 0)
    };

    if (error) return <Error />
    if (!currentItems) return <Loader /> 

    return (
        <>  
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 pb-6 px-4'>
            {
                currentItems && currentItems.map((item: any) => {
                    return (
                        <Link key={item.id} href={"/listing/product/"+item.id}>
                            <div className='hover:-translate-y-1 
                                        hover:scale-80 hover:opacity-75 
                                        duration-300 cursor-pointer'
                            >
                                <div className='min-h-min '>
                                    <Image 
                                        className='w-full md:h-48 object-center object-cover' 
                                        alt={item.title}
                                        src={item.image.src} 
                                        width={925}
                                        height={617}
                                    />
                                </div>
                                <div className="flex justify-between h-28 items-start">
                                    <div className="p-2 flex-grow">
                                        <h1 className="font-medium text-xl font-poppins">
                                            {item.title}
                                        </h1>
                                        <p className="text-gray-500 font-nunito">
                                            Venduta da: 
                                            <strong className='dark:text-gray-900'>
                                                {item.vendor}
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-center 
                                    space-x-2 dark:bg-gray-800 
                                    px-3 py-2 rounded cursor-pointer hover:bg-gray-400">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        style={{ fontSize: 20, color: "white" }}
                                    />
                                    <p className='text-white uppercase font-medium'>
                                        Dettagli
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={pagginationHandler}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                className='flex w-full justify-center items-center space-x-6 text-gray-900 text-lg uppercase py-4'
            />
        </>
    )
}
  
export const getServerSideProps: GetServerSideProps  = async ({query}) => {  
    const { collection_id } = query
    const collection = await axios.get(process.env.URL_DEV+`/api/listing/${collection_id}`)
    const listing = await axios.get(process.env.URL_DEV+`/api/collection_listing`)

    if ( listing && collection ) {
        return { 
            props: { 
                products: collection.data.data.products,
                collection: listing.data.data.collection_listings
            }
        }
    }

    return {
        props: {
            error: true
        }
    }
    
}

export default Listing
/* Dep */
import React, { useState, useEffect } from "react";

/* Style/Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEye
} from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel from 'embla-carousel-react'

/* Components */
import Image from './Image'
import Link from "next/link";

const Review: React.FC<any> = () => {

    const [product, setProduct] = useState(null);

    useEffect(function() {
        setProduct(JSON.parse(window?.localStorage.getItem('product_carousel')))
    }, []);

    const [viewportRef, embla] = useEmblaCarousel({
        slidesToScroll: 2,
        skipSnaps: false,
        loop: true
    });

    return (
        <div className="max-h-10">
            <h3 className="text-center text-gray-900 text-xl uppercase py-2">  Potrebbe anche interessarti </h3>
            <div className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                    {   
                        product?.map((value, index) => {
                            return(
                                <Link key={index} href={"/listing/product/"+value.id}>
                                    <div className='embla__slide px-4 cursor-pointer' >
                                        <Image 
                                            className='embla__slide__img object-center object-cover w-full' 
                                            alt={value.title}
                                            src={value.image.src} 
                                            width={925}
                                            height={617}
                                        />
                                        <div className="flex justify-between h-28 items-start">
                                            <div className="p-2 flex-grow">
                                                <h1 className="font-medium text-xl font-poppins">
                                                    {value.title}
                                                </h1>
                                                <p className="text-gray-500 font-nunito">
                                                    Venduta da: 
                                                    <strong className='dark:text-gray-900'>
                                                        {value.vendor}
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
                </div>
            </div>
        </div>
    )
}

export default Review
import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGem,
    faBars,
    faCartShopping,
    faUser
} from "@fortawesome/free-solid-svg-icons";


interface Product {
    collection_id: number
    title: string
}

const Navbar = ({ links }) => { 

    const [ menu, setMenu ] = useState(false);

    const handlerMenu = () => {
        !menu ? setMenu(true) : setMenu(false)
    }

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/" >
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <FontAwesomeIcon
                                icon={faGem}
                                style={{ fontSize: 20, color: "white" }}
                            />
                            <span className="self-center 
                                text-xl font-semibold
                                whitespace-nowrap dark:text-white"
                            >
                                Single Page Application
                            </span>
                        </div>
                    </Link>
                    <div className="flex justify-center items-baseline space-x-4 md:order-3">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ fontSize: 22, color: "white" }}
                            className='cursor-pointer'
                        />
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ fontSize: 22, color: "white" }}
                            className='cursor-pointer'
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ fontSize: 22, color: "white" }}
                            onClick={() => handlerMenu()}
                            className='cursor-pointer block md:hidden'
                        />
                    </div>
                    <div className={ menu ? "block w-full md:block md:w-auto" : "hidden md:block md:order-1" }
                            id="mobile-menu" 
                        >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {
                                links?.map((link: Product, index: number) => {
                                    return (
                                        <a href={`/listing/${link.collection_id}`} key={index} >
                                            <li>
                                                <span className="block py-2 pr-4 pl-3 text-white 
                                                        dark:bg-gray-800 rounded md:bg-transparent 
                                                        md:p-0 dark:text-white cursor-pointer"
                                                >           
                                                    {link.title}
                                                </span>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </div>                     
                </div>
            </nav>
        </>
    )
}
    
export default Navbar
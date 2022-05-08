import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBomb
} from "@fortawesome/free-solid-svg-icons";

const Error = () => {
    return (
        <div className='dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-4'>
            <div className='container'>
                <div className='flex justify-center items-center flex-col'>
                    <FontAwesomeIcon
                        icon={faBomb}
                        style={{ fontSize: 80, color: "white" }}
                    />
                    <h1 className='text-white bold text-2xl text-center uppercase'> 
                        Ops!..Qualcosa é andato storto
                        <br />
                        prova a ricaricaricare la pagina
                    </h1>
                </div>
            </div> 
        </div>
    )
}

export default Error
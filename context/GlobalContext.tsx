/* Dep */
import { useReducer, createContext, useState, useEffect } from "react"
import useSWR from "swr"

/* Reducers */
import { globalReducers } from '../reducers/GlobalReducers'

/* Interface */
// import { UserInterface, UserState } from "../interface/User"

// const initial_state: UserInterface = {
// 	dark_mode: false,
// 	is_logged: false
// }


const initial_state = {
	is_loading: true,
	error: true,
	collection_listings: {},
	product_carousel: []
}

const GlobalContext = createContext(initial_state);

const GlobalProvider = (props) => {

	const [state, dispatch] = useReducer(globalReducers, initial_state);

	return (
		<GlobalContext.Provider value={{ state, dispatch}}>
			{props.children}
		</GlobalContext.Provider>
	);
}
	
export { GlobalContext, GlobalProvider }
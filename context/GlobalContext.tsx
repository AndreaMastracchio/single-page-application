/* Dep */
import { useReducer, createContext, useState, useEffect } from "react"

/* Reducers */
import { globalReducers } from '../reducers/GlobalReducers'


const initial_state = {
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
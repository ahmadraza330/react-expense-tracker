import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transations: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransations(id) {
        dispatch({type: 'DELETE_TRANSATION', payload: id})
    }

    function addTransations(transation) {
        dispatch({type: 'ADD_TRANSATION', payload: transation})
    }

    return (
        <GlobalContext.Provider value={{
            transations: state.transations,
            deleteTransations,
            addTransations
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
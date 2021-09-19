import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transation from './Transation'

const TransationList = () => {
    const { transations } = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transations.map(transation => (
                   <Transation key={transation.id} transation={transation}/>
                ))}
            </ul>
        </>
    )
}

export default TransationList

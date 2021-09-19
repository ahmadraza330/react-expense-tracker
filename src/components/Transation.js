import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Transation = ({transation}) => {
    const {deleteTransations} = useContext(GlobalContext)

    const sign = transation.amount < 0 ? '-' : '+'
    return (
        <>
            <li className={transation.amount < 0 ? 'minus' : 'plus'}>
               {transation.text} <span>{sign}${Math.abs(transation.amount)}</span><button className="delete-btn" onClick={() => deleteTransations(transation.id)}>x</button>
            </li>
        </>
    )
}

export default Transation

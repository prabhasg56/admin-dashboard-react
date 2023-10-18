import React from 'react';
import { BsArrowUpShort, BsArrowDown }
    from 'react-icons/bs'

const Cards = ({ title, amount, growth, icon }) => {
    return (
        <>
            <div className='card'>
                <div className='card-inner'>
                    <img src={icon} />
                    <div className='card-items'>
                        <text style={{ fontSize: "10px", color: 'gray' }}>{title}</text>
                        <h5 style={{ marginTop: 2, marginBottom: 2, padding: 1 }}>{amount}</h5>
                        <div style={{ fontSize: "10px" }}> <span style={{ color: `${growth > 3 ? "green" : "red"}` }}>{growth > 3 ? <BsArrowUpShort className='card_icon' /> : <BsArrowDown className='card_icon' />}{growth} </span><span >this month</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
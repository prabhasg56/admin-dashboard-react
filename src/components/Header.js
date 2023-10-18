import React from 'react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs';
 import {MdWavingHand} from 'react-icons/md'

const Header = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <span>Hello Shahrukh </span> <MdWavingHand  className='icon'/>,
        </div>
        <div className='header-right'>
           <form className='search'>
           <input placeholder='Search...' className='input'/>
           <button className='search-barbtn'><BsSearch  className='icon'/></button>

           </form>
        </div>
    </header>
  )
}

export default Header
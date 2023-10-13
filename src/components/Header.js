import React from 'react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs';
 import {MdWavingHand} from 'react-icons/md'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <span>Hello Shahrukh </span> <MdWavingHand  className='icon'/>,
        </div>
        <div className='header-right'>
           <div>
           <BsSearch  className='icon search '/>
           <input placeholder='Search...' className='input'/>
           </div>
        </div>
    </header>
  )
}

export default Header
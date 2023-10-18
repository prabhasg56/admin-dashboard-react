import React,{useState} from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, 
  BsWalletFill, BsMenuButtonWideFill, BsBrowserEdge}
 from 'react-icons/bs';
import {MdLiveHelp} from 'react-icons/md'
import { NavLink } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsBrowserEdge  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <NavLink to="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </NavLink>
            </li>
            
            <li className='sidebar-list-item'>
                <NavLink to="customers">
                    <BsPeopleFill className='icon'/> Customers
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="promote">
                    <BsWalletFill className='icon'/> Income
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="income">
                    <BsMenuButtonWideFill className='icon'/> Promote
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="help">
                    <MdLiveHelp className='icon'/> Help
                </NavLink>
            </li>
        </ul>

    </aside>
  )
}

export default Sidebar;
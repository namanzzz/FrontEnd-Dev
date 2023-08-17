import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/navbar.css'
import { Contact } from '../pages/contact'

export const Navbar = () =>{
    return <div className='navbar'>
        <div className='links'>
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                
        </div>
    </div>
}

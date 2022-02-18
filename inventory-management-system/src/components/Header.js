import React from 'react'
import './styleComponent/Header.css'
import { Routes, Link, Route } from 'react-router-dom'
import AddProducts from './AddProducts'
import ListProducts from './ListProducts'
import RemoveProducts from './RemoveProducts'

function Header() {
    return (
        <div>
            <div className='d-flex flex-row justify-content-center heading'>
                <h2>Inventory Management System</h2>
            </div>
            <header className="d-flex flex-row justify-content-center header">
                <nav>
                    <ul>
                        <li><Link to='/add'> Add Products</Link></li>
                        <li><Link to='/remove'> Remove Products</Link></li>
                        <li><Link to='/list'> List Products</Link></li>
                    </ul>
                </nav>
            </header>

            <div>
                <Routes>
                    <Route index element={<ListProducts />} />    
                    <Route path='/add' element={<AddProducts />} />    
                    <Route path='/remove' element={<RemoveProducts />} />
                    <Route path='/list' element={<ListProducts />} />
                </Routes>
            </div>
        </div>
    )
}

export default Header

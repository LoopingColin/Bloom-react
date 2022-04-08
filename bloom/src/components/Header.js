import React from 'react'

import Navbar from './Navbar'

const Header =()=> {
    return(
        <header className="header sub-body" id="header">
            <div className='inner'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='logo'>bloom landing page</h1>
                    </div>
                    <div className='col-md-6'>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </header>
    
    )
}

export default Header
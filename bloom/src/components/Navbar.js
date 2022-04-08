import React from 'react'

const Navbar =()=> {
    return(
        <nav className="nav top-nav">
        <ul className="social-list">
            <li className="social-list-item">
                <a href="#link">
                    <span className='sr-only'>facebook</span>
                    <img src="media/facebook.png" alt="placeholder img" className="img-fluid"/>
                </a>
            </li>
            <li className="social-list-item">
                <a href="#link">
                    <span className='sr-only'>twitter</span>
                    <img src="media/twitter.png" alt="placeholder img" className="img-fluid"/>
                </a>
            </li>
            <li className="social-list-item">
                <a href="#link">
                    <span className='sr-only'>spotify</span>
                    <img src="media/rss.png" alt="placeholder img" className="img-fluid"/>
                </a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar
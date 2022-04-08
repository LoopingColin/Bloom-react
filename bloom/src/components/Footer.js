import React from 'react'

const Footer =()=> {
    return(
        <footer className="footer sub-body" id="footer">
        <div className="inner">
            <div className="colophon">
                <p className="colophon-text">Copyright &copy; 2012 Bloom Web Design &middot; All rights reserved</p>
            </div>
            <nav className="nav footer-nav">
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
                            <span className='sr-only'>rss</span>
                            <img src="media/rss.png" alt="placeholder img" className="img-fluid"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="clear"></div>
    </footer>
    )
}

export default Footer
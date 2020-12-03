import React, { Component } from 'react'
// import logo from '../logo.png'

 class Nav extends Component {
    render() {
        return (
            <div className = "navBar">
                <div className='cont'></div>
                <h2 className="logo">Logo</h2>
                {/* <img className="logo" src={logo} alt='logo'></img> */}
               

                <ul className="navLinks">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Nav;

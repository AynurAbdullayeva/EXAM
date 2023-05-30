import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
<div className="container1">

<div className="logo">
            <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="logo" />
        </div>

<div className="links">
<Link to='/'><button className='link'>Home</button></Link>
<Link to='/about'><button className='link'>About</button></Link>
<Link to='/services'><button className='link'>Services</button></Link>
<Link to='/portfolio'><button className='link'>Portfolio</button></Link>
<Link to='/team'><button className='link'>Team</button></Link>
<Link to='/skill'><button className='link'>Skill</button></Link>
<Link to='/client'><button className='link'>Client</button></Link>
<Link to='/pricing'><button className='link'>Blog</button></Link>
<Link to='/contact'><button className='link'>Contact</button></Link>
</div>

</div>

    </div>
    
    
    </>
  )
}

export default Navbar
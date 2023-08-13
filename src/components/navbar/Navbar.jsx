import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import { links } from '../../data.js'
import { CgMenuLeft } from 'react-icons/cg'
import { AiFillCloseCircle } from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={() => setisNavShowing(false)}>
          <img src={Logo} alt="Helper Adda Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}
                    onClick={() => setisNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
          <Link to="/contact" onClick={() => setisNavShowing(false)}><button className='btn-1'>Contact</button></Link>
        </ul>
        <button className='nav__toggle-btn' onClick={() => setisNavShowing(prev => !prev)}>
          {
            isNavShowing ? <AiFillCloseCircle /> : <CgMenuLeft />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
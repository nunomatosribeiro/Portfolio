import { useState } from 'react'
import { Link } from 'react-scroll'
import '../App.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  
    const [click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return ( 
        <div className='header'>
           
                <h3>Nuno Ribeiro</h3>
        
        <div className='hamburguer' style={{textDecoration:'none'}} onClick={handleClick}>
    {click ? (<FaTimes size={30} style={{color: '#ccc', margin: '15px' }} />)
    : (<FaBars size={30} style={{color: '#ccc', margin: '15px'}} /> )}
        </div>
        <div className={`side-menu ${click ? 'active' : ''}`} >
            
{click && (
         <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
         <li  className='nav-item'>
        <Link className='about' to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} style={{textDecoration:'none', color: 'white', fontSize:'30px'}} >About</Link>
        </li>
        <li className='nav-item'>
        <Link className='skills' to='skills' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} style={{textDecoration:'none', color: 'white', fontSize:'30px'}} >Skills</Link>
        </li>
        <li className='nav-item'>
        <Link className='projects' to='projects' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} style={{textDecoration:'none', color: 'white', fontSize:'30px'}} >Projects</Link>
        </li>
        </ul>
        )}
     </div>
        </div>
     );
}
 
export default NavBar;
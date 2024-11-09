import Link from 'next/link'
import "../style/Header.css"

const Header = () => {
  return (
    <div className='header'>
         {/* left side */}
        <div>
            <h1 className='logo'>A.A SIDDIQUI</h1>
        </div>
        {/* right side */}
        <div className='header-right-div'>
            <ul className='header-links'>
                <li><Link className='nav-links' href={"/"}>Home</Link></li>
                <li><Link className='nav-links' href={"/about"}>About</Link></li>
                <li><Link className='nav-links' href={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
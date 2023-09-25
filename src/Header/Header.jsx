import './Header.css';
import SunIcon from './../assets/sun.png';
import MoonIcon from './../assets/moon.png';

function Header ({ handleToggleDarkMode, darkMode }) {
    return (
        <div className='Header'>
            <h1>N.App</h1>
            {!darkMode ? (<img src={SunIcon} className='DarkModeIcon' onClick={()=>handleToggleDarkMode((prev)=> !prev)}/> ) : 
            (<img src={MoonIcon} className='DarkModeIcon border_white' onClick={()=>handleToggleDarkMode((prev)=> !prev)}/>)}
        </div>
    )
}
export default Header;
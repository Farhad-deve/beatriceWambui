import { Link } from "react-router-dom"
import styles from './header.module.css';

// Images
import Logo from '../../assets/logos/main-logo.svg';
import MoonIcon from '../../assets/icons/moon.svg';


const Header = () => {
  return (
    <>
      <header className="px-section py-header flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Beatrice Wambui Logo" />
        </Link>

        <button type="button" className={`border-none bg-light-gray-4 rounded-full flex items-center justify-center ${styles.themeToggle}`}>
          <img src={MoonIcon} alt="Moon icon" />
        </button>
      </header>
    </>
  )
}

export default Header
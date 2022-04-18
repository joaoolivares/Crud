import logo from "../components/images/logo-footer.png";
import Menu from "../components/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contentheader}>
          <a href="/login"><img width="150px" src={logo} alt="logo" /></a>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header;
import { useContext } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import styles from "./Menu.module.css";
import { AuthContext } from "../context/AuthContext";

const Menu = () => {
  const {handleLogout} = useContext<any>(AuthContext); 

  return (
      <nav className={styles.menu}>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/pessoa">Pessoa</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
  )
}
export default Menu;
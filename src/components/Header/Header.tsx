import styles from './Header.module.css';
import Chuck from './img/Chuck.png';
import { NavLink }  from "react-router-dom";
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';





const Header = () => {
    const storeDate = useTypedSelector((state) => state.favorite.favs);
    return (
        <section className={styles.header}>
            <header className={styles.header_blok}>
                <img src={Chuck} alt="" />
                <ul>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li className={styles.count}>
                        <NavLink to="/favorites">Избранное</NavLink>
                        <span>
                            { storeDate.length > 0 ? storeDate.length : 0}
                        </span>
                    </li> 
                </ul>
            </header>
        </section>
    );
};

export default Header;
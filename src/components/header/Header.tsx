import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import favorites from '../../assets/icons/favourite.svg';
import stock from '../../assets/icons/stock.svg';
import bag from '../../assets/icons/bag.svg';

const Header: FC = () => {
  return (
    <header>
      <div className={styles.top}></div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/favorites">
          <div className={styles.item}>
            <div>
              <img src={favorites} alt="Избранное" />
            </div>
            <span>Избранное</span>
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/">
          <div className={styles.item}>
            <div>
              <img src={stock} alt="Склад" />
            </div>
            <span>Склад</span>
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/deals">
          <div className={styles.item}>
            <div>
              <img src={bag} alt="Сделки" />
            </div>
            <span>Сделки</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

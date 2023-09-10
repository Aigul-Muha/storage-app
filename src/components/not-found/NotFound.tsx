import { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>Ничего не найдено</p>
    </div>
  );
};

export default NotFound;

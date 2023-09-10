import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Card } from '../components/card/Card';
import { selectFav } from '../redux/favorite/selectors';
import styles from '../components/not-found/NotFound.module.scss';

const FavoritePage: FC = () => {
  const { items } = useSelector(selectFav);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('favItem', json);
  }, [items]);

  return (
    <div>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      {items.length !== 0 ? (
        items.map((item: any) => <Card {...item} key={item.id} />)
      ) : (
        <div className={styles.root}>
          <p className={styles.text}>Список избранного пуст</p>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;

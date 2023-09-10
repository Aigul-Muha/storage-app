import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/card/Card';
import { selectDeals } from '../redux/deals/selectors';
import { Helmet } from 'react-helmet';
import styles from '../components/not-found/NotFound.module.scss';

const DealsPage: FC = () => {
  const { items } = useSelector(selectDeals);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('dealsItem', json);
  }, [items]);

  return (
    <div>
      <Helmet>
        <title>Сделки</title>
      </Helmet>
      {items.length !== 0 ? (
        items.map((item: any) => <Card {...item} key={item.id} />)
      ) : (
        <div className={styles.root}>
          <p className={styles.text}>Список сделок пуст</p>
        </div>
      )}
    </div>
  );
};

export default DealsPage;

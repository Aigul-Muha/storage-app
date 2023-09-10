import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../../redux/filter/slice';
import { selectFilter } from '../../../redux/filter/selectors';
import styles from './Sort.module.scss';

const Sort: FC = () => {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const categories = ['Все типы', 'Прямые продажи', 'Аукцион'];

  return (
    <div className={styles.root}>
      {categories.map((type, i) => (
        <div
          className={categoryId === i ? styles.active : styles.item}
          key={i}
          onClick={() => dispatch(setCategoryId(i))}>
          <p>{type}</p>
        </div>
      ))}
    </div>
  );
};

export default Sort;

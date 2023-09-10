import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/favorite/slice';
import { selectFavItem } from '../../redux/favorite/selectors';
import { addDeals, removeDeals } from '../../redux/deals/slice';
import { selectDealsItem } from '../../redux/deals/selectors';
import styles from './Card.module.scss';
import fav from '../../assets/icons/favourite.svg';
import favAdded from '../../assets/icons/favAdded.svg';

type CardProps = {
  id: string;
  img: string;
  type: string;
  title: string;
  location: string;
  seller: string;
  productType: number;
  description: string;
  price: number;
  quantity: number;
  sum: number;
};

export const Card: FC<CardProps> = ({
  id,
  img,
  type,
  title,
  location,
  seller,
  productType,
  description,
  price,
  quantity,
  sum,
}) => {
  const dispatch = useDispatch();
  const favItem = useSelector(selectFavItem(id));
  const dealsItem = useSelector(selectDealsItem(id));

  const onClickAddFav = () => {
    const item = {
      id,
      img,
      type,
      title,
      location,
      seller,
      productType,
      description,
      price,
      quantity,
      sum,
    };
    dispatch(addFav(item));
  };

  const onClickAddDeals = () => {
    const item = {
      id,
      img,
      type,
      title,
      location,
      seller,
      productType,
      description,
      price,
      quantity,
      sum,
    };
    dispatch(addDeals(item));
  };

  const onClickRemoveFav = () => {
    dispatch(removeFav(id));
  };

  const onClickRemoveDeals = () => {
    dispatch(removeDeals(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img className={styles.img} src={img} alt="Фото товара" />
        </div>
        <div className={styles.info}>
          <p className={styles.type}>{type}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.location}>{location}</p>
          <div className={styles.sellerInfo}>
            <span className={styles.type}>Продавец</span>
            <span className={styles.text}>{seller}</span>
          </div>
          <div className={styles.productInfo}>
            <span className={styles.type}>Вид товара</span>
            <span className={styles.product}>{productType}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <p className={styles.price}>{price} ₽</p>
          <div className={styles.countInfo}>
            <span className={styles.count}>Количество</span>
            <span className={styles.countItem}>{quantity} шт.</span>
          </div>
          <div className={styles.countInfo}>
            <span className={styles.count}>Стоимость за штуку</span>
            <span className={styles.countItem}>{sum} ₽</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.buttons}>
            {dealsItem ? (
              <button className={styles.dealsBtnAdded} onClick={onClickRemoveDeals}>
                Оплатить
              </button>
            ) : (
              <button className={styles.dealsBtn} onClick={onClickAddDeals}>
                Добавить в сделки
              </button>
            )}

            {favItem ? (
              <button className={styles.favBtnAdded} onClick={onClickRemoveFav}>
                <img src={favAdded} alt="Добавлено в избранное" />
              </button>
            ) : (
              <button className={styles.favBtn} onClick={onClickAddFav}>
                <img src={fav} alt="Добавить в избранное" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

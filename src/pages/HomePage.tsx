import { useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Sort from '../components/search/sort/Sort';
import SearchInput from '../components/search/search-input/SearchInput';
import { Card } from '../components/card/Card';
import Sceleton from '../components/card/Sceleton';
import { fetchProducts } from '../redux/products/asyncActions';
import { selectProducts } from '../redux/products/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { selectSearch } from '../redux/search/selectors';
import { useAppDispatch } from '../redux/store';

const HomePage: FC = () => {
  const { categoryId } = useSelector(selectFilter);
  const { search } = useSelector(selectSearch);
  const { items, status } = useSelector(selectProducts);
  const dispatch = useAppDispatch();

  const getProducts = async () => {
    const categoryProp = categoryId > 0 ? `typeId=${categoryId}` : '';
    const searchProp = search ? `search=${search}` : '';

    dispatch(
      fetchProducts({
        categoryProp,
        searchProp,
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProducts();
  }, [categoryId, search]);

  return (
    <div>
      <Helmet>
        <title>Склад</title>
      </Helmet>
      <div className="search">
        <Sort />
        <SearchInput />
      </div>
      <div>
        {status === 'loading'
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((obj: any) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default HomePage;

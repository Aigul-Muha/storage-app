import { FC } from 'react';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/search/slice';
import styles from './SearchInput.module.scss';
import debounce from 'lodash.debounce';

const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const updateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 1000),
    [],
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input placeholder="Найти" value={value} onChange={inputHandler} />
      <button className={styles.btn} />
    </div>
  );
};

export default SearchInput;

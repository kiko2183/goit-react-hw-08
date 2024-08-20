import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/filters/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); // Використовуємо селектор selectFilter

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value)); // Викликаємо setFilter
  };

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;

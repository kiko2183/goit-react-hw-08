import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filters/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
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

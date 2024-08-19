import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/selectors'; 

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter); 

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;

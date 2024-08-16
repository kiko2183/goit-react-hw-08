import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={styles.input} />
  </label>
);

export default Filter;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilteredProducts } from '../../helpers/getFilteredProducts';
import './Filter.scss';

const Filter = ({ items, onFilter, onFilterReset }) => {
  const products = useSelector((state) => state.products);
  const [checkedBrandsState, setCheckedBrandsState] = useState([]);

  useEffect(() => {
    setCheckedBrandsState(new Array(items.length).fill(false));
  }, [items]);

  const handleOnChange = (position) => {
    const updatedCheckedBrandsState = checkedBrandsState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedBrandsState(updatedCheckedBrandsState);
  };

  const handleFilter = () => {
    const checkedFilters = items.filter((item, i) => checkedBrandsState[i] === true);
    onFilter(getFilteredProducts(checkedFilters, products), checkedFilters.map((item) => item.id));
  };

  const handleReset = () => {
    setCheckedBrandsState(new Array(items.length).fill(false));
    onFilterReset();
  };

  return (
    <aside className="filter">
      <ul className="filter-brand">
        <li className="filter-brand__title">Brands</li>

        {items.map((item, index) => (
          <li className="filter-brand__item" key={item.id}>
            <label className="filter-brand__label">
              {item.title}
              <input
                className="filter-brand__checkbox"
                type="checkbox"
                name={item.code}
                value={item.code}
                checked={checkedBrandsState[index]}
                onChange={() => handleOnChange(index)}
              />
            </label>
          </li>
        ))}
      </ul>

      <div className="filter__buttons">
        <button
          className="filter__button"
          onClick={() => handleFilter(checkedBrandsState)}
        >
          Apply
        </button>
        <button
          className="filter__button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </aside>
  )
}

export default Filter;
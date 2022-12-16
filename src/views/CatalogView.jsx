import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import brandsData from '@/mockData/brands.json';
import productsData from '@/mockData/products.json';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/reducers/productsSlice';
import { setBrands } from '../store/reducers/brandsSlice';
import Catalog from '../components/Catalog/Catalog';
import { getCardsOffset } from '../helpers/getCardsOffset';
import Filter from '../components/Filter/Filter';
import { getFilteredProducts } from '../helpers/getFilteredProducts';

const CatalogView = () => {
  const products = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const dispatch = useDispatch();

  const catalogPageQuery = Number(searchParams.get('p')) || 0;
  const catalogFiltersQuery = searchParams.get('filters') || null;
  const maxCardsPerPage = 6;

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(setProducts(productsData));
    };

    if (brands.length <= 0) {
      dispatch(setBrands(brandsData));
    };
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      if (catalogFiltersQuery) {
        const catalogFiltersQueryAray = catalogFiltersQuery.split(',')
        setFilteredProducts(getFilteredProducts(catalogFiltersQueryAray, products));
      } else {
        setFilteredProducts(productsData);
      };
    };

    setCurrentProducts(filteredProducts.slice(0, maxCardsPerPage));
  }, [products]);

  useEffect(() => {
    if (catalogPageQuery.length <= 0) {
      searchParams.set("p", 0);
      setSearchParams(searchParams);
    } else {
      handleChangePage({
        newCardIndex: getCardsOffset(filteredProducts.length, maxCardsPerPage, catalogPageQuery),
        newPage: catalogPageQuery
      });
    };
  }, [filteredProducts]);


  const handleChangePage = ({ newCardIndex, newPage }) => {
    const newCards = filteredProducts.slice(newCardIndex, newCardIndex + maxCardsPerPage);

    setCurrentProducts(newCards);

    if (newCardIndex < maxCardsPerPage) {
      searchParams.set("p", 0);
      setSearchParams(searchParams);
    } else {
      searchParams.set("p", newPage);
      setSearchParams(searchParams);
    };

    window.scrollTo(0, 0);
  };

  const handleFilter = (newCards, filtersTitles) => {
    searchParams.set("filters", [...filtersTitles]);
    setSearchParams(searchParams);
    setFilteredProducts(newCards);
  };

  const handleFilterReset = () => {
    searchParams.delete("filters");
    setFilteredProducts(productsData);
    setCurrentProducts(productsData.slice(0, maxCardsPerPage));
  };


  return (
    <div className="container">
      <div className="wrapper">
        <Filter
          items={brands}
          onFilter={handleFilter}
          onFilterReset={handleFilterReset}
          catalogFiltersQuery={catalogFiltersQuery}
        />
        <Catalog
          products={currentProducts}
          totalCards={filteredProducts.length}
          maxCardsPerPage={maxCardsPerPage}
          handleChangePage={handleChangePage}
          currentPage={catalogPageQuery}
        />
      </div>
    </div>
  )
};

export default CatalogView;
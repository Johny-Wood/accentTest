export const getFilteredProducts = (filters, products) => {
  const newCards = [];

  for (let i = 0; i < filters.length; i++) {

    products.forEach((item) => {
      if (item.brand === filters[i].id || item.brand === Number(filters[i])) {
        newCards.push(item);
      };
    });
  };

  return newCards;
};
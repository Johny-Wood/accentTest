export const getCardsOffset = (totalItems, itemsPerPage, newPageNumber) => {
  return (newPageNumber * itemsPerPage) % totalItems;
};
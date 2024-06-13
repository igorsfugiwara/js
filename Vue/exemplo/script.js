const stock = document.querySelector('.stock');
 
const getStock = (symbol) => {
  return fetch(`https://api.origamid.dev/stock/${symbol}/quote`)
    .then((response) => response.json())
    .then((data) => {
      stock.innerHTML = data.marketCap;
    });
};
 
getStock('aapl');
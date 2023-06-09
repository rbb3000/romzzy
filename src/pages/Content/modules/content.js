import refrigerators from './refrigerators.json';

console.log(refrigerators);

export const injectInfo = () => {
  console.log('running script');

  if (typeof window !== 'undefined') {
    console.log('you are on the browser');
  } else {
    console.log('You are not on the browser');
  }

  const products = document.querySelectorAll('.product');

  if (!products) {
    console.log('no products found');
  }

  if (products) {
    console.log('products found');

    products.forEach((product) => {
      const productName = product.querySelector('h3').querySelector('a').title;
      console.log(productName);
      if (productName.length > 0) {
      }
      const p = document.createElement('p');
      p.innerHTML = 'This is just a test';
      product.insertBefore(p, product.childNodes[0]);
    });
  }
};

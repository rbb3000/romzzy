import refrigerators from './refrigerators.json';
import icon from './icon.png';
import '../content.styles.css';

console.log(refrigerators);

const boltIcon =
  'https://drive.google.com/uc?export=download&id=1MHUiJThsjzoXnO2_O_Ggc-r5K7NgsD1e';

const plantIcon =
  'https://drive.google.com/uc?export=download&id=1l9v_DvVe5QnSXIfEO-4_G-FBoQNOkHWo';

const ewzCompanionLogo =
  'https://drive.google.com/uc?export=download&id=1F_MAOyJxMnRl8_9AuVm7zYyptqcMGWtQ';

const dashIcon =
  'https://drive.google.com/uc?export=download&id=1XcgdPtpXgVqpvYhiKkxGktW4C2EsFYI-';

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

    const bestEnergyUsage = 60;

    products.forEach((product) => {
      const productName = product.querySelector('h3').querySelector('a').title;
      console.log(productName);

      if (productName.length === 0) {
        return;
      }

      const matchingProduct = refrigerators.find((refrigerator) =>
        productName.includes(refrigerator.Modell)
      );

      if (!matchingProduct) {
        const p = document.createElement('p');
        p.innerHTML = 'No info found';
        product.insertBefore(p, product.childNodes[0]);
        return;
      }

      const energyUsage = matchingProduct['Energie (kWh/Jahr)'];

      const rows = [{ id: 'cost', icon: boltIcon, text: `` }];

      const img = document.createElement('img');
      img.width = 200;
      img.className = 'companion-logo';
      img.src = ewzCompanionLogo;
      product.insertBefore(img, product.childNodes[0]);

      // product.addEventListener('click', () => {
      //   chrome.runtime.sendMessage('OpenPopup');
      // });
      product.onclick = () => {
        console.log('clicked');

        const loading = document.createElement('div');
        loading.className = 'loading-overlay';
        product.insertBefore(loading, product.childNodes[0]);

        const div = document.createElement('div');
        div.className = 'div-overlay';
        product.insertBefore(div, product.childNodes[2]);

        const p = document.createElement('p');
        p.className = 'div-text';
        p.textContent = `${matchingProduct['Energie (kWh/Jahr)']} KWh / Jahr`;
        div.appendChild(p);

        const dash = document.createElement('img');
        dash.className = 'dash-icon';
        dash.src = dashIcon;
        dash.width = 200;
        div.appendChild(dash);

        const price = document.createElement('p');
        price.className = 'div-text';
        price.textContent = `${Math.round(
          (matchingProduct['Energie (kWh/Jahr)'] * 24.67) / 100
        )} CHF / Jahr`;
        div.appendChild(price);

        const comparisonRow = document.createElement('div');
        comparisonRow.className = 'div-row';
        div.appendChild(comparisonRow);

        const comparisonIcon = document.createElement('img');
        comparisonIcon.src = boltIcon;
        comparisonRow.appendChild(comparisonIcon);

        const comparison = document.createElement('p');
        comparison.className = 'div-text';
        comparison.textContent = `We found a product that uses ${Math.round(
          ((matchingProduct['Energie (kWh/Jahr)'] - bestEnergyUsage) /
            matchingProduct['Energie (kWh/Jahr)']) *
            100
        )}% less energy.`;
        comparisonRow.appendChild(comparison);

        const velo = document.createElement('p');
        velo.className = 'div-text';
        const perHour = 0.15;
        velo.textContent = `To power this device for a single hour you would need to sweat ${(
          matchingProduct['Energie (kWh/Jahr)'] /
          365 /
          perHour
        ).toFixed(2)} hours on the hometrainer.`;
        div.appendChild(velo);

        const greyEnergy = document.createElement('p');
        greyEnergy.className = 'div-text';
        greyEnergy.textContent = `The grey energy to produce and deliver this product is estimated at 3000 KWh`;
        div.appendChild(greyEnergy);
      };
    });
  }
};

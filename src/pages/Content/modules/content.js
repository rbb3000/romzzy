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

const phoneIcon =
  'https://drive.google.com/uc?export=download&id=1l2i-CLYjfu-mgXZREN1-rMVzJJGUzuQS';

const cashIcon =
  'https://drive.google.com/uc?export=download&id=18fIUe66_znESFsil5aOvF8xDmq0jMzyQ';

const bikeIcon =
  'https://drive.google.com/uc?export=download&id=1mUb43Iqa970Cscrbus0fjx5n-1NuA-d9';

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

      const rows = [
        {
          id: 'energyUsage',
          icon: cashIcon,
          text: `${energyUsage} KWh cost you ${(
            (energyUsage * 24.67) /
            100
          ).toFixed(2)} CHF per year.`,
        },
        {
          id: 'comparison',
          icon: boltIcon,
          text: `We found a product that uses ${Math.round(
            ((energyUsage - bestEnergyUsage) / energyUsage) * 100
          )}% less energy. See here.`,
        },
        {
          id: 'phone',
          icon: phoneIcon,
          text: `Equals charging your smartphone ${Math.round(
            energyUsage / 0.015 / 365
          ).toFixed(0)} times per day`,
        },
        {
          id: 'greyEnergy',
          icon: plantIcon,
          text: `The grey energy to produce and deliver this product is estimated at 3000 kWh`,
        },
      ];

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

        const dash = document.createElement('img');
        dash.className = 'dash-icon';
        dash.src = dashIcon;
        dash.width = 200;
        div.appendChild(dash);

        rows.forEach((row) => {
          console.log('row appended');

          const rowWrap = document.createElement('div');
          rowWrap.className = 'div-row';
          div.appendChild(rowWrap);

          const icon = document.createElement('img');
          icon.src = row.icon;
          icon.className = 'row-icon';
          rowWrap.appendChild(icon);

          const text = document.createElement('p');
          text.className = 'div-text';
          text.textContent = row.text;
          rowWrap.appendChild(text);
        });
        const bikeDiv = document.createElement('div');
        bikeDiv.className = 'bike-div';
        div.appendChild(bikeDiv);

        const rowWrap = document.createElement('div');
        rowWrap.className = 'div-row';
        bikeDiv.appendChild(rowWrap);

        const icon = document.createElement('img');
        icon.src = bikeIcon;
        icon.className = 'bike-icon';
        rowWrap.appendChild(icon);

        const text = document.createElement('p');
        text.className = 'div-text';
        text.textContent = `To power this device for a day you would have to sweat ${(
          energyUsage /
          365 /
          0.15
        ).toFixed(1)} hours on the hometrainer.`;
        rowWrap.appendChild(text);
      };
    });
  }
};

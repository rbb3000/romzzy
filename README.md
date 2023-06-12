This project was created within 2 days at the Marke Zurich Hackathon 2023. It was renamed to EWZ Companion as we worked more towards a clear solution :)

It was built using the boilerplate chrome extension tool: https://github.com/lxieyang/chrome-extension-boilerplate-react

For the first MVP we used data from www.topten.ch, could be extended with: https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019

1. Install node > version 18
2. Because of an open hot reload issue in the library I was using you need to launch directly in prod mode
3. Run chrome extension with: NODE_ENV=production npm run build
4. Load extension in chrome: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked
5. Test it on the following URL as detecting a product is hardcoded: https://www.fust.ch/de/search.html?searchtext=k%C3%BChlschrank

<img width="1662" alt="example" src="https://github.com/rburkard/romzzy/assets/66911602/a6071f76-915d-4cb9-a110-91a8e90bb08d">

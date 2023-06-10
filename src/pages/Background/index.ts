console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((request) => {
  if (request === 'OpenPopup') {
    chrome.windows.create(
      {
        url: '../Popup/index.html',
        type: 'popup',
        focused: true,
        width: 400,
        height: 600,
        top: 0,
      },
      () => {
        console.log('Opened popup!');
      }
    );
  }
});

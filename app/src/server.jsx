import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './pages/App';
import { StaticRouter } from 'react-router-dom';
import configureStore from './modules/configureStore';

function renderHTML(html, preloadedState) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="imgs/favicon.ico" type="image/ico" />
            <title>NetflixRoulette</title>
            <script defer src="/dist/vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-823a30.bundle.js"></script>
            <script defer src="/dist/main.bundle.js"></script>
            <link href="/dist/main.bundle.css" rel="stylesheet">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>

        </body>
        </html>
  `;
}

function serverRenderer() {
  return (req, res) => {
    const store = configureStore();

    const htmlString = renderToString(
      <StaticRouter location={req.url} store={store}>
        <App />
      </StaticRouter>);
    const preloadedState = store.getState();

    // const indexFile = path.resolve('../dist/index.html');
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //   return res.send(
    //     data.replace('<div id="app"></div>', `<div id="app">${htmlString}</div>`)
    //   );
    // })
    res.send(renderHTML(htmlString, preloadedState));
  };
}

export { serverRenderer }

// Dynamic Application
import App from '../app/app';
export default App;

// `src/app` is not "special", it is re-exported by `src/pages/app.js`
// and contains all the clientside dynamic App pages that we dont want to be statically generated.
// `src/pages/app.js` skips the static generation process because of `gatsby-plugin-create-client-paths`
// configured in `gatsby-config.js`

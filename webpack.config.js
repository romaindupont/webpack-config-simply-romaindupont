// import Node et plugins
// ...

// Variables de configuration
// ...

module.exports = {
  mode: '', // ... mode de webpack (development | production | test)
  resolve: {
    // ... les règles pour les imports
  },
  entry: {
    // ... les fichiers en entrée
  },
  output: {
    // ... les fichier de sortie (nommage, emplacement, ...)
  },
  optimization: {
    // ... les optimisations de production / distribution
  },
  module: {
    rules: [
      // ... les différentes règles de fonctionnement
      // - JS et babel
      // - CSS / SASS / SCSS
      // - Images
      // - etc.
    ],
  },
  devServer: {
    // ... les options du serveur de prévisualisation
  },
  plugins: [
    // ... les plugins de webpack
  ],
};
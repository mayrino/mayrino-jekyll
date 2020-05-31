const path = require('path');

module.exports = {
  mode: 'development',
  entry: './pickupCss.js',
   output: {
    path: path.resolve(__dirname, '../site/_sass/mayrino'),
    filename: 'extractFromBootstrap.scss'
  },
  module: {
    rules: [
       {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
 
      }
     
      ,{
        test: /\.html$/i,
        loader: 'html-loader',
        options:{
         attributes: {
            list: [
              {
                // Attribute name
                attribute: 'class',
                // Type of processing, can be `src` or `scrset`
                type: 'src',
                // Allow to filter some attributes (optional)
                filter: (tag, attribute, attributes, resourcePath) => {
                  // The `tag` argument contains a name of the HTML tag.
                  // The `attribute` argument contains a name of the HTML attribute.
                  // The `attributes` argument contains all attributes of the tag.
                  // The `resourcePath` argument contains a path to the loaded HTML file.

                  // choose all HTML tags except img tag
                  return tag.toLowerCase() !== 'img';
                },
              },
            ],
          },
 
        }
      },
    ]
  }
}
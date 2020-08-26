const dev = process.env.NODE_ENV !== 'production';

const server = dev ? process.env.DEV_SERVER : process.env.PROD_SERVER;

const tinyAPIKey = process.env.TINY_API_KEY;

const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;

const sanitizeConfig = {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'span',
    'p',
    'a',
    'ul',
    'ol',
    'nl',
    'li',
    'b',
    'i',
    'strong',
    'em',
    'strike',
    'abbr',
    'code',
    'hr',
    'br',
    'div',
    'table',
    'thead',
    'caption',
    'tbody',
    'tr',
    'th',
    'td',
    'pre',
    'iframe',
    'img',
    'br',
    'hr',
    'link',
  ],
  allowedAttributes: {
    '*': [
      'href',
      'name',
      'target',
      'src',
      'style',
      'class',
      'border',
      'width',
      'height',
      'alt',
      'data-mce-p-src',
      'data-mce-style',
    ],
    span: [
      'class',
      'contenteditable',
      'data-mce-object',
      'data-mce-p-allowfullscreen',
      'data-mce-p-src',
      'src',
      'width',
      'height',
      'frameborder',
      'allowfullscreen',
    ],
    iframe: [
      'src',
      'width',
      'height',
      'frameborder',
      'allowfullscreen',
    ],
  },
};

module.exports = {
  server,
  tinyAPIKey,
  googleMapsAPIKey,
  sanitizeConfig,
};

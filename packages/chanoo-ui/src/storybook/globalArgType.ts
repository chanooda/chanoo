import { gapStyle, heightStyle, sizeStyle, widthStyle } from '../system';

export const asDetail = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noindex',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'slot',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'template',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'video',
  'wbr',
  'webview',
  'svg',
  'animate',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'switch',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
  'view'
];

export const as = {
  description: 'element 명을 입력해 해당 element로 변경할 수 있습니다.',
  table: {
    type: { detail: asDetail.join(', '), summary: 'string' }
  }
};

export const sizeArgTypes = {
  h: {
    control: 'select',
    options: Object.keys(heightStyle)
  },
  size: {
    control: 'select',
    defaultValue: 20,
    options: Object.keys(sizeStyle)
  },
  w: {
    control: 'select',
    options: Object.keys(widthStyle)
  }
};

export const spaceArgTypes = {
  gap: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  m: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  mb: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  ml: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  mr: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  mt: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  my: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  p: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  pb: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  pl: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  pr: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  pt: {
    control: 'select',
    options: Object.keys(gapStyle)
  },
  py: {
    control: 'select',
    options: Object.keys(gapStyle)
  }
};

export const flexArgTypes = {
  horizontal: {
    control: { type: 'select' },
    options: ['center', 'start', 'end']
  },
  vertical: {
    control: { type: 'select' },
    options: ['center', 'start', 'end']
  }
};

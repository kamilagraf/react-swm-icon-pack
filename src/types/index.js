import PropTypes from 'prop-types';

const { shape, string, number, oneOfType, oneOf } = PropTypes;

export const iconType = shape({
  color: string,
  strokeWidth: oneOfType([string, number]),
  size: oneOfType([string, number]),
  set: oneOf(['broken', 'curved', 'duotone', 'outline']),
});

import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Star1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12.4472 17.2236C12.1657 17.0829 11.8343 17.0829 11.5528 17.2236L7.94469 19.0277C7.18054 19.4098 6.32013 18.7196 6.52734 17.8907L7.37099 14.5161C7.45165 14.1935 7.36663 13.8518 7.14414 13.6046L4.35918 10.5102C3.80405 9.8934 4.19839 8.90783 5.02578 8.84419L8.91085 8.54534C9.27427 8.51738 9.5937 8.29391 9.74453 7.96208L11.0896 5.00282C11.4449 4.22123 12.5551 4.22123 12.9104 5.00282L14.2555 7.96208C14.4063 8.29391 14.7257 8.51738 15.0892 8.54534L18.9742 8.84419C19.8016 8.90783 20.196 9.8934 19.6408 10.5102L16.8559 13.6046C16.6334 13.8518 16.5484 14.1935 16.629 14.5161L17.4727 17.8907C17.6799 18.7196 16.8195 19.4098 16.0553 19.0277L12.4472 17.2236Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z" fill={color} />
      <path
        d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );

  switch (set) {
    case 'broken':
      return <Broken />;
    case 'curved':
      return <Curved />;
    case 'duotone':
      return <Duotone />;
    case 'outline':
      return <Outline />;
    default:
      return <Outline />;
  }
};

Star1.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Star1.displayName = 'Star1';
export default createIcon(Star1);

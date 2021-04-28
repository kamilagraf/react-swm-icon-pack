import React, { useContext, memo } from 'react';
import { SWMIconContext } from './context';
import PropTypes from 'prop-types';

const createIcon = (Component) => {
  const IconWrapper = ({ color, secondaryColor, strokeWidth, size, set, style }) => {
    const context = useContext(SWMIconContext);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || context.size}
        height={size || context.size}
        fill="none"
        viewBox="0 0 24 24"
        style={style}
      >
        <Component
          color={color || context.color}
          secondaryColor={secondaryColor || context.secondaryColor}
          strokeWidth={strokeWidth || context.strokeWidth}
          set={set || context.set}
        />
      </svg>
    );
  };

  IconWrapper.propTypes = {
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    set: PropTypes.oneOf(['broken', 'curved', 'duotone', 'outline', 'twocolor']),
  };

  const MemoIcon = memo(IconWrapper);
  return MemoIcon;
};

export default createIcon;

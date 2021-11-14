import React, { useContext, memo, forwardRef } from 'react';
import { SWMIconContext } from './context';
import { iconType } from '../types';

const createIcon = (Component) => {
  const IconWrapper = forwardRef(({ color, strokeWidth, size, set, style, ...props }, ref) => {
    const context = useContext(SWMIconContext);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || context.size}
        height={size || context.size}
        fill="none"
        viewBox="0 0 24 24"
        style={style}
        {...props}
        ref={ref}
      >
        <Component color={color || context.color} strokeWidth={strokeWidth || context.strokeWidth} set={set || context.set} />
      </svg>
    );
  });

  IconWrapper.propTypes = {
    props: iconType,
  };

  const MemoIcon = memo(IconWrapper);
  return MemoIcon;
};

export default createIcon;

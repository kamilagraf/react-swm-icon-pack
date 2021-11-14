import React, { createContext } from 'react';

const defaultValues = {
  color: '#001A72',
  strokeWidth: '1.5',
  size: '24',
  set: 'outline',
};

export const SWMIconContext = createContext(defaultValues);
SWMIconContext.displayName = 'SWMIconContext';

export const SWMIconProvider = ({ children, color, strokeWidth, size, set }) => {
  const providerValues = {
    color: color || defaultValues.color,
    strokeWidth: strokeWidth || defaultValues.strokeWidth,
    size: size || defaultValues.size,
    set: set || defaultValues.set,
  };

  return <SWMIconContext.Provider value={providerValues}>{children}</SWMIconContext.Provider>;
};

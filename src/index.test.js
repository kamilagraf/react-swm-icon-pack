import React from 'react';
import { render } from '@testing-library/react';
import { Air, Alarm } from './Icons';
import SWMIcon from './helpers/mapIcons';
import * as SWMIconPack from './Icons';
import { SWMIconProvider } from './helpers/context';

describe('SWMIcons', () => {
  it('Renders the icon component', () => {
    const icon = <Air />;
    render(icon);
    expect(icon).toBeTruthy();

    const icon2 = <Alarm set="broken" color="#0000" />;
    render(icon2);
    expect(icon2).toBeTruthy();
  });

  it('Renders the SWMIcon element', () => {
    const icon = <SWMIcon name="Air" />;
    render(icon);
    expect(icon).toBeTruthy();
  });

  it('Renders the SWMIconPack element', () => {
    const icon = <SWMIconPack.Air set="broken" />;
    render(icon);
    expect(icon).toBeTruthy();
  });

  it('Renders the icon component with SWMIconProvider', () => {
    const icon = (
      <SWMIconProvider set="duotone" color="#5555">
        <Air />
        <Alarm color="#0000" />
      </SWMIconProvider>
    );
    render(icon);
    expect(icon).toBeTruthy();
  });
});

# React SWM Icon Pack

[![NPM](https://img.shields.io/npm/v/react-swm-icon-pack.svg)](https://www.npmjs.com/package/react-swm-icon-pack)

![Cover art](/images/swm-icon-pack-cover.jpg)    

&nbsp;
&nbsp;
&nbsp;


## About the pack

Carefully designed icons to help your projects shine like a diamond. More than 1100 icons divided into 4 styles and several categories are ready as react components to speed up building your product.

SWM Icon Pack was originally published on [Figma Community](https://www.figma.com/community/file/942053544758339202/SWM-Icon-Pack) as SVG icon pack, now the family expanded thanks to [React Icon Pack](https://www.npmjs.com/package/react-swm-icon-pack) and [Figma Plugin], everything is free and ready to use.

&nbsp;
&nbsp;
&nbsp;

### What’s in it for you?

* More than 1100 react components, ready to use right away;

* 4 styles of icons - outline, broken, duotone, and curved;

* Customization options - stroke, size, set, and color;

* Easy preview on [Figma Community](https://www.figma.com/community/file/942053544758339202/SWM-Icon-Pack);

&nbsp;
&nbsp;
&nbsp;


![Cover art](/images/swm-icon-pack-01.jpg)

![Cover art](/images/swm-icon-pack-02.jpg)

![Cover art](/images/swm-icon-pack-03.jpg)

![Cover art](/images/swm-icon-pack-04.jpg)

&nbsp;
&nbsp;
&nbsp;

### Related projects

* [SWM Icon Pack Figma Plugin on GitHub](https://github.com/kvmxlv/figma-swm-icon-pack)

* [SWM Icon Pack Figma Plugin on Figma Community]

* [SWM Icon Pack on Figma Community](https://www.figma.com/community/file/942053544758339202/SWM-Icon-Pack)

&nbsp;
&nbsp;
&nbsp;


## Installation

    yarn add react-swm-icon-pack

or

    npm i react-swm-icon-pack

&nbsp;
&nbsp;
&nbsp;

## Usage

```jsx
import React from 'react';
import { Air } from 'react-swm-icon-pack';

const App = () => {
  return <Air />;
};

export default App;
```

You can also pass inline props to the icon

```jsx
<Air color="purple" set="duotone" size="40" />
```

or even your custom styles

```jsx
<Air style={{ transform: 'scale(2, 0.5)' }} />
```

You can also use SWMIcon component and pass as a prop icon name you prefer:

```jsx
import React from 'react';
import { SWMIcon } from 'react-swm-icon-pack';

const App = () => {
  return <SWMIcon name="Air" color="purple" set="duotone" />;
};

export default App;
```

You can also include the whole icon pack:

```jsx
import React from 'react';
import * as SWMIconPack from 'react-swm-icon-pack';

const App = () => {
  return <SWMIconPack.Air color="purple" set="duotone" size="40" />;
};

export default App;
```

You can also use `SWMIconProvider` component, this will make all the icons that are within the context use the Provider properties.
Setting props for any icon wrapped in SWMIconProvider will override Provider's properties.

```jsx
import React from 'react';
import { SWMIconProvider, Air, Calendar, Cam } from 'react-swm-icon-pack';

const App = () => {
  return (
    <SWMIconProvider color="purple" set="duotone" size="40" strokeWidth="1.8">
      <Air />
      <Calendar />
      <Cam color="blue" set="curved" />
    </SWMIconProvider>
  );
};

export default App;
```

&nbsp;
&nbsp;
&nbsp;

## Available props

| Prop          | Type                                  | Default   | Description                                     |
| ------------- | ------------------------------------- | --------- | ----------------------------------------------- |
| `name`        | `string`                              |           | The icon you want to render                     |
| `style`       | `object`                              |           | Custom styles property                          |
| `set`         | `outline` `broken` `duotone` `curved` | `outline` | Icons set option                                |
| `size`        | `string` `number`                     | `24`      | Size of icon (applies as both width and height) |
| `strokeWidth` | `string` `number`                     | `1.5`     | Line stroke for icons                           |
| `color`       | `string`                              | `#001A72` | Primary color for icons                         |

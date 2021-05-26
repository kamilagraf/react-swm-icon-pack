# React SWM Icon Pack

[![NPM](https://img.shields.io/npm/v/react-swm-icon-pack.svg)](https://www.npmjs.com/package/react-swm-icon-pack)
![APM](https://img.shields.io/apm/l/:react-swm-icon-pack.svg)


**react-swm-icon-pack** is a collection of carefully designed icons for React.js to help you with icons in your projects. Completely free and ready to use.

**What’s in it for you?**
- 275 unique icons
- 5 sets of icons (outline, broken, duotone, twocolor, curved)
- Fully vector, based on 24px grid with a pixel-perfect approach

**🌐 Live preview on Figma Community:**
https://www.figma.com/community/file/942053544758339202/SWM-Icon-Pack


#### Based on SWM Icon Pack ```v2.0.0```


### Installation
    yarn add react-swm-icon-pack

  or

    npm i react-swm-icon-pack
    
### Usage

```jsx
import React from 'react';
import { Air } from 'react-swm-icon-pack';

const App = () => {
  return <Air />
};

export default App;
```

You can also pass inline props to the icon
```jsx
 <Air color="purple" secondaryColor="orange" set="twocolor" size="40" />
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
  return  <SWMIcon name="Air" color="purple" secondaryColor="orange" set="twocolor" />
};

export default App;
```

You can also include the whole icon pack:
```jsx
import React from 'react';
import * as SWMIconPack from 'react-swm-icon-pack';

const App = () => {
  return <SWMIconPack.Air color="purple" secondaryColor="orange" set="twocolor" size="40" />
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
    <SWMIconProvider color="purple" secondaryColor="orange" set="twocolor" size="40" strokeWidth="1.8" >
      <Air />
      <Calendar />
      <Cam color="blue" secondaryColor="black" />
    </SWMIconProvider>
  )
};

export default App;
```

### Available props

| Prop             | Type                                             | Default   | Description                                                         |
| ---------------- | ------------------------------------------------ | --------- | ------------------------------------------------------------------- |
| `name`           | `string`                                         |           | The icon you want to render                                         |
| `style`          | `object`                                         |           | Custom styles property                                              |
| `set`            | `outline` `broken` `duotone` `twocolor` `curved` | `outline` | Icons set option                                                    |
| `size`           | `string` `number`                                | `24`      | Size of icon (applies as both width and height)                     |
| `strokeWidth`    | `string` `number`                                | `1.5`     | Line stroke for icons                                               |
| `color`          | `string`                                         | `#001A72` | Primary color for icons                                             |
| `secondaryColor` | `string`                                         | `#38ACDD` | Secondary color for twocolor icons set                              |





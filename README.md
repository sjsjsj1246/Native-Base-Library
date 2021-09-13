# Native-Base-Libarary

## Install

yarn add

- native-base styled-components styled-system

expo install

- react-native-svg
- react-native-safe-area-context

## Get Start

### Setup NativeBase Provider

```js
export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
```

### Add Custom Theme

```js
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}
```

### Add ColorModeManager

```js
import React from "react";
import { NativeBaseProvider, ColorMode } from "native-base";
import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem("@my-app-color-mode", value);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {/* Your App Goes Here */}
    </NativeBaseProvider>
  );
};
```

### Add External Dependencies

```js
import React from "react";
import { NativeBaseProvider } from "native-base";

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
```

## Core Concept

### Pseudo-props

- \_hover
- \_pressed
- \_focus
- \_invalid
- \_disabled
- \_web, \_iOS, \_android

### Responsive

## Default Theme

https://docs.nativebase.io/default-theme

### colors

### spacing

### Typography

### Size

### Shadows

## Features

### Utility Props

#### Margin and padding

- m, mt, mr, mb, ml, mx, my
- p, pt, pr, pb, pl, px, py

#### Color and background color

- color, bg/background, bgColor, opacity

#### Typography

- fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textTransform, textDecoration

#### Layout, width and height

- w/width, h/height, minW/minWidth, maxW/maxWidth, minH/minHeight, maxH/maxHeight, d/display, boxSize, verticalAlign, overflow, overflowX, overflowY

#### Flexbox

- alignItems/align, alignContent, justifyItems, justifyContent/justify, flexWrap/wrap, flexDirection/flexDir/direction, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order

#### Borders

- border, borderWidth, borderStyle, borderColor, borderTop, borderTopWidth, borderTopStyle, borderTopColor, borderRight, borderRightWidth, borderRightStyle, borderRightColor, borderBottom, borderBottomWidth, borderBottomStyle, borderBottomColor, borderLeft, borderLeftWidth, borderLeftStyle, borderLeftColor

#### Borders Radius

- borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius

#### Position

- pos,position, zIndex, top, right, bottom, left

#### Shadow

- shadow

#### Internal Props

- \_stack, \_text

### ColorMode

- useColorMode
- useColorModeValue
- Default color mode
- Persisting the color mode

### NativeBase Factory

Factory(component, componentTheme)

### SafeAreaView Props

### Accessibility

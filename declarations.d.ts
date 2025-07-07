// declarations.d.ts

// Para react-native-check-box
declare module 'react-native-check-box';

// Para importar SVGs como componentes
declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}


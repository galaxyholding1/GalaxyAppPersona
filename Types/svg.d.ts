declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.webp';

declare module '*.mp3';
declare module '*.wav';
declare module '*.ogg';
declare module '*.m4a';

declare module '*.mp4';
declare module '*.mov';
declare module '*.avi';
declare module '*.webm';
declare module '*.mkv';

declare module '*.pdf';
declare module '*.zip';
declare module '*.txt';
declare module '*.json';

declare module '*.ttf';
declare module '*.otf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';

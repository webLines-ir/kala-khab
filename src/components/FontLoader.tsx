'use client';

import { useEffect } from 'react';
import { getAssetPath } from '@/lib/utils';

const FontLoader = () => {
  useEffect(() => {
    // Create dynamic font CSS with font-display: block to prevent FOIT
    const fontCSS = `
      @font-face {
        font-family: 'IRANSans';
        src: url('${getAssetPath('/fonts/woff2/IRANSansWeb_UltraLight.woff2')}') format('woff2'),
             url('${getAssetPath('/fonts/woff/IRANSansWeb_UltraLight.woff')}') format('woff'),
             url('${getAssetPath('/fonts/ttf/IRANSansWeb_UltraLight.ttf')}') format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'IRANSans';
        src: url('${getAssetPath('/fonts/woff2/IRANSansWeb_Light.woff2')}') format('woff2'),
             url('${getAssetPath('/fonts/woff/IRANSansWeb_Light.woff')}') format('woff'),
             url('${getAssetPath('/fonts/ttf/IRANSansWeb_Light.ttf')}') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'IRANSans';
        src: url('${getAssetPath('/fonts/woff2/IRANSansWeb.woff2')}') format('woff2'),
             url('${getAssetPath('/fonts/woff/IRANSansWeb.woff')}') format('woff'),
             url('${getAssetPath('/fonts/ttf/IRANSansWeb.ttf')}') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'IRANSans';
        src: url('${getAssetPath('/fonts/woff2/IRANSansWeb_Medium.woff2')}') format('woff2'),
             url('${getAssetPath('/fonts/woff/IRANSansWeb_Medium.woff')}') format('woff'),
             url('${getAssetPath('/fonts/ttf/IRANSansWeb_Medium.ttf')}') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'IRANSans';
        src: url('${getAssetPath('/fonts/woff2/IRANSansWeb_Bold.woff2')}') format('woff2'),
             url('${getAssetPath('/fonts/woff/IRANSansWeb_Bold.woff')}') format('woff'),
             url('${getAssetPath('/fonts/ttf/IRANSansWeb_Bold.ttf')}') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: block;
      }
    `;

    // Check if fonts are already loaded
    const existingStyle = document.getElementById('iran-sans-fonts');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'iran-sans-fonts';
      style.textContent = fontCSS;
      document.head.appendChild(style);

      // Add font-loaded class when fonts are ready
      if (document.fonts) {
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('font-loaded');
        });
      } else {
        // Fallback for older browsers
        setTimeout(() => {
          document.documentElement.classList.add('font-loaded');
        }, 1000);
      }
    }
  }, []);

  return null;
};

export default FontLoader;

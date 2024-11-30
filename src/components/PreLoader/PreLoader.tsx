import React, { useEffect } from 'react'
import { Global } from '@emotion/react'
import { preLoaderAnim } from './index'
import { useColorMode } from '@chakra-ui/react';

export default function PreLoader() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  useEffect(() => {
    preLoaderAnim();
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode,toggleColorMode]);

  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>Design</span>
        <span>and</span>
        <span>Develop</span>
      </div>
    </div>
  )
}

export const PreLoaderStyle = () => (
  <Global
    styles={`
      .preloader {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        width: 100%;
        background: #202023;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;
        overflow: hidden !important;
    
      }
      .texts-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 280px;
        font-size: 20px;
        overflow: hidden;
        font-weight: 800;
        opacity: 0;
        color: #F0EAD6;
      }
    `}
  />
)
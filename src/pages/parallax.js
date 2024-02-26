import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Page1 from './parallpage1'
import React from 'react'
export default function Parallaxpage() {


  const alignCenter = { display: 'flex', alignItems: 'center' }
    return (
      <>
      <Parallax pages={5} style={{ top: '0', left: '0' }} className='bg-base-200'>
        <ParallaxLayer offset={0} speed={0} factor={ 2}>
          <Page1></Page1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.1}  factor={ 2} style={{backgroundColor:'black'}}>
          <p style={{color : 'white'}}>2번째 페이지야</p>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div >
            <p style={{background : 'white'}}>I'm a sticky layer
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={ 2} style={{backgroundColor:'green'}}>
          <p>3페이지야</p>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.1} factor={ 1.2}  style={{backgroundColor:'blue'}}>
 
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0} factor={ 1.2} style={{backgroundColor:'pink'}}>
          <p>5페이지야</p>
        </ParallaxLayer>
      </Parallax>
   
        </>
    )
  }
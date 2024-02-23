import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Parallaxpage() {
    return (
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <p style={{backgroundColor:'red'}}>Parallax</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <p>2번째 페이지야</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <p>3페이지야</p>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <p>4페이지야</p>
        </ParallaxLayer>
      </Parallax>
    )
  }
import './App.css';
import { animated ,useSpring } from '@react-spring/web'

function App() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))
  const handleClick = () => {
    api.start({
          to: {
        x: springs.x.get() === 500 ? 0 : 500,
      },
    
    })
  }
  return (
    <div className="App">
     <animated.div onClick={handleClick}
      style={{
        width: 50,
        height: 50,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs
      }}
    />
    </div>
  );
}

export default App;

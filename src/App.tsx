import React from 'react';
import Parent from './components/Parent';
import useAppHook from './hooks/useAppHook';


function App() {
  const [ref, text, hOnClick] = useAppHook();

  return (
    <>
      <div>
        <Parent ref={ref} text={text} />
      </div>
      <button onClick={hOnClick}>Set</button>
    </>
  );
}

export default App;

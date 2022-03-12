import { useState, useEffect } from 'react';


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const 클릭 = () => setValue((prev) => prev + 1);
  const 변경 = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('i run only once');
  }, []);

  useEffect(() => {
    console.log('i run only keyword changes')
  }, [keyword])

  useEffect(() => {
    console.log('i run only counter changes')
  }, [counter]);

  useEffect(() =>{
    console.log('I run when keyword | counter change')
  }, [keyword, counter])

  return (
    <div>
      <input 
      value={keyword} 
      onChange={변경} 
      type='text' 
      placeholder='Seach here...' />
      <h1>{counter}</h1>
      <button onClick={클릭}>Click me!</button>
    </div>
  );
}

export default App;

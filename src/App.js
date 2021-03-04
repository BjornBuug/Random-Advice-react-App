import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';



function App() {
const [advices , setAdvices] = useState({});
const [isLoading, setIsLoading]= useState(true);

//Destructuring advice from response.data.slip.advice with const {advice} = response.data.slip;
useEffect(()=> {
    const getFetchAdvice = async () => {
      const result = await fetchAdvice();
      setAdvices(result);
      setIsLoading(false)

    }
    getFetchAdvice();
    }
    
,[])

const fetchAdvice = async () => {
  const response = await axios.get('https://api.adviceslip.com/advice')
  const {advice} = response.data.slip;
  setAdvices(advice);
  return advice;
  
}
  
  return isLoading ?
   ( 'is Loading...') :
     (<div className="App">
    <div className="card">
        <h3 className="heading">{advices}</h3>
        <button className="button" onClick={fetchAdvice}> Advice me !</button>
    </div>
    </div>
  );

}
export default App;

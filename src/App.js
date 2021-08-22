import './App.css';
import {useState} from "react";

const useReactive = () =>{
    const [value, setValue] = useState()
    return new Proxy({}, {
        get: (target, prop ) => {
            return value
        },
        set: (target, prop, val) => {
            if(val !== value) {
                setValue(val);
                return val;
            }
        }
    })
}

function App() {
  const reactive = useReactive();
  return (
    <div className="App">
      <p>
      {reactive.value}
      </p>
      <input
          type="text"
          onChange={({target})=> {
              reactive.value = target.value
          }
      }/>


    </div>
  );
}

export default App;

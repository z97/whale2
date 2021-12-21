import React, {useState} from 'react';
import Whale from "./components/Whale";

const App = () => {
    const [value, setValue] = useState('text in input')

    return (
        <div className='App'>
          <Whale/>

        </div>
    );
};

export default App;
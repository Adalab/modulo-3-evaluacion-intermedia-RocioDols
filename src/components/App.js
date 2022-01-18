import '../styles/App.scss';
import { useState } from 'react';
import conctactList from '../data/contacts.json';

function App() {

  const [data, setdata] = useState(conctactList);

  console.log(data);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;


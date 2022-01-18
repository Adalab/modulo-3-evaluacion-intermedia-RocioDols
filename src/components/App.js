import '../styles/App.scss';
import { useState } from 'react';
import conctactList from '../data/contacts.json';

function App() {

  const [data, setdata] = useState(conctactList);

  console.log(data);

  const htmlConctact = data.map(contact => (
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  ));

  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr>
        {htmlConctact}
      </table>
    </div>
  );
}

export default App;


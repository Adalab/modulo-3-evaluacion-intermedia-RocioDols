import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../service/api';
// import conctactList from '../data/contacts.json';

function App() {
  //estado datos
  const [data, setData] = useState([]);
  //formulario para añadir contacto
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');
  //estado paar filtro
  const [filterName, setFilterName] = useState('');
  //estado para filtro select
  const [filterSelect, setFilterSelect] = useState('');

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    getApiData().then((apiData) => {
      setData(apiData)
    });
  }, []);

  const htmlConctact = data

    .filter(
      (contact) =>
        contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    )
    .filter(
      (contact) =>
        contact.counselor.toLocaleLowerCase().includes(filterSelect.toLocaleLowerCase()
        )
    )
    .map(contact => (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.counselor}</td>
        <td>{contact.speciality}</td>
      </tr >
    ));

  const handleInputName = (ev) => {
    setName(ev.target.value);
  }
  const handleInputCounselor = (ev) => {
    setCounselor(ev.target.value);
  }
  const handleInputSpeciality = (ev) => {
    setSpeciality(ev.target.value);
  }
  //Función manejadora para el filtro
  const handleFilterName = (ev) => {
    setFilterName(ev.target.value);
  }
  //Función manejadora para el filtroSelect
  const handleFilterSelect = (ev) => {
    setFilterSelect(ev.target.value);
  }

  const handleClick = (ev) => {
    ev.preventDefault();

    const newContact = {
      name: name,
      counselor: counselor,
      speciality: speciality,
    };
    setData([...data, newContact]);
    setName('');
    setCounselor('');
    setSpeciality('');
  }

  return (
    <>
      <header className="header">
        <h1>Adalabers</h1>
      </header>
      <main>
        <form>
          <h2 className="new-contact__title">Nombre</h2>
          <input
            className=""
            type="text"
            placeholder="Nombre"
            onChange={handleFilterName}
            value={filterName}
          />
          <select
            className=""
            value={filterSelect}
            onChange={handleFilterSelect}
          >
            <option value="">Escoge una opción</option>
            <option value="Yanelis">Yanelis</option>
            <option value="Dayana">Dayana</option>
            <option value="Ivan">Iván</option>

          </select>

        </form>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody>
            {htmlConctact}
          </tbody>
        </table>
        <h1>Añadir una Adalaber</h1>
        <form>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            value={name}
            onChange={handleInputName}
          />
          <label htmlFor='counselor'>Tutora</label>
          <input
            type='text'
            value={counselor}
            onChange={handleInputCounselor}
          />
          <label htmlFor='speciality'>Especialidad</label>
          <input
            type='text'
            value={speciality}
            onChange={handleInputSpeciality}
          />
          <input type="submit" value="Añadir una nueva Adalaber" onClick={handleClick} />
        </form>
      </main>
    </>
  );
}

export default App;


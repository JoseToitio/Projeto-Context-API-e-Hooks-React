import React, { useContext, useEffect, useState } from 'react';
import planetsContext from '../context/planets';

function Table() {
  const { data } = useContext(planetsContext);
  const [planetName, setPlanetName] = useState('');
  const [planets, setPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleClickFilter = () => {
    const numberValue = parseInt(value, 10);

    const filter = data.filter((planet) => {
      if (comparison === 'maior que') return planet[column] > numberValue;
      if (comparison === 'menor que') return planet[column] < numberValue;

      return planet[column] === value;
    });

    setOptions(options.filter((option) => option !== column));
    setPlanets(filter);
  };

  const filterName = (name) => {
    const filtered = data.filter((planet) => planet.name.includes(name));
    setPlanets(filtered);
  };

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Digite um planeta"
        value={ planetName }
        data-testid="name-filter"
        onChange={ ({ target }) => {
          setPlanetName(target.value);
          filterName(target.value);
        } }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => {
          setColumn(target.value);
        } }
        value={ column }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          setComparison(target.value);
        } }
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => {
          setValue(target.value);
        } }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filtrar
      </button>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>

        {planets.map(
          ({ name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ),
        )}
      </table>
    </div>
  );
}

export default Table;

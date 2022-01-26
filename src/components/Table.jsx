import React, { useContext, useEffect, useState } from 'react';
import planets from '../context/planets';

function Table() {
  const { data } = useContext(planets);
  const [planetName, setPlanetName] = useState('');
  const [planetss, setPlanetss] = useState([]);

  useEffect(() => {
    setPlanetss(data);
  }, [data]);

  const filterName = (value) => {
    const filtered = data.filter((planet) => planet.name.includes(value));
    setPlanetss(filtered);
  };

  const handleChange = ({ target }) => {
    setPlanetName(target.value);
    filterName(target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Digite um planeta"
        value={ planetName }
        data-testid="name-filter"
        onChange={ handleChange }
      />
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

        {planetss.map(
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

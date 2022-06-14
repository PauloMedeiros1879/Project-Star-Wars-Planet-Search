import React, { useContext } from 'react';
import Context from '../hooks/Context';
import '../style/Table.css';

function Table() {
  const { filterData } = useContext(Context);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="item_color_alternate">Name</th>
            <th>Rotation Period</th>
            <th className="item_color_alternate">Orbital Period</th>
            <th>Diameter</th>
            <th className="item_color_alternate">Climate</th>
            <th>Gravity</th>
            <th className="item_color_alternate">Terrain</th>
            <th>Surface Water</th>
            <th className="item_color_alternate">Population</th>
            <th>Films</th>
            <th className="item_color_alternate">Created</th>
            <th>Edited</th>
            <th className="item_color_alternate">URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData.map((planet) => (
              <tr key={ planet.name }>
                <td className="item_color_alternate">{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td className="item_color_alternate">{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td className="item_color_alternate">{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td className="item_color_alternate">{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td className="item_color_alternate">{ planet.population }</td>
                <td>{ planet.films }</td>
                <td className="item_color_alternate">{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td className="item_color_alternate">{ planet.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;

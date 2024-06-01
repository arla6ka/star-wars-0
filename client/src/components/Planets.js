import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://star-wars-0.vercel.app/api/planets');
        setPlanets(response.data);
      } catch (error) {
        console.error('Error fetching planets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <h3>{planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <p>Residents: {planet.residents.length > 0 ? planet.residents.join(', ') : 'No residents'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;

import React from 'react'
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const Vehicles = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
          })
          .then((data) => {
            setVehicle(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setVehicle(null)
          })
          .finally(() => setLoading(false));
      }, [])

  return (
    <div>
        <li>
            {loading && <Spinner />}
            {error && `Unable to fetch Planets! - ${error}`}
            {vehicle && vehicle.name}
      </li>
    </div>
  )
}

export default Vehicles;
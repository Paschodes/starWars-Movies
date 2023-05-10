import React from 'react'
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const Starships = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [starship, setStarship] = useState(null);
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
            setStarship(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setStarship(null)
          })
          .finally(() => setLoading(false));
      }, [])

  return (
    <div>
        <li>
            {loading && <Spinner />}
            {error && `Unable to fetch Starships! - ${error}`}
            {starship && starship.name}
      </li>
    </div>
  )
}

export default Starships;
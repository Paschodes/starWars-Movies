// import React, { useEffect, useState } from 'react'
// import MoreInfo from './MoreInfo';

// const Data = () => {
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`https://swapi.dev/api/films`)
//         .then((response) => {
//             if(!response.ok) {
//                 throw new Error(`This is an HTTP Error: the status is ${response.status}`)
//             }
//             return response.json()
//         })
//         .then((data) => {
//             setData(data)
//             setError(null)
//         })
//         .catch((error) => {
//             setError(error)
//             setData(null)
//         })
//         .finally(() => setLoading(false))
//     })

//   return (
//     <div>
//         <MoreInfo error={error} loading={loading} data={data}/>
//     </div>
//   )
// }

// export default Data;
import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='spin'>
        
        <Triangle
        height="80"
        width="80"
        color="#e4f82b"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
    </div>
  )
}

export default Spinner;
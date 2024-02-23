import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, to}) => {
  return (
    <Link to={to} className='bg-custom-204E51 p-3 max-w-max max-h-max rounded-lg mt-5'>
        <span className='m-6 font-bold text-white text-center'>{text}</span>
    </Link>
  )
}

export default Button
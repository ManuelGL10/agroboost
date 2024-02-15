import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-custom-204E51 p-3 max-w-max max-h-max rounded-lg mt-5'>
        <span className='m-6 font-bold text-white'>{text}</span>
    </div>
  )
}

export default Button
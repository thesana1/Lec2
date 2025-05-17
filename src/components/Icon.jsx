import React from 'react'

export default function Icon({src, username}) {
  return (
    <div className='x1'>
        <img src= {src} alt="" />
        <h1>user name:{username}</h1>
    </div>
  )
}

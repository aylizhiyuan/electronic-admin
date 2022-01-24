import React from 'react'
import img from '../../assets/abc.jpg'
import img2 from '@/assets/abc.jpg'

export default function Test() {
  return (
    <div>
      <img src={img} />
      <img src={img2} />
    </div>
  )
}

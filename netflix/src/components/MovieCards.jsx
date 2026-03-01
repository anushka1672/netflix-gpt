import React from 'react'
import { img_CND } from '../utils/constant'

export default function MovieCards({poster}) {
  return (
    <div className="w-48 h-32 mr-4">
      <img className="w-full h-full object-cover rounded-lg" src={img_CND + poster} alt="Movie Poster" />
    </div>
  )
}

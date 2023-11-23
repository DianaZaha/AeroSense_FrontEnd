import React from 'react'
import Reading from './Reading'

export default function SensorReading({reading}) {
  return (
      reading.map(reading =>{
        return <Reading value={reading}/>
      })

  )
}

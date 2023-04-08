import React from 'react'
import { Html } from '@react-three/drei'
import { useProgress } from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      {/* <span className='canvas-loader'>{progress.toFixed(2)}%</span> */}
      <p style={{fontSize: 14, color: '#f1f1f1',fontWeight: 'bold', marginTop:40}}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
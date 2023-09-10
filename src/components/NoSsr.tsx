import dynamic from 'next/dynamic'
import React from 'react'

const NoSSr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSSr), {
  ssr: false
})
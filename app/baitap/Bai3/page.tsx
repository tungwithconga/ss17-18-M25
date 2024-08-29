import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>Con vit ne
       <Image src={"https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=1200:*"}
       height={100} 
       width={200} 
       alt='duck'>
      </Image>
    </div>
  )
}

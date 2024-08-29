import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Hoc lap trinh nextjs',
  description: 'hoc next js co ban basic',
}

export default function page() {
  return (
    <div>
      <img width={200} height={200} src="https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" alt="" />
    <Image src={"https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg"}
    height={200} 
    width={200} 
    alt='capybara'>
    </Image>
    <Image src={"https://img.pikbest.com/wp/202345/bear-teddy-adorable-3d-render-of-a-stuffed-against-clean-white-backdrop_9609441.jpg!w700wp"}
    height={200} 
    width={200} 
    alt='capybara'>
    </Image>


    </div>
  )
}
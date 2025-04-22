import Home from '@/component/home/Home'
import React from 'react'
async function fetchData() {
  try {
    const data = await fetch('https://fakestoreapi.com/products/1',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
          },
        next: {
            revalidate: 60,
          },  
    })
    .then(res=>res.json())
    return data
  } catch (error) {
      console.log(error)
  }
}
async function page() {
  const dataFetch =await fetchData()
  return (
    <div>
        <Home dataFetch={dataFetch}/>
    </div>
  )
}

export default page
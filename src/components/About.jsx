import React from 'react'

const About = () => {
  return (
    <div
       name = "about"
       className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
      </div>

      <p className = "text-xl mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde quia officiis repudiandae vel inventore beatae ea! Non, temporibus. Ullam, voluptas! Tenetur beatae, nemo nisi deleniti illo optio quisquam atque.
      </p>
      <br/>

      <p className = "text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat possimus similique, assumenda voluptatem animi dolorem nam consequatur magni! Sapiente autem repellendus quidem ipsam incidunt nisi natus eum reiciendis ullam?
      </p>

      </div>
    </div>
  )
}

export default About
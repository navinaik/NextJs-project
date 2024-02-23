import React from 'react'
import Link from 'next/link'

const LoginDone = ({params}) => {


console.log(params , "aaaaaaaaaa")
  
  return (
    <div>
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row w-full md:w-[70%] items-center space-y-4">
        <div className="md:w-96 w-[100%] md:h-screen h-48 bg-gray-200 overflow-hidden">
          <img
            src="https://images.creativemarket.com/0.1.0/ps/7594070/580/1059/m1/fpnw/wm0/screenshot_2020-01-15-adda-social-network-html-template-.jpg?1&s=b47fcfaea984134c360b1d67ac525ee9"
            alt=""
            className=""
            width={'100%'}
            height={'100%'}

          />
        </div>
        <div className="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
          <div className="text-fuchsia-600 text-xl font-medium">KN social media</div>
          <div className="text-5xl font-medium">yahoooooo</div>
          <div className="text-gray-500">
            weklcome  back {params.firstName + params.lastName} , your  now   suceefully logged in
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg hover:scale-105 cursor-pointer">
             <Link href = '/components'> click here for Home Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.tailwindcss.com"></script>
  </div>
  )
}

export default LoginDone

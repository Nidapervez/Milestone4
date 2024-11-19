import Image from 'next/image'
import React from 'react'
import one from '@/app/signup.jpg'
import two from '@/app/2.jpg'
import Link from 'next/link'

const Nop = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center"
              src={one}
              width={1000}
              height={1000}
            />
          </div>
          <h2 className="title-font text-3xl  text-gray-900 mt-6 mb-3 font-mono font-bold ">
           Authentication Project
          </h2>
          <p className="leading-relaxed text-base font-bold">
          Implement basic user authentication using a simple auth AP
          </p>
          <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          <Link href='https://user-authentication-lake-theta.vercel.app/'> User authentication Porject</Link>
          </button>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center "
              src={two}
              width={1000}
              height={1000}
            />
          </div>
          <h2 className="title-font text-3xl  text-gray-900 mt-6 mb-3  font-mono font-bold">
            Api Integration project
          </h2>
          <p className="leading-relaxed text-base font-bold">
          Fetch and display data from a public API using SSR and SSG..
          </p>
          <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          <Link href='https://weatherappp-alpha.vercel.app/'>Api Inegration project</Link>
          </button>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Nop
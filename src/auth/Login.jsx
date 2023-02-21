import React from 'react'

function Login() {
  return (
    <div className='md:mt-36 mt-64 flex justify-center items-center md:px-24 px-6 font-quicksand '>
        <div className="flex w-full items-center justify-center">
            <div className="rounded-xl border px-16 py-10 shadow-lg max-sm:px-8">
                <div className="">
                    <div className="mb-8 flex justify-center items-center">
                        <h1 className="mb-2  text-2xl">Quotee Login</h1>
                    </div>
                    <form>
                        <div className="mb-4 text-lg">
                            <input 
                                className="rounded-3xl border-none bg-gray-500 px-6 py-2 text-center text-white shadow-lg outline-none" 
                                type="text" 
                                name="name" 
                                placeholder="id@email.com" 
                            />
                        </div>
                        <div className="mb-4 text-lg">
                            <input 
                                className="rounded-3xl border-none bg-gray-500 px-6 py-2 text-center text-white shadow-lg outline-none" 
                                type="Password" 
                                name="name" 
                                placeholder="*********" 
                            />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-lime-400 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-600">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
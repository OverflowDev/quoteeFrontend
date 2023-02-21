import React from 'react'

function Register() {
  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
       
        <div className="md:mt-0 mt-20 w-full">
            <div className="container py-8">
                <div className="md:w-96 mx-auto bg-gray-200 rounded shadow">

                    <div className="md:mx-16 py-4 px-8 text-black text-xl text-center font-bold border-b border-grey-500">Quotee Regstration</div>

                    <form>
                        <div className="py-4 px-8">
                            <div className="mb-4">
                                <label className="block text-gray-800 text-sm font-bold mb-2">Name:</label>
                                <input 
                                    className="border rounded w-full py-2 px-3 text-gray-800" 
                                    type="text"
                                    name="name" 
                                    value="" 
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 text-sm font-bold mb-2">Email:</label>
                                <input 
                                    className="border rounded w-full py-2 px-3 text-gray-800" 
                                    type="email"
                                    name="email" 
                                    value="" 
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 text-sm font-bold mb-2">Username:</label>
                                <input 
                                    className=" border rounded w-full py-2 px-3 text-gray-800" 
                                    type="text"
                                    name="username" 
                                    value=""
                                    placeholder="Username" 
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 text-sm font-bold mb-2">Password:</label>
                                <input 
                                    className=" border rounded w-full py-2 px-3 text-gray-800" 
                                    type="password"
                                    name="password" 
                                    value=""
                                    placeholder="password" 
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 text-sm font-bold mb-2">Confirm Password:</label>
                                <input 
                                    className=" border rounded w-full py-2 px-3 text-gray-800" 
                                    type="password"
                                    name="confirmPassword" 
                                    value=""
                                    placeholder="Confirm Password" 
                                />
                            </div>
                            {/* Button  */}
                            <div className="mb-4 flex justify-center">
                                <button type='submit' className="mb-2 mx-16 rounded-md py-2 px-24 bg-lime-400 hover:bg-lime-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Register
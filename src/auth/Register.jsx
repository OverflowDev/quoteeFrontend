import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Triangle } from  'react-loader-spinner' 

import { useMutation } from '@apollo/client'

import AuthContext from '../context/AuthContext'
// import { useForm } from '../util/FormCallback'

import {REGISTER_USER} from '../graphql/userQueries'
import { toast } from 'react-hot-toast'

function Register() {

    const {login} = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    
    // const onChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: name === 'username' ? value.toLowerCase() : value
        })
    }

   
    const [register, { loading }] = useMutation(REGISTER_USER, {
        onCompleted: (data) => {

            const token = data.register.token
            login(token)
            // Navigate to home 
            navigate('/')
            toast.success("Registration successful!")
          },
          onError(error) {
            if (error && error.graphQLErrors && error.graphQLErrors.length > 0) {
                toast.error("Registration error!")

                const message = error.graphQLErrors[0].extensions.errors;
                // console.error('GraphQL Error:', message);
                setErrors({ form: message });
              } else {
                // console.error('Error:', error.message);
                setErrors({ form: error.message });
              }
          },
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await register({
                variables: formData
            })
        } catch (error) {
            toast.error(error)
        }
    }

    // if(error) console.log(error)

  return (
    <div className='flex md:px-24 px-6  font-quicksand'>
       
        <div className="md:mt-0 mt-4 w-full">
            {loading ? (
                <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />
            ): (
                <div className="container py-8">
                    <div className="md:w-96 mx-auto bg-gray-200 rounded shadow">

                        <div className="md:mx-16 py-4 px-8 text-black text-xl text-center font-bold border-b border-grey-500">Quotee Regstration</div>

                        <form onSubmit={handleSubmit}>
                            <div className="py-4 px-8">
                                <div className="mb-4">
                                    <label className="block text-gray-800 text-sm font-bold mb-2">Name:</label>
                                    <input 
                                        className="border rounded w-full py-2 px-3 text-gray-800" 
                                        type="text"
                                        name="name" 
                                        value={formData.name}
                                        // error={errors.name ? true : false}
                                        onChange={onChange}
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-800 text-sm font-bold mb-2">Email:</label>
                                    <input 
                                        className="border rounded w-full py-2 px-3 text-gray-800" 
                                        type="email"
                                        name="email" 
                                        value={formData.email}
                                        // error={errors.email ? true : false}
                                        onChange={onChange}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-800 text-sm font-bold mb-2">Username:</label>
                                    <input 
                                        className=" border rounded w-full py-2 px-3 text-gray-800" 
                                        type="text"
                                        name="username" 
                                        value={formData.username}
                                        // error={errors.username ? true : false}
                                        onChange={onChange}
                                        placeholder="Username" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-800 text-sm font-bold mb-2">Password:</label>
                                    <input 
                                        className=" border rounded w-full py-2 px-3 text-gray-800" 
                                        type="password"
                                        name="password" 
                                        value={formData.password}
                                        // error={errors.password ? true : false}
                                        onChange={onChange}
                                        placeholder="password" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-800 text-sm font-bold mb-2">Confirm Password:</label>
                                    <input 
                                        className=" border rounded w-full py-2 px-3 text-gray-800" 
                                        type="password"
                                        name="confirmPassword" 
                                        value={formData.confirmPassword}
                                        // error={errors.confirmPassword ? true : false}
                                        onChange={onChange}
                                        placeholder="Confirm Password" 
                                    />
                                </div>
                                {/* Button  */}
                                <div className="mb-4 flex justify-center">
                                    <button 
                                        disabled={loading}
                                        type='submit' className="mb-2 mx-16 rounded-md py-2 px-24 bg-lime-400 hover:bg-lime-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Errors */}
                        <div>
                            {Object.keys(errors).length > 0 && (
                                <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mt-2">
                                    <ul className="list-disc ml-5">
                                        {Object.entries(errors).map(([key, value]) => (
                                            <li key={key}>
                                            {typeof value === "object" ? (
                                              <ul className="list-disc ml-5">
                                                {Object.values(value).map((subValue) => (
                                                  <li key={subValue}>{subValue}</li>
                                                ))}
                                              </ul>
                                            ) : (
                                              value
                                            )}
                                          </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            )}
        </div>
        
    </div>
  )
}

export default Register
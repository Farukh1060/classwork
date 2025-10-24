import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { LogInUser, LogOutUser, UserRegister } from '../features/user/UserSlice';

const Navbar = () => {
  
  const dispatch = useDispatch()


  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopuplogin, setShowPopuplogin] = useState(false);
  const [user,setuser]=useState({})
  
  const {userdetail} = useSelector((state)=>{return state.user})
  console.log(userdetail.user);
  
  
  const getuserdata = (e)=>{
    setuser({...user,[e.target.name]:e.target.value})
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
   

    dispatch(UserRegister(user))
    setShowPopup(false);
  };

  const handleSubmitlogin = (e) => {
    e.preventDefault();
   

    dispatch(LogInUser(user))
    setShowPopup(false);
  };

  return (
    <nav className="bg-orange-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-1.5 flex-shrink-0 text-xl font-bold text-orange-400">
            <img src={logo} alt="logo" className='w-auto h-10' />
            <p>Shopy</p>
          </div>

          {/* Center nav links (desktop only) */}
          {/* <div className="hidden md:flex space-x-7">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
          </div> */}

          {/* Right side: Search + Login (desktop only) */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {userdetail.user? <button className="bg-orange-400  text-white px-4 py-1.5 rounded-full hover:bg-orange-300 transition" onClick={()=>dispatch(LogOutUser())}>
              LogOut
            </button>:<button className="bg-orange-400  text-white px-4 py-1.5 rounded-full hover:bg-orange-300 transition"  onClick={() => setShowPopuplogin(true)}>
              LogIn
            </button>}
            
            {showPopuplogin && (
              <div className=" absolute top-[70px] right-0 bg-opacity-80  z-100">
                <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
                  <h2 className="text-xl font-semibold mb-4 text-center">User LogIn</h2>

                  <form onSubmit={handleSubmitlogin} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Username"
                      name='username'
                      onChange={getuserdata}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                   
                    <input
                      type="password"
                      placeholder="Password"
                      name='password'
                      onChange={getuserdata}
                      autoComplete='false'
                      className="w-full border px-3 py-2 rounded"
                      required
                    />

                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                        onClick={() => setShowPopuplogin(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-orange-400 text-white px-4 py-1.5 rounded hover:bg-orange-300"
                      >
                        LogIn
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <button className="bg-orange-400  text-white px-4 py-1.5 rounded-full hover:bg-orange-300 transition"  onClick={() => setShowPopup(true)}>
              SignUp
            </button>
            {showPopup && (
              <div className=" absolute top-[70px] right-0 bg-opacity-80  z-100">
                <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
                  <h2 className="text-xl font-semibold mb-4 text-center">User Register</h2>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      name='username'
                      placeholder="Username"
                      className="w-full border px-3 py-2 rounded"
                      onChange={getuserdata}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name='email'
                      onChange={getuserdata}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name='password'
                      onChange={getuserdata}
                      autoComplete='false'
                      className="w-full border px-3 py-2 rounded"
                      required
                    />

                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                        onClick={() => setShowPopup(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-orange-400 text-white px-4 py-1.5 rounded hover:bg-orange-300"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <Link to={"/cart"} className=" bg-orange-400  text-white px-4 py-2 rounded-full hover:bg-orange-300 transition">
            cart
          </Link>
          <p>{userdetail.user? `welcome ${userdetail.user}`:'welcome guest'}</p>

          </div>

          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-3 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => setShowPopuplogin(true)}>
            Login
          </button>
            {showPopuplogin && (
              <div className=" absolute top-[70px] right-0 bg-opacity-80  z-100">
                <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
                  <h2 className="text-xl font-semibold mb-4 text-center">User LogIn</h2>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                    
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border px-3 py-2 rounded"
                      required
                    />

                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                        onClick={() => setShowPopup(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-orange-400 text-white px-4 py-1.5 rounded hover:bg-orange-300"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"  onClick={() => setShowPopup(true)}>
            SignUp
          </button>
          {showPopup && (
              <div className=" absolute top-[70px] right-0 bg-opacity-80  z-100">
                <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
                  <h2 className="text-xl font-semibold mb-4 text-center">User Register</h2>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border px-3 py-2 rounded"
                      required
                    />

                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                        onClick={() => setShowPopup(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-orange-400 text-white px-4 py-1.5 rounded hover:bg-orange-300"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            cart
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

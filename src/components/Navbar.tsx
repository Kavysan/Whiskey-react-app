import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
  
    const signOutOnClick = () => {
      signOut(auth)
      location.reload();
    }
  
    const signInOnClick = async () => {
      const response = await signInWithPopup(auth, provider);
      if ( response.user ) {
          location.reload();
      }
    }
  
    const dropDown = () => {
      setIsVisible(!isVisible)
    }
  
    const clicked = () => {
      setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-richblack p-6'>
            <div className='flex items-center flex-shrink-0 hover:text-brownsugar  text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight '>MY CAR COLLECTION</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white border rounded border-white hover:text-brownsugar hover:border-brownsugar'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className='p-3 m-5  justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-brownsugar mr-4'>
                                Home
                            </Link>
                        </div>

                    </button>
                    <button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-brownsugar mr-4'>
                                About
                            </Link>
                        </div>

                    </button>
                    <button className='p-3 m-5  justify-center'>
                        <div>
                            <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-brownsugar mr-4'>
                                Dashboard
                            </Link>
                        </div>

                    </button>
                    {
                        !auth.currentUser ?

                        <button className='p-3 m-5  justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-white hover:text-brownsugar">
                                    Login
                                </Link>
                            </div>
                        </button>
                        :
                        <button className='p-3 m-5 justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-white hover:text-brownsugar">
                                    Sign Out
                                </Link>
                            </div>
                        </button>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar
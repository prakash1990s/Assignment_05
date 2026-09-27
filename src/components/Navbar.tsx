import "./Navbar.css";
import logo from '../assets/logo-text.png'

const Navbar = () => {
    
    return (
        <nav className='bg-white-100 text-black' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
         <div className='container mx-auto flex justify-between items-center py-4    px-6 bg-#ffffff text-gray-100'>
            <div>
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div>
            <ul className='container mx-auto flex justify-between items-center py-4 gap-6   px-6 bg-#ffffff text-black'>
                
                <li className='text-red-500'><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>




            </div>
            <div className='flex gap-4'>


            <button className='text-red-950'>Sign In</button>
        
            <button className='text-white p-2 m-0.5 rounded-4xl border-radius-2px bg-pink-500'>Sign Up</button>




        </div>
        </div>
            
            
            
        </nav>
    );
};

export default Navbar;


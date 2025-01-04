
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const MainLayout = () => {
    return (
        <div className='font-poppins overflow-hidden'> 
            <div className="fixed top-0 -z-10 h-full w-full">
                <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            {/* Navbar */}
            
            <Navbar />

            {/* Dynamic section */}

            <div className='min-h-[calc(100vh-232px)] mx-auto px-12 py-12'>
                
                 <Outlet />
                
            </div>
                 
            <Footer />
            {/* footer */}
            {/* <ToastContainer /> */}
        </div>
    );
};

export default MainLayout;
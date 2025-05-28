import post1 from "../../assets/post1.jpg"
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
   <>
    <section
           id="home"
           className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
           style={{
             backgroundImage: `url(${post1})`,
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             backgroundAttachment: 'fixed',
             backgroundBlendMode: 'overlay',
             backgroundColor: 'rgba(0, 0, 0, 0.5)',
             height: '90vh',
             backgroundPosition: 'center',
           }}
         >
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
           <div className="relative text-center text-white" style={{
             paddingLeft: '1rem',
             paddingRight: '1rem',
             marginTop: '3rem' // shifts all content downward
           }}>
             <h2 className="text-4xl font-bold" style={{ marginBottom: '1rem' }}>Welcome to Our Fashion Blog</h2>
             <p className="text-xl" style={{ margintop: '1.5rem' }}>Stay ahead with the latest trends, styling tips, and exclusive insights from the fashion world.</p>
             <Link to="/Categories"><a
               className="bg-blue-700 rounded-md inline-block text-white transition-transform duration-300 hover:bg-blue-800 hover:scale-105"
               style={{ padding: '0.75rem 1.5rem', marginTop: '2rem' }}
             >
               Explore Now
             </a></Link>
           </div>
         </section>
   
   </>     
  )
}

export default Slider

 
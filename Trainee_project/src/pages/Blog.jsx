import React from 'react';
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.webp";
import post4 from "../assets/post4.jpg";
import post5 from "../assets/post5.avif";
import post6 from "../assets/post6.jpg";
import p1 from "../assets/p1.webp";
import side from "../assets/side.jpg";


const blogImages = [p1, post2, post3, post4, post5, post6];


const Blog = () => {
    return (
        <div className="font-sans bg-gray-100 text-gray-800">

            {/* Hero */}
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
                    <a
                        href="#posts"
                        className="bg-blue-700 rounded-md inline-block text-white transition-transform duration-300 hover:bg-blue-800 hover:scale-105"
                        style={{ padding: '0.75rem 1.5rem', marginTop: '2rem' }}
                    >
                        Explore Now
                    </a>
                </div>
            </section>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12 max-w-7xl mx-auto" />

            {/* Main Content Grid */}
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8"
                style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '4rem', paddingBottom: '4rem' }}
            >

                {/* Sidebar */}
                <aside className="lg:col-span-1 bg-white rounded-lg shadow" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                    {/* Sidebar Image */}
                    <img
                        src={side}
                        alt="Sidebar visual"
                        className=" h-48 object-cover object-top "
                    />

                    {/* Categories Section */}
                    <h3 className="text-2xl font-semibold" style={{ marginBottom: '1rem' }}>Categories</h3>
                    <ul className="space-y-2 text-blue-600 mb-6">
                        <li><a href="#">Seasonal Trends</a></li>
                        <li><a href="#">Sustainable Fashion</a></li>
                        <li><a href="#">Styling Tips</a></li>
                        <li><a href="#">Behind the Scenes</a></li>
                    </ul>

                    {/* Social Media Links */}
                    <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                        <h4 className="text-lg font-semibold" style={{ marginBottom: '1rem' }}>Follow Us</h4>
                        <ul className="flex flex-col space-y-4 items-center gap-2">
                            <li>
                                <a
                                    href="#"
                                    className="blog-facebook text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                    style={{
                                        padding: '0.75rem 2rem',
                                        borderRadius: '9999px',
                                        border: '2px solid #3b5998',
                                        display: 'inline-block',

                                    }}
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                                    style={{
                                        padding: '0.75rem 2rem',
                                        borderRadius: '9999px',
                                        border: '2px solid #1da1f2',
                                        display: 'inline-block',
                                    }}
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                                    style={{
                                        padding: '0.75rem 2rem',
                                        borderRadius: '9999px',
                                        border: '2px solid #e1306c',
                                        display: 'inline-block',
                                    }}
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h5
                        className="text-2xl font-semibold text-gray-800"
                        style={{
                            marginTop: '3rem',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                            borderTop: '4px solid #4CAF50',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            fontSize: "17px",
                            textAlign: "center"
                        }}
                    >
                        Popular Posts
                    </h5>
                    <ul className="space-y-4 text-gray-700 flex flex-col gap-3" style={{ marginTop: "30px" }}>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 transition-colors duration-200"
                                style={{ fontSize: '16px', fontWeight: '500' }}
                            >
                                How to Build a Capsule
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 transition-colors duration-200"
                                style={{ fontSize: '16px', fontWeight: '500' }}
                            >
                                Top 5 Sustainable Fabrics
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 transition-colors duration-200"
                                style={{ fontSize: '16px', fontWeight: '500' }}
                            >
                                Styling Tips for the Fall
                            </a>
                        </li>
                    </ul>
                </aside>




                {/* Blog Posts */}
                <main className="lg:col-span-3">
                    <h3
                        id="posts"
                        className="text-4xl font-bold text-center mb-12"
                        style={{ paddingTop: '2rem', paddingBottom: '3rem' }}
                    >
                        Latest Fashion Insights
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogImages.map((image, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-[1.03]"
                                style={{
                                    paddingTop: '1rem',
                                    paddingBottom: '1rem',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                }}
                            >
                                <div
                                    className="image-container"
                                    style={{
                                        paddingBottom: '1rem',
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`Fashion Post ${i + 1}`}
                                        className="w-full h-48 object-cover object-top rounded mb-4"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold mb-2">
                                    {[
                                        'The Timeless Appeal of Trench Coats',
                                        'The Versatility of White Button-Down Shirts',
                                        'Stylist Shirts: From Day to Night',
                                        'Girls Tops: Effortless Elegance',
                                        'Floral Prints: Embracing the Bloom',
                                        'Leather Jackets: A Bold Statement Piece',
                                    ][i]}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    {[
                                        'Explore how trench coats have remained a classic choice for layering, offering both style and functionality.',
                                        'Understand the timeless nature of white button-down shirts and how they can be dressed up or down.',
                                        'Learn about the enduring popularity of denim jackets and how they can be paired with almost any outfit.',
                                        'Discover the versatility of girls tops, perfect for various occasions and easily styled for day or evening wear.',
                                        'Dive into the world of floral prints and how they add a touch of femininity and freshness to your wardrobe.',
                                        'Find out how leather jackets can elevate any outfit, adding an edgy yet chic vibe.',
                                    ][i]}
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline transition-transform duration-300 hover:scale-105"
                                >
                                    Read more
                                </a>
                            </div>
                        ))}
                    </div>
                </main>







            </div>

            {/* Divider */}
            <hr className="border-t border-gray-300 my-12 max-w-7xl mx-auto" />

            {/* Testimonials */}
            <section className="bg-blue-50" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="max-w-5xl mx-auto text-center" style={{ paddingLeft: '4rem', paddingRight: '1.5rem' }}>
                    <h3 className="text-3xl font-bold mb-12" style={{ paddingBottom: '2rem' }}>What Our Clients Say</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8" >
                        {[
                            {
                                name: 'Shanky',
                                feedback: 'Fantastic experience. Highly recommend!',
                                role: 'Fashion Enthusiast',
                                location: 'Jodhpur, India',
                            },
                            {
                                name: 'Kia',
                                feedback: 'It transformed my wardrobe. Stylish and sustainable!',
                                role: 'Designer',
                                location: 'Jaipur, India',
                            },
                            {
                                name: 'Akaay',
                                feedback: 'Exceptional service and quality. It is my go-to!',
                                role: 'Entrepreneur',
                                location: 'Udaipur, India',
                            },

                        ].map((client, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto"
                                style={{ padding: "20px 10px" }}
                            >
                                <p className="italic text-gray-700 mb-4">"{client.feedback}"</p>
                                <p className="font-semibold text-lg text-gray-800">{client.name}</p>
                                <p className="text-sm text-gray-500">{client.role}</p>
                                <p className="text-xs text-gray-400">{client.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Newsletter Subscription */}
            <section
                className="bg-gray-50 flex justify-center items-center"
                style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
            >
                <div
                    className="w-full max-w-3xl text-center"
                    style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
                >
                    <h3 className="text-sm tracking-widest text-gray-600 uppercase mb-8 font-semibold" style={{ letterSpacing: '0.1rem', paddingBottom: '1rem' }}>
                        Join Our Fashion Community
                        Get offers & discounts by subscribing us
                    </h3>

                    <form
                        className="w-full flex flex-col sm:flex-row justify-center items-center"
                        style={{ gap: '1.5rem' }}
                    >
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            required
                            aria-label="Email Address"
                            className="border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition w-full sm:w-auto"
                            style={{
                                padding: '0.75rem 1.25rem',
                                width: '100%',
                                maxWidth: '400px',
                            }}
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white uppercase font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap"
                            style={{
                                padding: '0.75rem 2rem',
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Blog;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import i1 from '../Images/i1.png';
import i2 from '../Images/i2.png';
import i3 from '../Images/i3.png';
import i4 from '../Images/i3.png';
import i5 from '../Images/i3.png'; 
import i6 from '../Images/i3.png'; 

const images = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    const welcomeTimer = setTimeout(() => {
      setShowWelcomeText(false);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  useEffect(() => {
    imageRef.current.src = images[currentImage];
  }, [currentImage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <section className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            ref={imageRef}
            alt={`St. John College of Engineering - Slide ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          {showWelcomeText && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                Welcome to St. John College of Engineering
              </h1>
            </div>
          )}
        </div>
      </section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-lg mb-4">
                At SJCEM, we believe in holistic development of our students. Apart from academic excellence, we also focus on building skills such as leadership, teamwork, and communication. Our state-of-the-art infrastructure and experienced faculty ensure that our students receive the best education possible. Furthermore, our location in the rural and tribal area of Palghar District near Mumbai provides a unique learning environment that is away from the hustle and bustle of the city. Our focus on sustainability and social responsibility also sets us apart from other institutions.
                </p>
                <Link to="/about" className="text-blue-600 hover:underline">Learn more about us</Link>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Civil', 'AIML', 'Mechanical', 'Computer', 'IT'].map((dept, index) => (
                        <motion.div
                            key={dept}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{dept} Engineering</h3>
                            <p className="mb-4">Discover cutting-edge research and innovative projects in our {dept} department.</p>
                            <Link to={`/departments/${dept.toLowerCase()}`} className="text-blue-600 hover:underline">
                                Explore {dept} Department
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">Latest Achievements</h2>
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">National Robotics Competition Winners</h3>
                    <p className="mb-4">Our students secured first place in the Annual National Robotics Competition, showcasing their innovative designs and programming skills.</p>
                    <Link to="/achievements" className="text-blue-600 hover:underline">View all achievements</Link>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">TechFest 2024</h3>
                    <p className="mb-4">Join us for our annual technology festival featuring workshops, competitions, and guest lectures from industry experts.</p>
                    <Link to="/techfest" className="text-blue-600 hover:underline">Learn more about TechFest</Link>
                </div>
            </motion.section>
        </motion.div>
    );
}

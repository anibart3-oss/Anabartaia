import { motion } from 'framer-motion';
import React from 'react';

const PortfolioHomepage = () => {
    return (
        <div>
            {/* Hero Section */}
            <motion.div 
                className="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my projects, skills, and experiences.</p>
            </motion.div>

            {/* Projects Section */}
            <motion.div 
                className="projects"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>My Projects</h2>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </motion.div>

            {/* About Section */}
            <motion.div 
                className="about"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>About Me</h2>
                <p>I am a passionate developer with experience in React and web development.</p>
            </motion.div>
        </div>
    );
};

export default PortfolioHomepage;
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const words = ['Efficient', 'Faster', 'Easier'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container text-left">
            <h1 className="text-4xl font-bold mb-4 tracking-wider">Let's Make Learning</h1>
            <p className="text-lg mb-4">
                <span className="text-4xl font-bold mb-4 tracking-wider">More </span>
                <span className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-purple-600 ">{words[currentWordIndex]}</span>

            </p>
        </div>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/study-stress.json';

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
        <>
            <div className="container text-left">
                <h1 className="text-4xl font-bold mb-4 tracking-wider">Let's Make Learning</h1>
                <p className="text-lg mb-4">
                    <span className="text-4xl font-bold mb-4 tracking-wider">More </span>
                    <span className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-purple-600 animate-translate">
                        {words[currentWordIndex]}
                    </span>

                </p>

            </div>

            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData.default,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={400}
                width={400}
            />

            <p className='text-center ml-32 mr-32 leading-loose'>
                Our web application provides a multifaceted solution to the aforementioned challenges. Users can upload PDF documents or specify topics they wish to study. The platform then extracts relevant information and presents it in an interactive format, utilizing multimedia elements such as videos, animations, and interactive diagrams. Users can navigate through the content at their own pace, gaining a deeper understanding of complex topics through hands-on exploration.
            </p>


        </>
    );
};



export default Hero;


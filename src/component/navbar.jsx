import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg sticky top-0 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600">Test Tame</span>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

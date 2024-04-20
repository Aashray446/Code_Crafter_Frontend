import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-lg font-bold text-gray-800">Test Tame</span>
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;

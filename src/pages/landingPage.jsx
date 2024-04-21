
import Hero from '../component/hero'
import Navbar from '../component/navbar'
import PdfInput from '../component/pdfInput'
import React from 'react'
import { useState } from 'react'
import '../App.css'


function LandingPage() {
    const [isloading, setisloading] = React.useState(false);
    return (
        <div className='container-fluid'>
            <Navbar></Navbar>

            <div className="flex m-4 h-screen"> {/* Change h-full to h-screen */}
                <div className="w-3/5">
                    <div className='container mt-8 ms-8'>
                        <Hero>  </Hero>
                    </div>
                </div>

                <div className="w-2/5 border-s-2 h-full ">
                    <div className="flex justify-center items-center h-full p-4 w-full">
                        <div className="flex items-center justify-center h-full w-full color-black">
                            <PdfInput isLoading={setisloading} ></PdfInput> {/* PdfInput component */}
                        </div>
                    </div>
                </div>
            </div>
            {
                isloading ? <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div class="loader"></div>
                </div> : ""
            }

        </div>
    )
}

export default LandingPage

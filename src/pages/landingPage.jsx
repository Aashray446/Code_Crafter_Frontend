
import Hero from '../component/hero'
import Navbar from '../component/navbar'
import PdfInput from '../component/pdfInput'
import '../App.css'


function LandingPage() {
    return (
        <>
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
                            <PdfInput></PdfInput> {/* PdfInput component */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage

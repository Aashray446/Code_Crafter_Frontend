import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const PdfInput = ({ isLoading }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        isLoading(true)
        // You can now do whatever you want with the selected file
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            const respones = await axios.post('http://localhost:8000/upload', formData)
            if (respones.data) {

                console.log(respones.data);
                isLoading(false)
                navigate('/result', { state: { data: respones.data } });
            }
            else {
                console.log('Error in uploading file', respones.error);
            }
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="h-full w-full m-2">
            <h1 className="mb-5 flex justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600">Upload Your Study Material</h1>
            <div className="w-full h-1/2">

                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >

                    <div className="flex flex-col items-center justify-center pt-5 pb-6">

                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF MAX 10 PAGES</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </label>
            </div>
            <Link to="/result">
                <button className='w-full mt-4 btn btn-primary' onClick={handleSubmit} >GET STARTED</button></Link>
        </div>

    );
};

export default PdfInput;

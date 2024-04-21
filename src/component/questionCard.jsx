import React from 'react';

const QuestionCard = ({ question, options, type, answer }) => {
    return (
        type === "MCQ" ? (
            <div className="w-full mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">{question}</h2>
                    <ul>

                        {
                            Object.keys(options).map((option, index) => {
                                return (
                                    <li key={index} className="flex items-center py-2">
                                        <input type="radio" value={option} id={`option${index}`} name="options" className="mr-2" onChange={
                                            (e) => {

                                                e.target.value === answer ? window.alert('Correct Answer') : window.alert('Wrong Answer')
                                            }

                                        } />
                                        <label htmlFor={`option${index}`}>{options[option]}</label>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        ) : (
            <div className="w-full mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">{question}</h2>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
            </div>
        ));
}

export default QuestionCard;

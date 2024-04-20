import React from 'react';

const QuestionCard = ({ question, options, type }) => {
    return (
        type === "MCQ" ? (
            <div className="w-full mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">{question}</h2>
                    <ul>
                        {options.map((option, index) => (
                            <li key={index} className="flex items-center py-2">
                                <input type="radio" id={`option${index}`} name="options" className="mr-2" />
                                <label htmlFor={`option${index}`}>{option}</label>
                            </li>
                        ))}
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

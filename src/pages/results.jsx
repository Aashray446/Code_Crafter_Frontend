import React from "react"
import LeftBar from "../component/leftBar"
import Navbar from "../component/navbar"
import QuestionCard from "../component/questionCard";
function Results() {
    const q1 = {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        type: "MCQ"
    }

    const Questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Rome'],
            type: "MCQ"
        },
        {
            question: 'What is the capital of France?',
            option: [""],
            type: "Input"
        }
    ]


    return (
        <div className="w-full">
            <Navbar></Navbar>
            <div className=" flex flex-row h-screen ml-4 overflow-hidden">
                <div className="w-1/2 h-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-x-hidden">
                    <LeftBar></LeftBar>
                </div>
                <div className="w-2/3 h-full p-8">
                    <h3 className="text-lg mb-8">Quiz</h3>
                    <div className="flex flex-col space-y-4">
                        {
                            Questions.map((question, index) => {
                                return <QuestionCard question={question.question} options={question.options} type={question.type}></QuestionCard>
                            })
                        }
                        <button className="btn btn-primary relative bottom-0 w-full">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Results
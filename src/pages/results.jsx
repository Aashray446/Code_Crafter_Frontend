import React from "react"
import LeftBar from "../component/leftBar"
import Navbar from "../component/navbar"
import QuestionCard from "../component/questionCard";
import { useLocation } from "react-router-dom";

function Results() {
    const location = useLocation();
    const data = location.state;

    const [selectedTopic, setSelectedTopic] = React.useState([]);

    addTopic = (topic) => {
        setSelectedTopic([...selectedTopic, topic]);
    }

    const [question, setQuestion] = React.useState(null);
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <div className=" flex flex-row h-screen ml-4 overflow-hidden">
                <div className="w-1/2 h-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-x-hidden">
                    <LeftBar data={data.data.responses} ></LeftBar>
                </div>
                <div className="w-2/3 h-full p-8">

                    {question ? (
                        <>    <h3 className="text-lg mb-8">Quiz</h3>
                            <div className="flex flex-col space-y-4">
                                {
                                    question.map((question, index) => {
                                        return <QuestionCard question={question.question} options={question.options} type={question.type}></QuestionCard>
                                    })
                                }
                                <button className="btn btn-primary relative bottom-0 w-full">SUBMIT</button>
                            </div>
                        </>)
                        : <div className="flex justify-center h-full w-full">
                            <button className="btn btn-primary">Generate Question Based On Topic Selected</button>
                        </div>
                    }
                </div>
            </div>
        </div >

    )
}

export default Results
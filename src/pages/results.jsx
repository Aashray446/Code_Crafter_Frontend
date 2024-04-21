import React from "react"
import LeftBar from "../component/leftBar"
import Navbar from "../component/navbar"
import QuestionCard from "../component/questionCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Results() {
    const location = useLocation();
    const data = location.state;

    const [selectedTopic, setSelectedTopic] = React.useState([]);

    const [questions, setQuestions] = React.useState([]);

    const addTopic = (topic) => {

        if (selectedTopic.includes(topic)) {
            setSelectedTopic(selectedTopic.filter(item => item !== topic))
        }
        else {
            setSelectedTopic([...selectedTopic, topic])
        }
    }

    const generateQuestion = async () => {
        setisloading(true)
        const text = selectedTopic.join(',')
        const response = await axios.get('http://localhost:8001/generateQuestion?text=' + text)
        console.log(response.data.questions.questions)
        setQuestions(response.data.questions.questions)
        setisloading(false)
    }

    const [isloading, setisloading] = React.useState(false);

    return (
        <div className="w-full">
            <Navbar></Navbar>
            <div className=" flex flex-row h-screen ml-4 overflow-hidden">
                <div className="w-1/2 h-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-x-hidden">
                    <LeftBar topics={data.data.responses} onChange={addTopic} ></LeftBar>
                </div>
                <div className="w-2/3 h-full p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-x-hidden pb-32">

                    {questions.length > 0 ? (

                        <>
                            <div className="flex justify-center  w-full">
                                <button className="btn btn-primary" onClick={generateQuestion}>Regenerate Question</button>
                            </div>
                            <h3 className="text-lg mb-8">Test yourself</h3>
                            <div className="flex flex-col space-y-4">
                                {
                                    questions.map((question, index) => {
                                        return <QuestionCard question={question.question} options={question.options} type={question.type} answer={question.answer}></QuestionCard>
                                    })
                                }
                                <button className="btn btn-primary relative bottom-0 w-full">SUBMIT</button>
                            </div>
                        </>)
                        : <div className="flex justify-center h-full w-full">
                            <button className="btn btn-primary" onClick={generateQuestion}>Generate Question Based On Topic Selected</button>
                        </div>
                    }
                </div>
            </div>
            {
                isloading ? <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div class="loader"></div>
                </div> : ""
            }
        </div >

    )
}

export default Results
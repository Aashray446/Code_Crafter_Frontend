export default function Topics({ topics, onChange }) {
    console.log(topics.data);
    return (
        <div className="container m-4">
            <div className="mr-6">
                <h2 className="text-lg tracking-wider mb-8">Topics</h2>

                <ul className="menu bg-base-200 w-full rounded-box">
                    {
                        topics.data.map((topic, index) => {
                            return (
                                topic.topics ? (
                                    <li key={index}>
                                        <label className="cursor-pointer flex items-center">
                                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                            <a>{topic.topics[1].topicTitle}</a>
                                        </label>
                                        <ul>
                                            {
                                                topic.topics[0].subTopics.map((subTopic, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <label className="cursor-pointer flex items-center">
                                                                <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                                                <a>{subTopic}</a>
                                                            </label>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                ) :
                                    ""
                            )
                        })
                    }
                </ul>


            </div>



        </div>
    )
}
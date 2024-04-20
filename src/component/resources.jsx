const LinksComponent = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <ul>
                <li className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-md mr-2"></div>
                    <div>
                        <a href="#" className="text-blue-500 hover:underline">Link Title</a>
                        <p className="text-sm text-gray-600">Description of the link goes here.</p>
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-md mr-2"></div>
                    <div>
                        <a href="#" className="text-blue-500 hover:underline">Another Link</a>
                        <p className="text-sm text-gray-600">Description of another link goes here.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

// YouTube Component
const YouTubeComponent = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md ">
            <h2 className="text-lg font-semibold mb-2">YouTube Links</h2>
            <ul>
                <li className="flex items-center mb-4">
                    <img src="" alt="YouTube Thumbnail" className="w-10 h-10 rounded-md mr-2" />
                    <div>
                        <a href="#" className="text-blue-500 hover:underline">YouTube Video Title</a>
                        <p className="text-sm text-gray-600">Description of the YouTube video goes here.</p>
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <img src="" alt="YouTube Thumbnail" className="w-10 h-10 rounded-md mr-2" />
                    <div>
                        <a href="#" className="text-blue-500 hover:underline">Another YouTube Video</a>
                        <p className="text-sm text-gray-600">Description of another YouTube video goes here.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};


export default function linkLists() {
    return (
        // give list of 10 examples
        <div className="container">
            <h4 className="text-lg tracking-wider mb-8">Resources</h4>
            <LinksComponent></LinksComponent>
            <br />
            <YouTubeComponent></YouTubeComponent>
            <br />
            <LinksComponent></LinksComponent>
        </div>
    );
}


export { LinksComponent, YouTubeComponent };
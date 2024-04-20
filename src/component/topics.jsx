export default function Topics() {
    return (
        <div className="container m-4">
            <div className="mr-6">
                <h2 className="text-lg tracking-wider mb-8">Topics</h2>

                <ul className="menu bg-base-200 w-full rounded-box">
                    <li>
                        <label className="cursor-pointer flex items-center">
                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                            <a>Item 1</a>
                        </label>
                    </li>
                    <li>
                        <label className="cursor-pointer flex items-center">
                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                            <a>Parent</a>
                        </label>
                        <ul>
                            <li>
                                <label className="cursor-pointer flex items-center">
                                    <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                    <a>Submenu 1</a>
                                </label>
                            </li>
                            <li>
                                <label className="cursor-pointer flex items-center">
                                    <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                    <a>Submenu 2</a>
                                </label>
                            </li>
                            <li>
                                <label className="cursor-pointer flex items-center">
                                    <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                    <a>Parent</a>
                                </label>
                                <ul>
                                    <li>
                                        <label className="cursor-pointer flex items-center">
                                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                            <a>Submenu 1</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="cursor-pointer flex items-center">
                                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                                            <a>Submenu 2</a>
                                        </label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <label className="cursor-pointer flex items-center">
                            <input type="checkbox" className="checkbox checkbox-accent mr-2" />
                            <a>Item 3</a>
                        </label>
                    </li>
                </ul>

            </div>
        </div>
    )
}
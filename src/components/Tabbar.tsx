import React from 'react';

const Tabbar = () => {
    return (
        <div className="text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-36 font-semibold text-xl">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Mock</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">IELTS</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PTE</a>
                </li>
            </ul>
        </div>
    );
};

export default Tabbar;
import Link from 'next/link';
import React from 'react';
// import './BottomBar.css'; // Assuming you have a CSS file for styling

const BottomBar: React.FC = () => {
    return (
        <div className="fixed inset-x-0 bottom-0">
            <nav>
                <ul className="flex justify-around items-center bg-gray-200 p-4">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/dashboard">Today</Link>
                    <Link href="/dashboard">Stock</Link>
                </ul>
            </nav>
        </div>
    );
}

export default BottomBar;
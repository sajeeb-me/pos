import BottomBar from '@/components/BottomBar';
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24 font-mono'>
            <BottomBar/>
            <h1>Welcome to the Dashboard Page</h1>
        </div>
    );
}

export default DashboardPage;
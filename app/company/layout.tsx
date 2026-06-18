import Card from '@/components/card'
import React from 'react'

const CompanyLayout = ({children, team, notifications, metrics}: {children: React.ReactNode , team: React.ReactNode, notifications: React.ReactNode, metrics: React.ReactNode}) => {
  return (
         <div className='h-screen mx-4 my-4'>
        <div className='flex flex-row justify-center items-center border w-full h-full p-4 rounded-md gap-2'>
            <div className='border-2 rounded-md border-green-500 p-4 w-[50%] flex flex-col justify-start items-center gap-4'>
                <div>
                    <Card title={team} description='Our Team'/>
                </div>
                <div>
                    <Card title={metrics} description='Metrics'/>
                </div>
            </div>
            <div className='border-2 rounded-md border-red-500 p-4 w-[50%]'>
                <div>
                    <Card title={notifications} description='Notifications'/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompanyLayout
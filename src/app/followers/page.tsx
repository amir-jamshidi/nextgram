import { getFollowers } from '@/libs/requests'
import React from 'react'

const page = async () => {

    const followers = await getFollowers();
    if (!followers) return false;

    return (
        <div className='flex flex-col justify-center px-2'>
            {followers.map(follow => (
                <div className='flex justify-between py-2 items-center'>
                    <div className='flex items-center gap-x-2'>
                        <div className='w-12 h-12 rounded-full'>
                            <img src="../images/sam.jpg" className='rounded-full' alt="" />
                        </div>
                        <p className='text-gray-200 text-sm'>{follow.userID.username}</p>
                    </div>
                    <div>
                        <button className='bg-error rounded text-sm text-gray-200 px-2'>مسدود</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default page
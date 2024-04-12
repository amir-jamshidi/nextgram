import { getFollowing } from '@/libs/requests'
import React from 'react'

const page = async () => {
    const following = await getFollowing();
    if (!following) return;

    return (
        <div className='flex flex-col px-2 divide-y divide-gray-800'>
            {following.map(follow => (
                <div className='flex justify-between py-2 items-center'>
                    <div className='flex items-center gap-x-2'>
                        <div className='w-12 h-12 rounded-full'>
                            <img src="../images/sam.jpg" className='rounded-full' alt="" />
                        </div>
                        <p className='text-gray-200 text-sm'>{follow.followID.username}</p>
                    </div>
                    <div>
                        <button className='bg-color rounded text-sm text-gray-200 px-2'>لغو دنبال کردن</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default page
import PostItem from '@/Components/modules/PostItem/PostItem'
import { getMe } from '@/libs/requests'
import React from 'react'
import Navigation from './../../Components/modules/Navigation/Navigation';

const page = async () => {
    const data = await getMe();
    if (!data) return;

    const { followersCount, followingCount, myPosts, postsCount } = data

    return (
        <div className='mt-4'>
            <Navigation />
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center px-2'>
                    <div className='w-20 h-20 rounded-full'>
                        <img src="../images/sam.jpg" alt="" className='rounded-full' />
                    </div>
                    <p className='text-gray-200 mt-1.5 text-sm'>Amir</p>
                </div>
                <div className='flex mt-4 px-2'>
                    <div className='py-1 flex-1 border-l border-l-gray-800 flex flex-col justify-center items-center text-gray-300 gap-y-0.5'>
                        <p>دنبال کننده ها</p>
                        <p className='font-dana-bold'>{followersCount}</p>
                    </div>
                    <div className='py-1 flex-1 flex flex-col justify-center items-center text-gray-300 gap-y-0.5'>
                        <p>دنبال شونده ها</p>
                        <p className='font-dana-bold'>{followingCount}</p>
                    </div>
                    <div className='py-1 flex-1 border-r border-r-gray-800 flex flex-col justify-center items-center text-gray-300 gap-y-0.5'>
                        <p>تعداد پست ها</p>
                        <p className='font-dana-bold'>{postsCount}</p>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='bg-color rounded py-1 px-2 text-gray-200 text-sm'>ویرایش اطلاعات حساب من</button>
                </div>
                <div className='flex flex-col items-center justify-center mt-6'>
                    <p className='text-gray-300'>پست های من</p>
                    <div className='flex-1 flex flex-col gap-y-5 bg-gray-900 rounded-xl py-4'>
                        {myPosts.map(post => (
                            <PostItem post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
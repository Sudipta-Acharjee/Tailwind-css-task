import React from 'react';

const Content = () => {
    return (
        <div id="/menu">
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src="https://www.bakespace.com/images/large/f468b5f5247496b4f854e203bd46a7cd.jpeg" alt='egg' className='h-full rounded mb-20 shadow' />
                <div className="flex flex-col justify-center items-center">
                    <h2 className='text-2xl mb-2'>
                        Biriyani
                </h2>
                    <p className='mb-2'>Cripsy , delicious , and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src="https://static.toiimg.com/thumb/52702221.cms?imgsize=365440&width=800&height=800" alt='egg' className='h-full rounded mb-20 shadow' />
                <div className="flex flex-col justify-center items-center">
                    <h2 className='text-2xl mb-2'>
                        Mutton-Curry
                </h2>
                    <p className='mb-2'>Cripsy , delicious , and nutritious</p>
                    <span>$20</span>
                </div>
            </div>
        </div>
    )
}

export default Content;
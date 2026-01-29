import React from 'react'

const RightCardContent = (props) => {

    console.log(props.color);
    
    return (
        <div className='absolute top-0 left-0 h-full w-full p-4 lg:p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-lg lg:text-xl font-semibold rounded-full h-10 lg:h-12 w-10 lg:w-12 flex justify-center items-center flex-shrink-0'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-sm lg:text-xl leading-relaxed text-white mb-8 lg:mb-14 line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
                <div className='flex justify-between gap-2'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-4 lg:px-8 py-2 rounded-full text-sm lg:text-base whitespace-nowrap'>{props.tag}</button>
                    <button className='text-white font-medium px-2 lg:px-3 py-2 rounded-full flex-shrink-0'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
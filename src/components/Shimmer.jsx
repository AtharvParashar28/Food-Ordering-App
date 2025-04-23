import React from 'react';

const Shimmer = () =>{
  const divCount = 10; // Number of empty divs to render
  const divArray = Array.from({ length: divCount });

    return (
        <div className='flex gap-4 p-4'>   
        {
        divArray.map((a,index)=><div className="border bg-blue-100 w-[250px] h-[300px]" key={index}></div>)
        }
        </div>
)
}

export default Shimmer;
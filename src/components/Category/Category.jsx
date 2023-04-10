import React from 'react';

const Category = ({category}) => {
    const {category_logo, category_name, jobs_available} = category
    return (
        <div className='w-[270px] h-[180px] bg-custom-color pt-10 pl-10 my-2 md:my-0'>
            <img className='w-[50px] h-[50px] bg-custom-color p-2 rounded-lg mb-4' src={category_logo} alt="" />
            <h4 className='text-dark-02 font-extrabold text-xl my-1'>{category_name}</h4>
            <p className='text-dark-04 text-[16px] font-medium'>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Category;
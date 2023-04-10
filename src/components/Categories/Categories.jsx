import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-dark-01 font-extrabold text-4xl text-center'>Job Category List</h1>
            <p className='text-dark-03 font-medium text-[16px] text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex flex-wrap lg:flex-nowrap justify-between m-6'>
                {
                     categories.map((category, index) => <Category category={category} key={index}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
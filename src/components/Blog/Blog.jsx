import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="questions">
            <h5 className='font-bold text-xl'>1. When should you use context API?</h5>
            <p>We should use Context API in React when we have data that needs to be shared across multiple components without the use props</p>
            <h5 className='font-bold text-xl'>2. What is a custom hook?</h5>
            <p>In React, a custom hook is a special JavaScript function(such as useState, useEffect, and useContext.) that allows you to extract reusable logic from components and share it across your application.</p>
            <h5 className='font-bold text-xl'>3. What is useRef?</h5>
            <p>useRef is a feature in React that accepts one argument as the initial value and returns a reference and it's not needed for rendering. And it's allows to directly create a reference to the DOM element in the functional component. </p>
            <h5 className='font-bold text-xl'>4. What is useMemo?</h5>
            <p>useMemo is a built-in hook in React that allows you to memoize a value or a function, which means we try to avoid the unnecessary re-rendering of components and props in our program.</p>
        </div>
    );
};

export default Blog;
import React from 'react';
import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
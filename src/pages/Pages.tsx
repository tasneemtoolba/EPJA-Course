import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { getNavigationsValue, getNavigations } from '@ijl/cli';

function Pages() {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path={getNavigationsValue('cuisine.root')} element={<Home />} />
                <Route path={getNavigationsValue('cuisine.cuisine')} element={<Cuisine />} />
                <Route path={getNavigationsValue('cuisine.search')} element={<Searched />} />
                <Route path={getNavigationsValue('cuisine.recipe')} element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
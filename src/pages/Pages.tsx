import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { getNavigationsValue } from '@ijl/cli';

function Pages() {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path={getNavigationsValue('meal-assist.root')} element={<Home />} />
                <Route path={getNavigationsValue('meal-assist.cuisine')} element={<Cuisine />} />
                <Route path={getNavigationsValue('meal-assist.search')} element={<Searched />} />
                <Route path={getNavigationsValue('meal-assist.recipe')} element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
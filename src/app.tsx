import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { getNavigationsValue } from '@ijl/cli';

// import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <GiKnifeFork />
                <Logo to={'/'}>Delicious</Logo>        
                <Search />
                <Category />
                <Pages />         
            </BrowserRouter>

        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
    /* padding: 4rem 0rem; */
    padding: 4rem 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* div {
        display: flex;
        flex-flow: nowrap;
        margin-right: 1rem;
    } */
    svg {
        font-size: 2rem;
    }
`;

export default App;
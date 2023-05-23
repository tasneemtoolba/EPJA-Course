import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([]);
    let params = useParams();
    let API_KEY = "3e8aeb823e4e49779d8a4b138730ce12";
    const getSearchedRecipe = async (name) => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=9&query=${name}`
        );
        const recipe = await api.json();
        console.log(recipe);
        setSearchedRecipe(recipe.results);
    };

    useEffect(() => {
        getSearchedRecipe(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipe.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={`/meal-assist/recipe/${item.id}`}>
                            <img src={item.image} alt='' />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;
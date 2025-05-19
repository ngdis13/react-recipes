import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';

import { Preloader } from '../components/Preloader';
import MealList from '../components/MealList';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name.slice(1, name.length))
            .then((data) => {
                if (data && data.meals) {
                    setMeals(data.meals);
                } else {
                    console.warn('No meals data received for category:', name);
                    setMeals([]);
                }
            })
            .catch((error) => {
                console.error('Error fetching meals for category:', name, error);
                setMeals([]);
            });
    }, [name]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export default Category;

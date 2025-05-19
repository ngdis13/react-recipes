import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Meal(props){
    const {strMeal, idMeal, strMealThumb} = props;
    
    return (
        <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal}/>
        </div>
        <div className="card-content">
            <span className="card-title meal-title">{strMeal}</span>
        </div>
        <div className="card-action">
          <Link to={`/meal/${idMeal}`} className="btn">Watch recipe</Link>
        </div>
      </div>
    )
}

export default Meal;
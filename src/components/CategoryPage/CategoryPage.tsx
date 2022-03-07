import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getApi } from '../../services/api';
import { API_CATEGORIES_QUERY, API_URL } from '../../constants/constants';
import Card from "../Card/Card";
import Categories from "../Categories/Categories";
import { useSelector } from 'react-redux';


type State = {
    favorite: {
        favs: Array<object>
    }
}

const CategoryPage = () => {

    const [categoryJokes, setCategoryJokes] = useState(null);
    const [error, setError] = useState(false);

    const  {categoryName} = useParams();

    const url = API_URL+API_CATEGORIES_QUERY+categoryName;
  
    const getCategoryJokes = async () => {
        const resCategoryJokes = await getApi(url);
        resCategoryJokes ?  setCategoryJokes(resCategoryJokes) : setError(!resCategoryJokes);
    
    }
    const [isFavorite, setIsFavorite] = useState(false)
    const storeDate : any = useSelector((state : State) => state.favorite.favs);


    useEffect(() => {
        getCategoryJokes()
        let isFav : any = storeDate.some((item: any) => item.id === storeDate?.id)
        setIsFavorite(isFav)
    }, [categoryName]);
  

    return (
        <div className='container'>
            <Card
                jokes={categoryJokes}
                error={error}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
            />
            <Categories/>
        </div>
           
       
    );
};

export default CategoryPage;
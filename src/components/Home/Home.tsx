import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/constants';
import { getApi } from '../../services/api';
import Card from '../Card/Card';
import Categories from '../Categories/Categories';
import { useSelector } from "react-redux";




const Home = () => {
    const [jokes, setJokes] = useState(null);
    const [error, setError] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false)



    const getJokes = async () => {
        const resJokes = await getApi(API_URL);
        resJokes ?  setJokes(resJokes) : setError(!resJokes);
    }
    
    useEffect(() => {
        getJokes()
    }, []);



    return (
        <div className='container'>
            <Card
                error={error}
                jokes={jokes}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
            />
           <Categories/>
        </div>
    );
};

export default Home;
import ContentLoader from '../ContentLoader/ContentLoader';
import styles from './Card.module.css';
import {AiOutlineHeart } from 'react-icons/ai';
import {AiFillHeart } from 'react-icons/ai';
import { favoriteAddReducer, favoriteDeleteReducer } from '../../store/features/favorite/favoriteSlice';
import { useDispatch } from 'react-redux';



type CardProps = {
    error?: boolean;
    jokes: {
        id: string;
        icon_url: string;
        value: string;
    } | null;
    isFavorite: boolean;
    setIsFavorite: Function;
};

const Card = ({error, jokes, isFavorite, setIsFavorite} : CardProps) => {

    const dispatch = useDispatch();

    const addFav = () =>{
        dispatch(favoriteAddReducer(jokes))
        setIsFavorite(true)
    }

    const deleteFav = () => {
        dispatch(favoriteDeleteReducer(jokes?.id))
        setIsFavorite(false)
    }

    return (
        <div className={styles.home_blok}>
        {
            !error ? (
                jokes ? (
                    <div className={styles.home_item}>
                        <div className={styles.favorite} >
                            {
                                isFavorite ? (
                                    <AiFillHeart
                                            size={30}
                                            color='#1390E5'
                                            onClick={deleteFav}
                                        />
                                     ) : (
                                    <AiOutlineHeart
                                        size={30}
                                        color='#1390E5'
                                        onClick={addFav}
                                    />
                                    )
                            }
                        </div>
                        <img src={jokes?.icon_url} alt="" />
                        <p>{jokes?.value}</p>
                    </div> 
                ) : <ContentLoader/> 
            ) : <p>Ошиба загрузки данных</p>
        }
    </div>
    );
};

export default Card;
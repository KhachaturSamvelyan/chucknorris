import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import { uid } from 'uid';
import { useState } from 'react';



const Favorites  = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const storeDate : any = useSelector((state : any) => state.favorite.favs);

    return (
        <div className='container'>
            <div className={styles.favorite_blok}>
                {
                    storeDate.map((e: any)=>{
                        return <Card 
                            key={uid()} 
                            jokes={e}
                            isFavorite={true}
                            setIsFavorite={setIsFavorite}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Favorites;
import styles from './Categories.module.css';
import { useEffect, useState } from 'react';
import { API_CATEGORIES } from '../../constants/constants';
import { getApi } from '../../services/api';
import { Link }  from 'react-router-dom';
import { uid } from 'uid';





const Categories = () => {

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const resCategories = await getApi(API_CATEGORIES);
        setCategories(resCategories)
    }
    
    useEffect(() => {
        getCategories()
    }, []);

    return (
        <div className={styles.category}>
            {
                categories.length > 0 ? (
                    <ul>
                        {categories.map((el) => {
                            return <li key={uid()}><Link to={`/category/${el}`}>{el}</Link></li>
                        })}
                    </ul>
                ) : false
            }
        </div>
    );
};

export default Categories;


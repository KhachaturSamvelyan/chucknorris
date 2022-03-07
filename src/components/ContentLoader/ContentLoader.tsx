import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContentLoader = () => {
  return (
    <>
        <Skeleton 
          count={8} 
          height={25}
        />
    </>
  );
};

export default ContentLoader;
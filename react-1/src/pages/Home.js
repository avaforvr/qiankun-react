import { Link } from 'react-router-dom';

function Home () {
    return (
        <div>
            Home 1 <Link to="/about">Go About 1</Link>
        </div>
    );
}

export default Home;

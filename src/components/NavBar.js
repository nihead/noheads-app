import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <div className='nav-bar'>
            <div className='nav-item'>
                <Link to={'/random-photo'}>Random Picture</Link>
            </div>

        </div>
    )
}
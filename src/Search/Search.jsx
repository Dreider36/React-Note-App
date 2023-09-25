import './Search.css';
import Loop from './../assets/loop.png';

function Search ({ handleSearchNote }) {
    return (
        <div className='SearchHolder'>
            <div className='MagnifierIconHolder'>
                <img src={Loop} width='16px' height='16px' className='IconSearch'/>
            </div>
            <input placeholder='search...' className='Search' onChange={(e) => handleSearchNote(e.target.value)}></input>
        </div>
    )
}
export default Search;
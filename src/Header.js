import main from './images/main/main photo.jpg';

function Header()
{
    return(
        <div>
            <div>
                <h1>Trip Tales</h1>
            </div>
            <div>
                <img src={main}></img>
            </div>
        </div>
    );
}
export default Header;
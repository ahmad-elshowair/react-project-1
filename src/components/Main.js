import image_1 from '../images/Group.png';
import image_2 from '../images/Vector.png';
export const Main = ()=>{
    return(
        <main className="main">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={image_1} alt="react logo 1" className='image__1'/>
            <img src={image_2} alt="react logo 1" className='image__2'/>
        </main>
    );
};
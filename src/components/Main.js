export const Main = (props)=>{
    return(
        <main className={`main ${props.darkMode ? "dark" : ''}`}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={props.image1} alt="react logo 1" className='image__1'/>
            <img src={props.image2} alt="react logo 1" className='image__2'/>
        </main>
    );
};
import  reactLogo from '../images/reactjs-icon.png'
export const Navbar = ()=>{
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={reactLogo} alt="react logo" className='image-logo'/>
                <h3 className='text-logo'>ReactFacts</h3>
            </div>
            <ul className='nav-items'>
                <li>React Course</li>
                <li> - </li>
                <li>Project 1</li>
            </ul>
        </nav>
    );
}
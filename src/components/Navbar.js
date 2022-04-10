import  reactLogo from '../images/reactjs-icon.png'
export const Navbar = (props)=>{
    return (
        <nav className={`navbar ${props.darkMode ? "dark" : "" }`} >
            <div className="logo">
                <img src={reactLogo} alt="react logo" className='image-logo'/>
                <h3 className='text-logo'>ReactFacts</h3>
            </div>
            <div className='toggler'>
                <p className='toggler--light'>light</p>
                <div className='toggler--slider' onClick={props.togglerMode}>
                    <span className='toggler--slider-circle'></span>
                </div>
                <p className='toggler--dark'>dark</p>
            </div>
           
        </nav>
    );
}
import { useEffect, useState } from "react";
import "./Header.css";

function Header(){
    const[showModal, setShowModal] = useState(false);
    const[theme, setTheme] = useState(localStorage.getItem('currentMode')?? 'dark');

    const mode = ()=>{
        localStorage.setItem('currentMode', theme === 'dark'? 'light': 'dark');
        setTheme(localStorage.getItem('currentMode'));
    }

    useEffect(()=>{
        if(theme === 'light'){
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else{
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }, [theme]);

    return(
        <header className="d-flex">
            <button className="menu icon-menu d-flex" onClick={()=> setShowModal(true)}/>
            <div/>
            <nav>
                <ul className="d-flex">
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Articles</a></li>
                    <li><a href="/#">Projects</a></li>
                    <li><a href="/#">Speaking</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
            </nav>

            <button
            onClick={mode} className="mode d-flex">
                <span className={theme === 'dark'? 'icon-sun': 'icon-moon-o'}/>
            </button>

            {showModal === true && (
                <div className="fixed">
                    <ul className="modal">
                        <li><button className="icon-close" onClick={()=> setShowModal(false)}/></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Articles</a></li>
                        <li><a href="/#">Projects</a></li>
                        <li><a href="/#">Speaking</a></li>
                        <li><a href="/#">Uses</a></li>
                    </ul>
                </div>
            )}
            
        </header>
    )
}
export default Header;
import React, { useEffect, useState } from 'react'
import './navBar.css'
import Login from '../login/Login'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [activeMenu, setactiveMenu] = useState('home')
    const [Drop, setDrop] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const navigate = useNavigate()
    
    
    useEffect(() => {
        return () => {
            console.log(activeMenu)
        }
    }, [activeMenu])

    const handleLoginOpen = () => {
        setIsLoginOpen(true);
    };

    const handleLoginClose = () => {
        setIsLoginOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setactiveMenu('home');
        if (Drop) setDrop(false);
    };

    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setactiveMenu('features');
        if (Drop) setDrop(false);
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setactiveMenu('about');
        if (Drop) setDrop(false);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setactiveMenu('contact');
        if (Drop) setDrop(false);
    };

    return (
        <>
            <div className="nav-wrapper">
                <div className="navbar">
                    <div className="brand">
                        <h1 onClick={() => navigate('/')} style={{cursor:'pointer'}} className="brand-name">
                            Secure<span className="core-text">Core</span>
                            <span className="brand-dot"></span>
                        </h1>
                    </div>
                    <div className="menu">
                        <ul className='menu-items'>
                            <li>
                                <a onClick={scrollToTop} 
                                   className={activeMenu === 'home' ? "active" : ""}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={scrollToFeatures} 
                                   className={activeMenu === 'features' ? "active" : ""}>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a onClick={scrollToAbout} 
                                   className={activeMenu === 'about' ? "active" : ""}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a onClick={scrollToContact} 
                                   className={activeMenu === 'contact' ? "active" : ""}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-actions">
                        <button className="contact-btn" onClick={handleLoginOpen}>
                            Get Started
                            <span className="btn-shine"></span>
                        </button>
                        <div className="menu-toggle">
                            <img 
                                onClick={() => setDrop(!Drop)} 
                                src="https://img.icons8.com/?size=100&id=dMz54mFbVirR&format=png&color=000000" 
                                className={`menu-img ${Drop ? 'active' : ''}`} 
                                alt="menu-icon" 
                            />
                        </div>
                    </div>
                </div>
                <div className={`drop-menu ${Drop ? 'active' : ''}`}>
                    <ul className='drop-items'>
                        <li className="drop-brand">
                            <h2>SecureCore</h2>
                        </li>
                        <li><a className='drop-item' onClick={scrollToTop}>Home</a></li>
                        <li><a className='drop-item' onClick={scrollToFeatures}>Features</a></li>
                        <li><a className='drop-item' onClick={scrollToAbout}>About Us</a></li>
                        <li><a className='drop-item' onClick={scrollToContact}>Contact</a></li>
                        <li>
                            <button 
                                className='drop-item login-item' 
                                onClick={() => { 
                                    handleLoginOpen(); 
                                    setDrop(false);
                                }}
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Login isOpen={isLoginOpen} onClose={handleLoginClose} />
        </>
    )
}

export default Navbar
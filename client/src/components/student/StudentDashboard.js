import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import './StudentDashboard.css';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleFeatureClick = (feature) => {
        switch (feature) {
            case 'Classes':
                navigate('/student/timetable');
                break;
            case 'Cafeteria':
                navigate('/student/canteen');
                break;
            case 'Lost & Found':
                navigate('/student/lost-found');
                break;
            case 'Emergency':
                navigate('/student/emergency-contacts');
                break;
            default:
                // Handle other features as they are implemented
                break;
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const features = [
        {
            name: 'Classes',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
            description: 'View and edit your weekly class timetable'
        },
        {
            name: 'Cafeteria',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
            description: 'View today\'s cafeteria menu'
        },
        {
            name: 'Lost & Found',
            image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80',
            description: 'Report lost items or check found items in the campus'
        },
        {
            name: 'Emergency',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
            description: 'Quick access to emergency contacts and services'
        }
    ];

    return (
        <div className="student-dashboard">
            {/* Navigation Bar */}
            <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
                <div className="nav-left">
                    <h1 
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                        className="logo-text"
                    >
                        College Buddy
                    </h1>
                </div>
                <div className={`nav-center ${isMobile ? 'mobile' : ''}`}>
                    {features.map((feature) => (
                        <button 
                            key={feature.name} 
                            className="nav-button"
                            onClick={() => handleFeatureClick(feature.name)}
                        >
                            {feature.name}
                        </button>
                    ))}
                </div>
                <div className="nav-right">
                    <div className="profile-section">
                        <span className="user-name">{user?.name}</span>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Welcome Section */}
            <div className="welcome-section">
                <h1>Welcome, {user?.name}!</h1>
            </div>

            {/* Mission and Introduction Section */}
            <div className="mission-section">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>To revolutionize the college experience by providing a seamless, integrated platform that connects students with essential campus services and resources.</p>
                    
                    <h2>About College Buddy</h2>
                    <p>College Buddy is your all-in-one companion for campus life. We understand that navigating college life can be challenging, 
                    which is why we've created a platform that brings together all the essential services you need. From managing your weekly class timetable 
                    to viewing today's cafeteria menu, reporting lost items, or accessing emergency services - everything is just a click away.</p>
                    
                    <div className="mission-highlights">
                        <div className="highlight">
                            <h3>Seamless Integration</h3>
                            <p>All your college services integrated into one easy-to-use platform</p>
                        </div>
                        <div className="highlight">
                            <h3>24/7 Access</h3>
                            <p>Access to important information and services anytime, anywhere</p>
                        </div>
                        <div className="highlight">
                            <h3>Student-Centric</h3>
                            <p>Designed with student needs at the forefront</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="features-container">
                <h2 className="features-heading">Discover What We Offer</h2>
                <p className="features-intro">Explore our comprehensive suite of services designed to make your campus life easier and more organized.</p>
                <div className={`features-grid ${isMobile ? 'mobile' : ''}`}>
                    {features.map((feature) => (
                        <div 
                            key={feature.name} 
                            className="feature-card"
                        >
                            <div className="feature-content">
                                <div className="feature-image">
                                    <img src={feature.image} alt={feature.name} />
                                </div>
                                <div className="feature-info">
                                    <h3>{feature.name}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="team-section">
                <h2 className="team-heading">Meet Our Team</h2>
                <p className="team-intro">The brilliant minds behind College Buddy</p>
                <div className={`team-grid ${isMobile ? 'mobile' : ''}`}>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/images/harshvardhan.jpg" alt="Harshvardhan Chinchkhedkar" />
                        </div>
                        <h3>Harshvardhan Chinchkhedkar</h3>
                        <p>Team Lead</p>
                        <div className="member-social">
                            <a href="https://github.com/harshvardhan-ch" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/harshvardhan-ch" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com/harshvardhan.ch" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/images/Aryan Kale.jpg" alt="Aryan Kale" />
                        </div>
                        <h3>Aryan Kale</h3>
                        <p>Full Stack Developer</p>
                        <div className="member-social">
                            <a href="https://github.com/aryankale" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/aryan-kale" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com/aryan.kale" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/images/Yash Chikhale.jpg" alt="Yash Chikhale" />
                        </div>
                        <h3>Yash Chikhale</h3>
                        <p>Backend Developer</p>
                        <div className="member-social">
                            <a href="https://github.com/yashchikhale" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/yash-chikhale" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com/yash.chikhale" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/images/Sarthak Chavan.jpg" alt="Sarthak Chavan" />
                        </div>
                        <h3>Sarthak Chavan</h3>
                        <p>Frontend Developer</p>
                        <div className="member-social">
                            <a href="https://github.com/sarthakchavan" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/sarthak-chavan" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com/sarthak.chavan" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@collegebuddy.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect With Us</h3>
                        <div className="social-links">
                            <a href="https://github.com/your-college-buddy" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="https://instagram.com/your-college-buddy" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                                <span>Instagram</span>
                            </a>
                            <a href="https://x.com/your-college-buddy" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={24} />
                                <span>X (Twitter)</span>
                            </a>
                            <a href="https://linkedin.com/company/your-college-buddy" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} College Buddy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default StudentDashboard; 
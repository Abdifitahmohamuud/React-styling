import React from 'react';
import './styles.css';

const ExternalPage = () => {
    const handleClick = () => {
        alert('Learn more about External CSS!');
    };

    return (
        <div className="external-container">
            <header className="external-header">
                <h1 className="external-title">External CSS Styling</h1>
            </header>
            
            <div className="external-card">
                <h2 className="external-subtitle">What is External CSS?</h2>
                <p className="external-text">
                    External CSS is a traditional styling method where styles are defined in a separate .css file.
                    This approach keeps your styles separate from your components, making it easier to maintain
                    and reuse styles across multiple components.
                </p>

                <h2 className="external-subtitle">Benefits</h2>
                <ul className="external-list">
                    <li>Separation of concerns</li>
                    <li>Easy to maintain</li>
                    <li>Reusable styles</li>
                    <li>Better performance with caching</li>
                </ul>

                <h2 className="external-subtitle">Example Usage</h2>
                <pre className="external-code">
{`// styles.css
.button {
    background-color: #10b981;
    color: white;
    padding: 12px 24px;
}

// component.jsx
import './styles.css';

const Component = () => {
    return <button className="button">Click Me</button>;
};`}
                </pre>

                <button 
                    className="external-button"
                    onClick={handleClick}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ExternalPage; 
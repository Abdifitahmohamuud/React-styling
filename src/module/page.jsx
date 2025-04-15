import React from 'react';
import styles from './page.module.css';

const ModulePage = () => {
    const handleClick = () => {
        alert('Learn more about CSS Modules!');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>CSS Modules</h1>
            </header>
            
            <div className={styles.card}>
                <h2 className={styles.subtitle}>What are CSS Modules?</h2>
                <p className={styles.text}>
                    CSS Modules are CSS files in which all class names and animation names
                    are scoped locally by default. This means you can use the same class names
                    in different files without worrying about naming conflicts.
                </p>

                <h2 className={styles.subtitle}>Benefits</h2>
                <ul className={styles.list}>
                    <li>Local scoping of CSS classes</li>
                    <li>No naming conflicts</li>
                    <li>Explicit dependencies</li>
                    <li>Works with existing CSS</li>
                </ul>

                <h2 className={styles.subtitle}>Example Usage</h2>
                <pre className={styles.code}>
{`// styles.module.css
.button {
    background-color: #f59e0b;
    color: white;
    padding: 12px 24px;
}

// component.jsx
import styles from './styles.module.css';

const Component = () => {
    return <button className={styles.button}>Click Me</button>;
};`}
                </pre>

                <button 
                    className={styles.button}
                    onClick={handleClick}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ModulePage; 
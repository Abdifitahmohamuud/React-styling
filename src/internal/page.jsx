import React from 'react';

const InternalPage = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = () => {
        alert('Learn more about Inline CSS!');
    };

    const styles = {
        subtitle: {
            color: '#0c4a6e',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            margin: 0,
            fontWeight: 600,
            width: '100%'
        },
        text: {
            color: '#0c4a6e',
            lineHeight: '1.7',
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            margin: 0,
            width: '100%'
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            boxSizing: 'border-box'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%'
        },
        listItem: {
            color: '#0c4a6e',
            padding: '0.5rem 0',
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            position: 'relative',
            paddingLeft: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box'
        },
        listItemBullet: {
            color: '#0ea5e9',
            fontSize: '1.5rem',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)'
        },
        code: {
            backgroundColor: '#f0f9ff',
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            color: '#0c4a6e',
            overflowX: 'auto',
            margin: 0,
            width: '100%',
            boxSizing: 'border-box'
        }
    };

    return (
        <div style={{
            padding: '1rem',
            width: '100%',
            margin: '0',
            backgroundColor: '#f0f9ff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            boxSizing: 'border-box'
        }}>
            <header style={{
                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    margin: 0,
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    fontWeight: 700,
                    width: '100%'
                }}>Inline CSS Styling</h1>
            </header>
            
            <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <div style={styles.section}>
                    <h2 style={styles.subtitle}>What is Inline CSS?</h2>
                    <p style={styles.text}>
                        Inline CSS in React involves defining styles directly in your JSX elements using the style prop.
                        Each component's styles are defined right where they are used, making it clear how each element is styled.
                        For example, in this page, the header's background gradient and the card's shadow are defined inline.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.subtitle}>Benefits</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.listItemBullet}>•</span>
                            Direct styling in JSX - styles are defined right where they're used
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listItemBullet}>•</span>
                            No class name conflicts - each style is scoped to its component
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listItemBullet}>•</span>
                            Easy to maintain - styles are co-located with their components
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listItemBullet}>•</span>
                            Dynamic styling - can use JavaScript for conditional styles
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.subtitle}>Example Usage</h2>
                    <pre style={styles.code}>
{`// Header with gradient background
<header style={{
    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    padding: '2rem 1rem',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}}>
    <h1 style={{
        color: 'white',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
    }}>Title</h1>
</header>

// Card with hover effect
<button 
    style={{
        backgroundColor: '#0ea5e9',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        ...(isHovered ? {
            backgroundColor: '#0284c7',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)'
        } : {})
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    Click Me
</button>`}
                    </pre>
                </div>

                <button 
                    style={{
                        backgroundColor: '#0ea5e9',
                        color: 'white',
                        padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        marginTop: '1rem',
                        boxSizing: 'border-box',
                        ...(isHovered ? {
                            backgroundColor: '#0284c7',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)'
                        } : {})
                    }}
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default InternalPage; 
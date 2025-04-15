import React, { useState } from 'react';
import './App.css';
import ExternalPage from './external/page';
import Page from './component/page';
import ModulePage from './module/page';
import Internal from './internal/page';

const App = () => {
    const [activePage, setActivePage] = useState('external');

    const renderPage = () => {
        switch (activePage) {
            case 'external':
                return <ExternalPage />;
            case 'component':
                return <Page />;
            case 'module':
                return <ModulePage />;
            case 'internal':
                return <Internal />;
            default:
                return <ExternalPage />;
        }
    };

    return (
        <div className="app-container">
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <a
                            href="#"
                            className={`nav-item ${activePage === 'external' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage('external');
                            }}
                        >
                            External Styling
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`nav-item ${activePage === 'component' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage('component');
                            }}
                        >
                            Component Styling
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`nav-item ${activePage === 'module' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage('module');
                            }}
                        >
                            Module Styling
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`nav-item ${activePage === 'internal' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage('internal');
                            }}
                        >
                            Inline Styling
                        </a>
                    </li>
                </ul>
            </nav>

            <main className="main-content">
                <h1 className="page-title">
                    {activePage === 'external' && 'External CSS Styling'}
                    {activePage === 'component' && 'Styled Components'}
                    {activePage === 'module' && 'CSS Modules'}
                    {activePage === 'internal' && 'Inline CSS Styling'}
                </h1>
                {renderPage()}
            </main>
        </div>
    );
};

export default App;

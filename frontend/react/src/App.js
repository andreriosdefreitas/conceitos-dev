import React from 'react';
import Header from './components/Header'

function App(){
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>A</li>
                    <li>B</li>
                </ul>
            </Header>
            <Header title="Projects">
            <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </Header>
        </>
    );
}

export default App;
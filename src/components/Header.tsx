import React from 'react';

export const Header = () => {
    return (
        <header className={'container'}>
            <div className={'row'}>
                <div className="col-4 bg-dark text-white">
                    <h1>Logo</h1>
                </div>
                <div className="col-8">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

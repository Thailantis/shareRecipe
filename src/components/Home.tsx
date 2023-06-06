import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Welcome to Recipe Sharing Platform</h1>
                <p className="lead text-center">
                    This Platform allows you to share and discover code recipes from other developers.
                </p>
                <p className="text-center">
                    Start by signing up or signing in to explore and explore the recipe collection.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Home;

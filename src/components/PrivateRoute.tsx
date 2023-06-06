import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    isAuth: boolean;
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    const renderComponent = (props: any) => 
    isAuth ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login"/>
    );

    return <Route {...rest} render={renderComponent} />;
};

export default PrivateRoute;

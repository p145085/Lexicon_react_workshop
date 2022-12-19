import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Welcome = () => <h1>Welcome</h1>;
const About = () => <h1>About</h1>;
const Home = () => <h1>Home</h1>;
const Person = () => <h1>Person</h1>;
const NotFound = () => <h1>404: Page Not Found</h1>;

const Header = () => (
    <nav>
        <Link to="/">Welcome</Link>
        <Link to="/home">Home</Link>
        <Link to="/person">Person</Link>
        <Link to="/about">About</Link>
        <Link to="/data-table">DataTable</Link>
    </nav>
);

const DemoRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/person" component={Person} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default DemoRouter;

import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import SubmittedForm from './pages/SubmittedForm';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        {/* Home Route */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* About Us Route */}
        <Route exact path="/about">
          <About />
        </Route>

        {/* Contact Us Route */}
        <Route exact path="/contact">
          <ContactUs />
        </Route>

        <Route exact path="/form-submitted">
          <SubmittedForm/>
        </Route>

        <Route exact path="/posts/:post_id">
          <PostPage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
import MovieApp from '../apps/the-movie-db/MovieApp';
import Bitcoin from '../apps/bitcoin-api-app/Bitcoin';



const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/resources'>Resources</Link></li>
                    <li><Link to ='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to ='/jsxrules'>JSXRules</Link></li>
                    <li><Link to ='/state'>State</Link></li>
                    <li><Link to ='/effects'>Effects</Link></li>
                    <li><Link to ='/propsdemo'>Props Demo</Link></li>
                    <li><Link to = '/hooks'>Hooks</Link></li>
                    <li><Link to = '/timer'>Timers</Link></li>
                    <li><Link to = '/nytapp'>NYT App</Link></li>
                    <li><Link to = '/movieapp'>Movie App</Link></li>
                    <li><Link to = '/bitcoin'>Bitcoin App</Link></li>
                    {/* link ensures we're being redirected to the correct path without refreshing the pg*/}
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo/></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/hooks'><Hooks /></Route>
                    <Route exact path='/timer'><TimePiecesApp /></Route>
                    <Route exact path='/nytapp'><NytApp /></Route>
                    <Route exact path='/movieapp'><MovieApp /></Route>
                    <Route exact path='/bitcoin'><Bitcoin /></Route>
                    {/* react-router-dom doesn't know what to do until we add the route. Exact limits the path that can match this route to only the words shown.  */}
                </Switch>
                {/* we use Switch to wrap our Routes since the Switch acts as a vanilla JS switch statement, and iterates over the routes and only renders the first one that matches the current path name. */}
            </div>
        </div>
    );
};

export default Sidebar;

import { BrowserRouter, Route } from 'react-router-dom';
import Home2 from './Home2';
import Contact from './Contact';
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path={'/'} component={Home2} />
                <Route path={'/Contact'} component={Contact} />
            </div>
        </BrowserRouter>
    )
}

export default App;

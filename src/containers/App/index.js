import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import injectTapEventPlugin       from 'react-tap-event-plugin';
import getMuiTheme                from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Route }      from 'react-router-dom'


// global styles for entire app
import './styles/app.scss';

/* application containers */
import Header     from '../Header';
import LeftNavBar from '../LeftNavBar';
import Home       from '../Home';

injectTapEventPlugin();

export class App extends Component {
  // eslint-disable-next-line 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <div className="container">
            <HashRouter>
              <div>
                <Route exact path="/" component={Home}/>
              </div>
            </HashRouter>
          </div>
          <LeftNavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null)(App);

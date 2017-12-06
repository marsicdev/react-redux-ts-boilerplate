import * as React from 'react';

import Header from './header/Header';
import Main from './main/Main';
// import Footer from './footer/Footer';

class App extends React.Component {
    render() {
        return [
            <Header key="page-header" />,
            <Main key="page-content" />,
            // <Footer key="page-footer" />
        ];
    }
}

export default App;

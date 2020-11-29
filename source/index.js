import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Home from './page/Home';

import Header from './components/Header';
import Footer from './components/Footer';

function Main() {
    return (
        <Provider store={store}>
            <Header />
            <Home />
            <Footer />
        </Provider>
    );
}

export default Main;

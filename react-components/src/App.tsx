import React, { Component, Fragment } from 'react';

import { Routes, Route } from 'react-router';

import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;

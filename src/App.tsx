import React, { Component, Fragment } from 'react';

import { Routes, Route } from 'react-router';

import { NotFound, Home, AboutUs, Forms } from './pages';
import { Header } from 'components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;

import React, { Fragment } from 'react';

import { Routes, Route } from 'react-router';

import { NotFound, Home, AboutUs, Forms, Detail } from './pages';

import { Header } from 'components';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Detail />} />
        <Route path="forms" element={<Forms />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </Fragment>
  );
}

export default App;

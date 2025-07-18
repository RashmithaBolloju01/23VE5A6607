import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortenerForm from './components/ShortenerForm';
import UrlList from './components/UrlList';
import StatsPage from './components/StatsPage';
import RedirectHandler from './components/RedirectHandler';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <ShortenerForm />
          <UrlList />
        </>
      } />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/short/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUrlByShortcode, updateUrl } from '../utils/storage';
import { logEvent } from '../utils/logger';

export default function RedirectHandler() {
  const { shortcode } = useParams();

  useEffect(() => {
    const urlObj = getUrlByShortcode(shortcode);
    if (!urlObj) {
      alert('Short URL not found');
      return;
    }
    if (Date.now() > urlObj.expiry) {
      alert('Short URL expired');
      return;
    }
    // Simulate location (country) as 'IN' for demo
    const click = {
      timestamp: new Date().toLocaleString(),
      referrer: document.referrer,
      location: 'IN'
    };
    updateUrl(shortcode, u => ({
      ...u,
      clicks: [...u.clicks, click]
    }));
    logEvent('redirect', { shortcode, click });
    window.location.href = urlObj.url;
  }, [shortcode]);

  return <div>Redirecting...</div>;
}
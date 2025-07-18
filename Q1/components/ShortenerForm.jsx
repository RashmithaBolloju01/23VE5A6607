import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { saveUrl } from '../utils/storage';
import { logEvent } from '../utils/logger';

const generateShortcode = () => Math.random().toString(36).substr(2, 6);

export default function ShortenerForm({ onShorten }) {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    try {
      new URL(url);
    } catch {
      setError('Invalid URL');
      return;
    }
    const code = shortcode || generateShortcode();
    const expiry = Date.now() + validity * 60000;
    const urlObj = {
      url, 
      shortcode: code, 
      created: Date.now(), 
      expiry, 
      clicks: []
    };
    saveUrl(urlObj);
    logEvent('shorten', { url, shortcode: code });
    setError('');
    onShorten && onShorten(urlObj);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
  label="Original URL"
  value={url}
  onChange={e => setUrl(e.target.value)}
  fullWidth
  required
  variant="filled"
  sx={{
    input: { color: '#fff', backgroundColor: '#222' },
    label: { color: '#bbb' },
    bgcolor: '#222',
    borderRadius: 1,
    mb: 2
  }}
/>
<TextField
  label="Validity (minutes)"
  type="number"
  value={validity}
  onChange={e => setValidity(e.target.value)}
  variant="filled"
  sx={{
    input: { color: '#fff', backgroundColor: '#222' },
    label: { color: '#bbb' },
    bgcolor: '#222',
    borderRadius: 1,
    mb: 2
  }}
/>
<TextField
  label="Custom Shortcode (optional)"
  value={shortcode}
  onChange={e => setShortcode(e.target.value)}
  variant="filled"
  sx={{
    input: { color: '#fff', backgroundColor: '#222' },
    label: { color: '#bbb' },
    bgcolor: '#222',
    borderRadius: 1,
    mb: 2
  }}
/>
      {error && <Box color="red">{error}</Box>}
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Shorten</Button>
    </Box>
  );
}
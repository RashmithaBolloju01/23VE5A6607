import React from 'react';
import { getUrls } from '../utils/storage';
import { Box, Typography, List, ListItem } from '@mui/material';

export default function StatsPage() {
  const urls = getUrls();
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5">URL Shortener Statistics</Typography>
      <List>
        {urls.map(u => (
          <ListItem key={u.shortcode}>
            <Box>
              <Typography>
                <b>Short URL:</b> {window.location.origin}/short/{u.shortcode}
              </Typography>
              <Typography>
                <b>Created:</b> {new Date(u.created).toLocaleString()} | <b>Expires:</b> {new Date(u.expiry).toLocaleString()}
              </Typography>
              <Typography>
                <b>Clicks:</b> {u.clicks.length}
              </Typography>
              <ul>
                {u.clicks.map((c, i) => (
                  <li key={i}>
                    {c.timestamp} | Referrer: {c.referrer || 'Direct'} | Location: {c.location || 'Unknown'}
                  </li>
                ))}
              </ul>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
import React from 'react';
import { getUrls } from '../utils/storage';
import { Box, Typography, List, ListItem } from '@mui/material';

export default function UrlList() {
  const urls = getUrls();
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Shortened URLs</Typography>
      <List>
        {urls.map(u => (
          <ListItem key={u.shortcode}>
            <a href={`/short/${u.shortcode}`}>{window.location.origin}/short/{u.shortcode}</a>
            &nbsp;| Expires: {new Date(u.expiry).toLocaleString()}
            
          </ListItem>
        ))}
      </List>
    </Box>
  );
}



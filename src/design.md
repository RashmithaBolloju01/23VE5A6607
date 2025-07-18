# URL Shortener React App – Design Document

Overview
This application is a client-side React web app that allows users to shorten URLs, specify expiry times, optionally set custom shortcodes, and view statistics for each shortened URL. All data is stored in the browser's localStorage.

Key Design Decisions

1.Framework & Libraries
React: Chosen for its component-based architecture and ease of state management.
Material UI: Used for consistent, accessible, and responsive UI components.
React Router: Enables client-side routing for navigation between pages.

 2.Data Model
Each shortened URL is stored as an object:
```js
{
  url: string,          
  shortcode: string,     
  created: number,       
  expiry: number,       
  clicks: [           
    {
      timestamp: string,
      referrer: string,
      location: string
    }
  ]
}
```

3. Persistence
-localStorage: is used to persist URLs and logs across sessions.
- Utility functions in `src/utils/storage.js` handle all CRUD operations for URLs.

4.Routing
- `/` – Home page with URL shortener form and list of URLs.
- `/stats` – Statistics page showing all shortened URLs and click analytics.
- `/short/:shortcode` – Redirect handler for short URLs.

5.Logging
- All significant events (shorten, redirect, errors) are logged using a custom logger (`src/utils/logger.js`) and stored in localStorage.

6. Validation
- URLs are validated using the browser's `URL` constructor.
- Custom shortcodes are checked for uniqueness and reasonable length.
- Validity period must be a positive integer.

7.Redirection
- When a short URL is visited, the app checks for existence and expiry.
- If valid, logs the click (with timestamp, referrer, and simulated location) and redirects to the original URL.
- If invalid or expired, displays an error.

8.Styling
- All UI elements use Material UI for a modern, accessible look.
- Minimal custom CSS is used, as required by the assignment.


Assumptions & Limitations

- No backend**: All data is stored client-side; links are not shareable across devices.
- Location**: Geographical location is simulated for demonstration.
- Security: No authentication is implemented, as per requirements.
- Scalability: Suitable for demo and evaluation purposes, not for production use.

Conclusion

This design ensures a modular, maintainable, and user-friendly URL shortener app that meets all assignment requirements using only
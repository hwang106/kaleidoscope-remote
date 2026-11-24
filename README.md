# Kaleidoscope Remote

This is a home-screen launcher for the phone remote of Kaleidoscope, a classroom seating and pairing app built on Google Apps Script.

Apps Script pages can't be installed as phone apps. This page gives the remote its own name and icon. Opened from the home screen, it goes straight to the Apps Script remote (`?view=remote`). Opened in a browser, it shows the install steps.

- **`index.html`**: the launcher, which holds the remote URL in `REMOTE`.
- **`manifest.webmanifest`** and **`icons/`**: the app name and icons. The icons are drawn by `kaleidoscope/dev/make_logo.py`.
- **`sw.js`**: an empty service worker that makes the launcher installable. It caches nothing.

Signing in, and who can use the remote, are still handled by Apps Script.

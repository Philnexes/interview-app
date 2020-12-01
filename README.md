# Live version
https://i-interview-app.web.app/

# NOTICE

Due to a brutal time pressure lately (other project deadlines, helping cousin with a remote education on high school etc.) I'm wont be able to work on this project for next few weeks (written on December 1st 2020), but I believe the state of the app is representative... kind of... Lots of things are open for discussion, and there's a lot to improve.

# Initializing this app
You'll need to define .env file with an API key from TMDB API, the name of the property is REACT_APP_API_KEY
Don't forget to `touch env` and `npm install`

After npm start, the app should work as intended (on desktop browser, needs optimization for mobile browsers)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

# Shaka Player

Shaka player is implemented (VideoPlayer.js), the application is able to run even the m3u8 format, but it throws a warning and errors, but the playback starts. Due to that, I just left the option to play the video open by switching the method in VideoPlayer.js to fetch the manifest uri...

Just use `getVideoPathHls()` instead of `getVideoPathMp4()`

# Used libraries

## `axios`

A library used to consume an API

## `react-indiana-drag-scroll`

This library makes sure that the carousel container is able to be scrolled with a mouse/touch drag.
https://github.com/Norserium/react-indiana-drag-scroll

## `react-responsive-modal`

This library ensures a modal window for a detail popup and movie player. The big advantage of this library is its transparency in properties that can be used, custom styling and it already handles a lifecycle of the modal window and the objects within.
https://github.com/pradel/react-responsive-modal

## `shaka-player`

Google made video player that was required to be implemented by the task assignement.

## `mux`

This helps the Chrome browser to decode the m3u8 stream


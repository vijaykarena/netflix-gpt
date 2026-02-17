# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login From
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile pic update
- BugFix: if the user is not logged in Redirect /browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded value to the constant file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page looks amazing
- More Custom hooks for MovieList API
- GPT Search Page
- GPT Search Bar
- Multi-language Feature
- Get GEMINI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made Site Responsive


# Features
- Login/Sign up
    - Sign In / Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - Movie Suggestion
            - MovieList * N
- NetflixGPT
    - search Bar
    - Movie Suggestions


# Project Setup
- Before starting the project add .env file and add TMDB and OPENAI KEY into it.
  - VITE_GEMINI_API_KEY: key
  - VITE_TMDB_API_KEY: key
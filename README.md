# Lyrics Search App

Simple app to search song's lyrics.

**Objective:** Improve my abilities working with React, React Router and fetching data with APIs.

## Description

The app has two main parts: the search bar and the tracks list. The first one allows the user to search
any song they like. The track list shows the ten most popular songs when the app first loads
and is updated to show the search results.

### How it works

The track list makes a call to the Musixmatch API and pass the response to the dispatch function. From there,
I pass the tracks through the context provider, so I can use them in all the components down the tree.
The dispatch function is also passed in another context provider. Once the user searches for a song, the dispatch
function is used to update the state of the track list with the new ones.

## Challenges

While I was following a video tutorial to guide me, I had to solve some problems to complete my app.

First, the tutorial is from three years ago and used class components. I made the app with function components
and hooks. I also had to learn about context in React as I have never used it before. Finally, the part that I
found the most complicated was creating the reducer function and passing it through context but, after reading
the documentation and many trials and errors, I could sort it out. 

## What I learned

Some key points I take away from the project:

- Learned how context works and why it is useful
- Work with useReducer(), useContext() hooks for the first time 
- How reducer functions work and how to dispatch actions
- Improved my comprehension of component's state
- Improved my knowledge of React Router
- Styling with TailwindCSS 
- Use of axios for API data fetching

## Tech Stack and Tools

- ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
- ![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![image](https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white)
- Axios
- Font Awesome

## Acknowledgements

The inspiration for this project came from this [series of videos](https://www.youtube.com/watch?v=NDEt0KdDbhk) from [Brad Traversy](https://github.com/bradtraversy).

You can visit his YouTube Channel [here](https://www.youtube.com/@TraversyMedia).

## Notes

When trying to load the content from the API had to use this [Chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) to solve the CORS problem.
# Practice Assignment

Implemented a user interface that allows a user to view a list of users from an API server. Clicking on any user will open a modal which displays all the activity-shifts of the current date with an option to view all the shifts of activity for a specific day using a calendar.

### Folder Structure

```.
|--- api (mock api)
     |--- data.json
     |--- package.json
     |--- server.js
|--- public
     |--- index.html
|--- src
     |--- components
          |--- App.js
          |--- Calender.js
          |--- Member.js
          |--- MemberList.js
          |--- ModalPortal.js
          |--- TimeRangeModal.js
     |--- styles
          |--- index.css
     |--- index.js
|--- package.json
|--- README.md
```

### Follow the steps to run on local machine:

1. Clone the repo https://github.com/saujanyanagpal104/practice-assignment.git.
2. Navigate to the code directory.
3. Install all the dependencies by running **npm install** in the terminal.
4. To run the mock api server, navigate to the *api* directory, install all the dependencies by running **npm install** and **node server.js** in the terminal.
5. Navigate back to the *main* directory, run **npm start** in the terminal to launch the app on you local machine.

> *This app is initialized using create-react-app.






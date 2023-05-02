<<<<<<< HEAD
# Habit-Tracker
A simple web application to track your Daily Habits 💪 Habits-Tracker.
=======

# 💪 H-Tracker(Habit Tracker)
A simple web application to track your daily habits i.e. 💪 H-Tracker.

## Authors

- [@Divyansh-singh08](https://github.com/Divyansh-singh08/Habit-Tracker)

## Features

- User authentication (signUp, logIn, logOut)
- Add, edit, and delete habits
- Track the status of your habits for the current day
- View past tracking data for each habit


## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS
- SCSS


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- MongoDB

Clone the project

```bash
  git clone https://github.com/Divyansh-singh08/Habit-Tracker.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Open your web browser and navigate to http://localhost:8000

## Tech Stack

**Client:** ejs, SCSS, ES6

**Server:** Node, Express

**DataBase:** MongoDB

## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

    Habit-tracker
        |-----assets
        |       |--- css
        |             |-- details.css
        |             |-- header.css
        |             |-- home.css
        |             |-- landing.css
        |             |-- layout.css
        |             |-- signIn.css
        |             └-- signUp.css
        |       |--- js
        |       |     
        |       |--- scss
        |             |-- details.scss
        |             |-- header.scss
        |             |-- home.scss
        |             |-- landing.scss
        |             |-- layout.scss
        |             |-- signIn.scss
        |             └-- signUp.scss
        |------ config
        |         |--- flash.js
        |         |--- git-Auth.js
        |         |--- google-Auth.js
        |         |--- mongoose.js
        |         └--- passport.js
        |------ controllers
        |         |--- Habit_controller.js
        |         |--- Home_controller.js
        |         └--- User_controller.js
        |------ models
        |         |--- habit.js
        |         └--- user.js
        |------ routers
        |         |--- index.js
        |         └--- user.js
        |------ views
        |         |--- _header.ejs
        |         |--- haditData.ejs
        |         |--- home.ejs
        |         |--- landingPage.ejs
        |         |--- layout.ejs
        |         |--- Sign-In.ejs
        |         └--- Sing-Up.ejs
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

## Usage

```javascript
1) Sign up for an account or log in if you already have one.
2) Add a new habit by clicking on the "Add Habit" button and filling in the form.
3) Track the status of your habits for the current day by clicking on the "Mark as Done" or "Mark as Not Done" button.
4) View past tracking data for each habit by clicking on the habit name.
5) Edit or delete habits by clicking on the "Edit" or "Delete" button.
```


>>>>>>> 95e487a (H-Tracker v1.0)

# To-Do List Application

This project is a simple **To-Do List** web application that allows users to add, complete, and remove tasks. The tasks are stored in the browser's `localStorage` so that they persist even after the page is refreshed. and this app count the number of tasks do you have

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Add New Task**: Users can input a task name and add it to the list.
- **Mark Task as Completed**: Users can click on the check button to mark a task as completed. Completed tasks are styled with a line-through and grayed-out background.
- **Remove Task**: Users can delete a task by clicking on the trash button.
- **Task Count**: Displays the total number of tasks currently in the list.
- **Persistent Data**: Tasks are saved in the browser's `localStorage`, allowing the list to persist even when the page is reloaded.

## Technologies Used
- **HTML**: Used to structure the content of the web application.
- **CSS**: Used to style the application and make it visually appealing.
- **JavaScript**: Handles the dynamic functionality like task management, local storage interaction, and user interaction.
- **Font Awesome**: Used for icons in the buttons (check and trash).

## Project Structure
The project consists of the following files:

- `index.html`: Contains the structure of the application, including the task input field, task list, and task count.
- `styles.css`: Contains the styling for the application, including layout, colors, fonts, and responsive design.
- `script.js`: Contains the functionality for adding, completing, removing tasks, and managing localStorage.
- `README.md`: This file, which provides an overview of the project and instructions.

## Getting Started
To get started with this project, simply clone the repository and open the `index.html` file in your browser.

### Clone the Repository
```bash
git clone https://github.com/yourusername/todo-list.git
cd todo-list

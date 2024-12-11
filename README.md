# Todo App

Stay organised and focused with this simple yet efficient todo application.

This application is not yet complete and is currently being developed on.

## Features

- Create todo items
- A todo item has a name and a priority. It can also optionally have further descriptions, and can also belong to a category
- Can edit todo items, check them off, and delete them

Beware that this application is not yet responsive for smaller devices, though I plan to make it so.

## How To Use

- To create a new todo item, click on the green 'NEW TODO' button.
- The name is mandatory, other fields are optional.
- Each todo item has a default priority of 'Low'. You can change it to 'Medium' or 'High'.
- Each todo item by default belongs to no category. You can select a category that it belongs to.
- You can create your own categories, and assign a specific colour to it.

---

- To right of each todo item is an 'EDIT' button and 'DELETE' button. Here, you can edit the specific details of a todo item, or delete one.
- To toggle a todo item between 'Completed' and 'Not Completed', click on the todo item.
- Each todo item has an arrow to the left of its name. You can click on it to expand or minimise the todo item, which will show or hide more details respectively.
- Each todo item has a priority circle to the right of its name. It will be green if the priority is 'Low', orange is 'Medium', and red if 'High'.
- You can click on the priority circle to quickly change the todo item's priority.
- If a todo item belongs to a category, its category name and colour will appear to the right of its priority circle.
- If you have at least one todo item marked as 'Completed', a red button will appear on the toolbar which will delete all completed todo items in one go.

## Upcoming Features

This project is currently in development. Here are a few features I plan to add:

- Order todo items by name, priority, category etc.
- Start and end date
- Or, start date with no end date (i.e. ongoing task)
- End date with no start date (i.e. a deadline)
- Responsiveness for smaller devices
- Have a todo item belong in multiple categories
- Connect to a database to permanently save data

## Tech Stack

- TypeScript
- React

I am fairly new to TypeScript, so usage of TypeScript is limited. I have used it to define the 'type' of a todo item, as well as the type of props for different components.

React context is used to allow todo items to access the functions that manipulate its own objects in state, avoiding prop drilling.

I use custom CSS variables to help maintain a consistent colour scheme in the application.

## Dependencies

- [react-modal](https://www.npmjs.com/package/react-modal)

## Update Log

### 11th December 2024

- A button for removing all completed todo items in one go
- Assign colours to categories
- Have the category name and colour appear on each todo item
- Adjust the colour of the category name (black or white) based on the background color, for better contrast

### 10th December 2024

- Quickly change a todo item's priority by clicking on the priority circle

### 9th December 2024

- Changed design, and added a few features:
  - Expand/minimise a task to show/hide its description
  - Priority circle next to task name, the colour depicting priority - green for low, orange for medium, red for high

### 7th November 2024

- Repository created and first commit.

## Known Issues

No known issues.
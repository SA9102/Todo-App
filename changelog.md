# Change Log

**3rd February 2025**

- Button to delete all completed tasks at once.

**2nd February 2025**

- Can edit category names and delete categories.
- If a category is deleted, then tasks that were in that category will instead not be in any category.

**1st February 2025**

- Can edit category colours. These changes will be reflected within the tasks that are labelled within those categories.

**29th January 2025**

- Can create new categories. Choose name and colour.

**27th January 2025**

- Just like tasks, categories are now also part of global state.
- Can optionally assign a category to task.
- Category is represented within a chip next to the task name.
- Cannot create categories or assign colours yet.

**26th January 2025**

- Clicking on a task will mark it as complete and will make it transparent.
- Progress bar indicating the percentage of tasks completed.

_(Not many changes due to university workload)_

**24th January 2025**

- Option to switch between list and grid view (grid view still needs to be improved)

**21st January 2025**

- Instead of a menu button for each task, the 'edit' and 'delete' buttons are now directly on the task item.
- Made the priority colours better.
- The top bar has been removed.

**20th January 2025**

- Changes to layout and colour scheme, giving it a more modern look.

**19th January 2025**

- Filter tasks by text within their name or description.
- Filter tasks by priority.
- Filter settings persist after refreshing page and navigating between pages.
- More tests for Home page.

**18th January 2025**

- Added some dummy tasks on load for testing purposes.
- Can choose priority of tasks.
- An option for no priority.
- Priority of tasks depicted as a colour on the left border of a task (no colour means no priority, green means low, orange means medium, red means high).
- If the description of a task item is too long to fit onto one line, the overflow will be hidden.

_(Not many changes + a week break due to university exams)_

**11th January 2025**

- Can view description of tasks.

**10th January 2025**

- More tests

**9th January 2025**

- Edit and delete tasks

**8th January 2025**

- Code refactors to increase maintainability and reusability

**7th January 2025**

- Can remove all completed tasks at once.

**6th January 2025**

- Tasks have unique ids.
- Click on task item to mark it as complete. Click it again to mark it as incomplete.
- Added some tests for Home.tsx.

**5th January 2025**

- Added a basic test for the TaskForm page. Will expand on this.

**4th January 2025**

- Only 'Add Task' works. Takes you to the 'Add Task' page - same as clicking on the floating action button.

**3rd January 2025**

- Added a menu popup when you click on the 'three dots'. Logic extracted to custom hook.
- Not functional yet.

**2nd January 2025**

- Appbar is on app-level to avoid repeated code
- Style and theme changes

**1st January 2025**

- Added appbar at top

**31st December 2024**

- First commit of the new version of the application
- You can only add and view tasks

**16th December 2024**

- You can now filter items by category

**15th December 2024**

- Added a new branch "frontend+backend" where I am working on the backend

**12th December 2024**

- Tidied up code and added comments
- The 'edit' and 'delete' buttons of a todo item now appear only when you hover over it

**11th December 2024**

- A button for removing all completed todo items in one go
- Assign colours to categories
- Have the category name and colour appear on each todo item
- Adjust the colour of the category name (black or white) based on the background color, for better contrast
- Filter items by text in both name and description

**10th December 2024**

- Quickly change a todo item's priority by clicking on the priority circle

**9th December 2024**

- Changed design, and added a few features:
  - Expand/minimise a task to show/hide its description
  - Priority circle next to task name, the colour depicting priority - green for low, orange for medium, red for high

**7th November 2024**

- Repository created and first commit.

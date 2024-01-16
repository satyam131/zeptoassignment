# zeptoassignment
This project implements a Chip Input Component using React and CSS. The Chip Input Component is designed to provide a user-friendly interface for entering and managing tags or items in the form of chips.

Key Features:

1.Dynamic Suggestions:
Upon clicking the input field, a list of items appears.
As the user types, the list dynamically filters to show only items matching the input.

2.Chip Creation:
Clicking on an item in the list turns it into a chip at the top.
The input field adjusts automatically, providing a seamless user experience.

3.Chips Management:
Each chip features an "X" icon.
Clicking the "X" icon removes the chip and adds the item back to the list.

4.Clean Code and TypeScript:
The codebase adheres to clean coding practices for maintainability and readability.
TypeScript is utilized for improved type safety and code clarity.

5.Backspace Functionality:
When the input is blank, pressing backspace highlights the last chip.
A second press on backspace removes the highlighted chip.


How to Run:

#Clone the repository:
git clone https://github.com/your-username/chip-input-component.git
cd chip-input-component

#Install dependencies:
npm install /n
Run the application:  /n
npm start   /n

#Technologies Used:
React
CSS 

Additional Notes:
The project is built without relying on component libraries like MUI or Chakra UI.
Tailwind CSS or SCSS is used for styling, providing a flexible and maintainable styling solution.

Future Enhancements:
Provide additional customization options for users, such as chip colors, sizes, or input placeholder text.
Implement more advanced chip features, such as chip grouping or tagging.
Feel free to explore the code and experiment with further enhancements to suit specific project requirements.

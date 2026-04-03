# Pinterest Home Page Recreation – WEB101 PA1

### 

#### Introduction



This application is a front-end recreation of a Pinterest-style interface built using React. It demonstrates component-based architecture, dynamic data handling, and responsive design. The system is designed to simulate a real-world content browsing platform where users can explore, filter, and interact with visual posts (pins).



#### Mock Data



The application utilizes predefined datasets to simulate real content.



Categories: A list of predefined topics such as Travel, Fashion, Food \& Drink, and more. These are used for filtering displayed content.

Pins: A structured array of objects representing posts. Each pin contains attributes such as image URL, title, author name, category, and save count.



This approach allows the application to function independently without requiring an external database or API.



#### PinCard Component



The PinCard component is responsible for displaying individual pins.



Presents visual content along with metadata (title, author, saves)

Implements hover-based interactions, revealing additional controls such as save and action buttons

Allows users to toggle the save state dynamically

Enhances user experience through animations and visual feedback



This component plays a key role in delivering an interactive and engaging interface.



#### Masonry Layout



The masonry layout organizes pins in a visually appealing grid.



Dynamically adjusts the number of columns based on screen size

Distributes pins evenly across columns to maintain balance

Ensures responsiveness across different devices



This layout mimics Pinterest’s signature design and improves content discoverability.



#### Navbar



The navigation bar provides essential controls and navigation features.



Includes navigation links such as Home, Explore, and Create

Contains a search bar for filtering pins

Displays user-related icons such as notifications, messages, and profile



The search functionality is directly connected to the application’s state, enabling real-time updates.



#### Category Bar



The category bar allows users to filter content based on interests.



Displays categories as selectable pills

Highlights the currently active category

Supports horizontal scrolling for better usability on smaller screens



This feature enhances user navigation and content exploration.



#### Main Application Logic



The core logic of the application manages data flow and user interaction.

#### 

Maintains state for search queries and selected categories

Filters pins based on:

Selected category

Search keywords (matching title or author)

Passes filtered results to the layout component for rendering



This ensures efficient and dynamic updating of displayed content.



#### Conditional Rendering



The application includes logic to handle different display scenarios.



When matching pins are found, they are displayed in the masonry grid

When no results are found, a user-friendly message is shown



This improves the overall user experience by providing clear feedback.



#### Styling and Design



The application includes a comprehensive styling system.



Defines layout structure, typography, and color scheme

Implements hover effects and smooth transitions

Ensures responsiveness across various screen sizes



The design closely follows a modern, clean aesthetic inspired by Pinterest.



#### Application Flow



The system follows a straightforward interaction flow:



User inputs a search query or selects a category

The application updates its internal state

Pins are filtered based on the input

Filtered pins are displayed dynamically

The interface updates in real-time





#### Conclusion



This application successfully demonstrates the implementation of a responsive, interactive, and component-based user interface. By combining structured data, dynamic filtering, and modern design principles, it effectively recreates the core experience of a Pinterest-style platform.


# Pin Drop with Remarks Functionality

### Author: **SAUBHIK DEY**  
**Roll No.**: 121CS0166  
**Institute**: NIT Rourkela

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation Guide](#installation-guide)
5. [Usage Instructions](#usage-instructions)
6. [Screenshots](#screenshots)
7. [Future Enhancements](#future-enhancements)
8. [License](#license)

---

## Project Overview

The **Pin Drop with Remarks Functionality** project provides an interactive map tool that allows users to drop pins, add remarks, and view saved locations with auto-fetched addresses. Designed for simplicity and convenience, this tool enables users to save their pin data and access it across sessions, making it ideal for location tracking, trip planning, or place-marking purposes.

---

## Features

- **Interactive Map Interface**: Easily navigate and zoom in/out on the map to locate areas of interest.
- **Pin with Remarks**: Click on any location to drop a pin and enter a remark for easy identification.
- **Address Fetching**: The tool auto-fetches the address for each pin using the Nominatim API, providing context for the location.
- **Saved Pins List**: Displays all saved pins in a sidebar, including their remarks and fetched addresses.
- **Pin Navigation**: Clicking a saved pin in the sidebar navigates back to its location on the map.
- **Data Persistence with Local Storage**: Pins and remarks are saved and retained even when the page is reloaded.

---

## Technologies Used

- **HTML5** and **CSS3** for structure and styling.
- **JavaScript (ES6)** for interactivity.
- **Leaflet.js**: A powerful JavaScript library for interactive maps.
- **OpenStreetMap (Nominatim API)**: Used for address fetching via reverse geocoding.
- **Local Storage**: Ensures pin data persistence across sessions.

---

## Installation Guide

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Saubhik998/Pin-Drop-with-Remarks-Functionality.git
   cd Pin-Drop-with-Remarks-Functionality
   ```

2. Open `index.html` in a web browser:
   - You can double-click on `index.html` or right-click to select **Open with > [Your Preferred Browser]**.

---

## Usage Instructions

1. **Dropping Pins**: Navigate the map and click to drop a pin. This opens a popup where you can enter an optional remark.
2. **Address Fetching**: If enabled, the tool automatically fetches and displays the address for the dropped pin.
3. **Saving Pins**: Enter a remark and click "Save Pin" to add it to the sidebar.
4. **Viewing Pins**: Check the sidebar for all saved pins, each with its remark and fetched address.
5. **Navigating to Pins**: Click on a saved pin in the sidebar to recenter the map on its location.
6. **Deleting Pins**: To remove a pin, click the "Delete" button next to its entry in the sidebar.

---

## Screenshots

Add screenshots here to showcase:
- Map interface and pin dropping.
- Sidebar list with saved pins and remarks.
- Pin navigation functionality.

---

## Future Enhancements

- **User Authentication**: Allowing users to log in and save their data across devices.
- **Advanced Filtering**: Adding options to filter pins based on location, time, or remark content.
- **Cloud Storage Integration**: Use a cloud database for data persistence beyond local storage.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to personalize or extend this README as needed!

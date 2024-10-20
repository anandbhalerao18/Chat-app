# Chat-app

A real-time chat application built using Node.js, Express.js, and Socket.io. This project allows multiple users to connect to a server and communicate with each other in real time through a simple, user-friendly interface.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- **Real-time messaging**: Users can send and receive messages instantly.
- **User connection handling**: Tracks when users connect or disconnect.
- **Message broadcasting**: Messages are sent to all connected clients in real time.
- **Simple interface**: A basic, responsive front-end with minimal styling.

## Project Structure


- `server.js`: The main server-side code using Node.js, Express, and Socket.io.
- `public/index.html`: Frontend HTML for the chat interface.
- `public/style.css`: Basic CSS styling for the chat interface.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: Documentation for the project.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (Download from [Node.js official website](https://nodejs.org/))
- **npm** (Comes with Node.js)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/anandbhalerao18/Chat-app
    cd chat-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the server**:

    ```bash
    node server.js
    ```

4. **Open the application**:

   Open your web browser and navigate to:
   http://localhost:3000/


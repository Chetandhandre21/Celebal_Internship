# React Form Validation Assignment

This project is a registration form built with **React** and **Vite**. It demonstrates form validation, dynamic select options, and navigation using React Router. The form collects user details and validates them before submission.

## Features

- Modern React (with hooks and functional components)
- Form validation for all fields (including email, PAN, Aadhar, etc.)
- Show/hide password functionality
- Dynamic country and city selection
- Error messages for invalid or missing input
- Success page displaying submitted data
- Responsive and clean UI with custom CSS

## Folder Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx           # Main app with routing
│   ├── App.css           # App-level styles
│   ├── Form.jsx          # Registration form component
│   ├── Form.css          # Form-specific styles
│   ├── Sucess.jsx        # Success page component
│   ├── main.jsx          # React entry point
│   ├── index.css         # Global styles
│   └── assets/
│       └── react.svg
├── index.html            # HTML entry point
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```sh
   npm install


### Running the App
To start the development server:
```sh
npm run dev

The app will be available at `http://localhost:5173` by default.



## Usage
- Fill out all required fields in the registration form.
- The submit button is enabled only when all validations pass.
- On successful submission, you are redirected to a success page displaying your data.


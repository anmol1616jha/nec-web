# Course Management Application

A responsive React web application for managing and viewing educational courses. Users can browse available courses, view course details, access syllabi and question papers as PDFs, and explore chapter content.

## Features

- Browse available courses with descriptions and images
- View course details
- Access syllabi and model question papers (opens in new tab)
- Browse chapter lists for each course
- View chapter content, questions, and answers

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/course-management-app.git
cd course-management-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `src/components/` - React components for each page/section
- `src/data.js` - Course data in JSON format
- `src/textContent.js` - Text content for the application
- `public/` - Static assets including PDF files

## Adding New Courses

To add a new course, edit the `data.js` file and add a new course object to the `coursesData` array. Make sure to include:
- A unique `id`
- `title`, `description`, and `image` URL
- An array of `chapters` with their own content and questions
- Paths to the syllabus and question paper PDFs

## Technologies Used

- React
- React Router
- CSS for styling (responsive design)
- JavaScript (ES6+)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
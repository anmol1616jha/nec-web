# Course Management Application

## About the Website

A responsive React web application for exploring and managing NEC's course material. Users can browse available courses, view course details, open syllabi and model question papers as PDFs, and dive into chapter content with descriptions and videos.

## Repository Setup

1. Clone the repository:
```
git clone https://github.com/yourusername/nec-web.git
cd nec-web
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to `http://localhost:3000`.

## Features

- Browse available courses with descriptions and images
- View course details
- Access syllabi and model question papers (opens in new tab)
- Browse chapter lists for each course
- View chapter content, questions, and answers

## Project Structure

```
src/
  components/       # React components for each page/section
  constants/        # Application constants
  contexts/         # React context providers
  data/             # Course data in JSON format
  routes/           # Route configuration
  styles/           # Global styles
  App.js            # Main application component
  index.js          # Entry point
public/             # Static assets including PDF files
```

## Adding New Courses

To add a new course, edit `src/data/courseData.js` and add a new course object to the `courses` array. Make sure to include:
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

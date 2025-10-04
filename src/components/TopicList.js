import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';
import { getInitials } from '../utils/helpers';
import ChapterImage from './ChapterImage';

function TopicList() {
  const { courseTitle, chapterTitle } = useParams();
  const navigate = useNavigate();

  // Find the course by title
  const course = courses.find(c =>
    c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase()
  );

  // Handle course not found
  if (!course) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">{textContent.errors.notFound}</h1>
        <p className="mb-6">{textContent.errors.notFoundMessage}</p>
        <button
          onClick={() => navigate('/courses')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          {textContent.errors.goHome}
        </button>
      </div>
    );
  }

  // Find the chapter by title
  const chapter = course.chapters.find(ch =>
    ch.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase()
  );

  // Handle chapter not found
  if (!chapter) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">{textContent.errors.notFound}</h1>
        <p className="mb-6">{textContent.errors.notFoundMessage}</p>
        <button
          onClick={() => navigate(`/courses/${encodeURIComponent(course.title)}/chapters`)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Back to Chapters
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link
        to={`/courses/${encodeURIComponent(course.title)}/chapters`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {textContent.topicList.backToChapters}
      </Link>

      <h1 className="text-3xl font-bold mb-2">{chapter.title}</h1>
      <h2 className="text-xl text-gray-600 mb-6">{textContent.topicList.heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {chapter.topics.map((topic) => (
          <Link
            key={topic.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
            to={`/courses/${encodeURIComponent(course.title)}/chapters/${encodeURIComponent(chapter.title)}/topics/${encodeURIComponent(topic.title)}`}
          ><div className="p-6">
              <ChapterImage initials={getInitials(topic.title)} />
              <div className="flex justify-between items-center mb-2 mt-2">
                <h3 className="text-lg font-semibold mb-4">{topic.title}</h3>
                <MdOutlineDoubleArrow />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopicList;

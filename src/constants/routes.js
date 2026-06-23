export const ROUTES = {
  HOME:    '/',
  COURSES: '/courses',
  ABOUT:   '/about',
  CONTACT: '/contact',

  courseDetail:   (courseTitle)                          => `/courses/${encodeURIComponent(courseTitle)}`,
  chapters:       (courseTitle)                          => `/courses/${encodeURIComponent(courseTitle)}/chapters`,
  topicList:      (courseTitle, chapterTitle)            => `/courses/${encodeURIComponent(courseTitle)}/chapters/${encodeURIComponent(chapterTitle)}`,
  topicDetail:    (courseTitle, chapterTitle, topicTitle)=> `/courses/${encodeURIComponent(courseTitle)}/chapters/${encodeURIComponent(chapterTitle)}/topics/${encodeURIComponent(topicTitle)}`,
  courseQuiz:     (courseTitle)                          => `/courses/${encodeURIComponent(courseTitle)}/practice-questions`,
  chapterQuiz:    (courseTitle, chapterTitle)            => `/courses/${encodeURIComponent(courseTitle)}/chapters/${encodeURIComponent(chapterTitle)}/practice-questions`,
};

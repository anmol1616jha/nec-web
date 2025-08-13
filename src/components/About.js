import React from 'react';

function About() {
  const features = [
    {
      title: 'Course Outlines',
      description:
        'Browse NEC disciplines with chapter-wise coverage so you can focus on the exact syllabus.',
    },
    {
      title: 'Study Materials',
      description:
        'Access reference notes and PDF resources consolidated from various reliable sources.',
    },
    {
      title: 'Practice Questions',
      description:
        'Test yourself with MCQs and exam-style problems to gauge your preparation level.',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-4 text-[#2c3e50]">About This Site</h1>
          <p className="mb-4 text-gray-700">
            NEC Exam Companion is a personal project by
            {' '}
            <a
              href="https://anmol1616jha.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Anmol Jha
            </a>
            , aimed at helping fellow engineers prepare for the Nepal Engineering Council licensing exam.
          </p>
          <p className="mb-4 text-gray-700">
            Here you'll find curated chapters, study materials and practice questions for a range of engineering disciplines recognized by the NEC. The goal is to be a one-stop resource so you spend more time learning and less time searching for materials.
          </p>
          <p className="mb-6 text-gray-700">
            The site is still growing—new topics and questions are added regularly. If you notice any issues or want to contribute, feel free to reach out!
          </p>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-md p-4 border border-gray-200"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#2c3e50]">
                  {f.title}
                </h2>
                <p className="text-gray-700">{f.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            Built with <span className="font-semibold">React</span> and styled with{' '}
            <span className="font-semibold">Tailwind CSS</span>. More improvements and resources are on the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

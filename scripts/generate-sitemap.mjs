import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const SITE_URL = 'https://necexamprep.com';
const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const courseDataModule = await import(join(__dirname, '../src/data/courseData.js'));
  const { courses } = courseDataModule;

  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/courses', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.5', changefreq: 'monthly' },
  ];

  for (const course of courses) {
    const c = encodeURIComponent(course.title);
    urls.push({ path: `/courses/${c}`, priority: '0.8', changefreq: 'weekly' });
    urls.push({ path: `/courses/${c}/chapters`, priority: '0.8', changefreq: 'weekly' });
    urls.push({ path: `/courses/${c}/practice-questions`, priority: '0.7', changefreq: 'weekly' });

    for (const chapter of course.chapters || []) {
      const ch = encodeURIComponent(chapter.title);
      urls.push({ path: `/courses/${c}/chapters/${ch}`, priority: '0.7', changefreq: 'weekly' });
      urls.push({ path: `/courses/${c}/chapters/${ch}/practice-questions`, priority: '0.6', changefreq: 'weekly' });

      for (const topic of chapter.topics || []) {
        const t = encodeURIComponent(topic.title);
        urls.push({ path: `/courses/${c}/chapters/${ch}/topics/${t}`, priority: '0.6', changefreq: 'monthly' });
      }
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log(`✓ Sitemap generated with ${urls.length} URLs → public/sitemap.xml`);
})();

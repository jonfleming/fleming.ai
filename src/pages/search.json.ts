import type { APIRoute } from 'astro';
import { getArticles, getProjects, plainText } from '../lib/content';

export const GET: APIRoute = async () => {
	const articles = await getArticles();
	const projects = await getProjects();
	const items = [
		...articles.map((article) => ({
			kind: 'Article',
			title: article.data.title,
			description: article.data.description,
			url: `/articles/${article.id}/`,
			category: article.data.category,
			tags: article.data.tags,
			text: plainText(article.body ?? '').slice(0, 4000),
		})),
		...projects.map((project) => ({
			kind: 'Project',
			title: project.data.title,
			description: project.data.description,
			url: `/projects/${project.id}/`,
			category: project.data.category,
			tags: project.data.tags,
			text: [
				plainText(project.body ?? ''),
				project.data.hardware.join(' '),
				project.data.llm,
				project.data.memory,
				project.data.voice,
				project.data.vision,
				...project.data.log.map((entry) => entry.summary),
			]
				.filter(Boolean)
				.join(' ')
				.slice(0, 4000),
		})),
	];

	return new Response(JSON.stringify(items), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};

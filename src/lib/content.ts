import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS, type Topic } from '../consts';

export type Article = CollectionEntry<'articles'>;
export type Project = CollectionEntry<'projects'>;

export function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export async function getArticles() {
	const articles = await getCollection('articles', ({ data }) => {
		return import.meta.env.DEV || data.draft !== true;
	});
	return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => a.data.priority - b.data.priority || titleSort(a, b));
}

function titleSort(a: Project, b: Project) {
	return a.data.title.localeCompare(b.data.title);
}

export function topicForSlug(slug: string): Topic | undefined {
	return TOPICS.find((topic) => topic.slug === slug);
}

export function matchesTopic(category: string, tags: string[], topic: Topic) {
	if (topic.tag) {
		return tags.some((tag) => slugify(tag) === slugify(topic.tag!));
	}
	if (topic.category) {
		return slugify(category) === slugify(topic.category);
	}
	return slugify(category) === topic.slug;
}

export function articlesForTopic(articles: Article[], topic: Topic) {
	return articles.filter((article) =>
		matchesTopic(article.data.category, article.data.tags, topic),
	);
}

export function projectsForTopic(projects: Project[], topic: Topic) {
	return projects.filter((project) =>
		matchesTopic(project.data.category, project.data.tags, topic),
	);
}

export function collectTags(articles: Article[], projects: Project[]) {
	const tags = new Map<string, string>();
	for (const article of articles) {
		for (const tag of article.data.tags) tags.set(slugify(tag), tag);
	}
	for (const project of projects) {
		for (const tag of project.data.tags) tags.set(slugify(tag), tag);
	}
	return [...tags.entries()]
		.map(([slug, label]) => ({ slug, label }))
		.sort((a, b) => a.label.localeCompare(b.label));
}

export function plainText(markdown = '') {
	return markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
		.replace(/[#>*_~`]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

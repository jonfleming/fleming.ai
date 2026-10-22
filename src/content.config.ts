import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		hero: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['Active', 'Exploring', 'Paused', 'Complete']),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		hardware: z.array(z.string()).default([]),
		llm: z.string().optional(),
		memory: z.string().optional(),
		voice: z.string().optional(),
		vision: z.string().optional(),
		started: z.coerce.date().optional(),
		updated: z.coerce.date().optional(),
		featured: z.boolean().default(false),
		priority: z.number().default(50),
		hero: z.string().optional(),
		log: z
			.array(
				z.object({
					date: z.coerce.date(),
					summary: z.string(),
					article: z.string().optional(),
				}),
			)
			.default([]),
	}),
});

export const collections = { articles, projects };

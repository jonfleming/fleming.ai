import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getArticles } from '../lib/content';

export async function GET(context) {
	const articles = await getArticles();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: articles.map((article) => ({
			title: article.data.title,
			description: article.data.description,
			pubDate: article.data.date,
			categories: [article.data.category, ...article.data.tags],
			link: `/articles/${article.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}

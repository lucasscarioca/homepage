import type { APIRoute } from 'astro';

const pages = [''];

export const GET: APIRoute = ({ site }) => {
	const urls = pages
		.map((path) => {
			const loc = new URL(path || '/', site).toString();
			return `<url><loc>${loc}</loc></url>`;
		})
		.join('');

	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
		urls +
		'</urlset>';

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};

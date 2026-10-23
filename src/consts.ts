export const SITE_TITLE = 'Fleming AI';
export const SITE_DESCRIPTION =
	'Exploring practical AI, robotics, voice assistants and intelligent homes.';
export const AUTHOR = 'Jon Fleming';
export const EMAIL = 'me@jonfleming.com';

export const SOCIAL_LINKS = [
	{ name: 'Email', href: 'mailto:me@jonfleming.com' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/jon-fleming-6371504/' },
	{ name: 'YouTube', href: 'https://www.youtube.com/channel/UC6JySunQLW1FsMoZ4NGASRw' },
	{ name: 'Twitter', href: 'https://twitter.com/Techion' },
	{ name: 'Instagram', href: 'https://www.instagram.com/seattlemochaman/' },
	{ name: 'Facebook', href: 'https://www.facebook.com/jon.eric.fleming' },
];

export interface Topic {
	slug: string;
	title: string;
	description: string;
	category?: string;
	tag?: string;
	featured?: boolean;
}

export const TOPICS: Topic[] = [
	{
		slug: 'robotics',
		title: 'Robotics',
		description:
			'Reachy Mini experiments, robot personalities, vision, memory and interaction.',
		category: 'Robotics',
		featured: true,
	},
	{
		slug: 'home-assistant',
		title: 'Home Assistant',
		description:
			'Home automation, local AI, ESPHome, voice control and intelligent agents.',
		category: 'Home Assistant',
		featured: true,
	},
	{
		slug: 'esp32',
		title: 'ESP32',
		description:
			'ESP32-S3 projects, displays, sensors, microphones, voice interfaces and embedded AI.',
		category: 'ESP32',
		featured: true,
	},
	{
		slug: 'voice-ai',
		title: 'Voice AI',
		description:
			'Speech-to-speech, local LLMs, TTS, STT, WebRTC and conversational agents.',
		category: 'Voice AI',
		featured: true,
	},
	{
		slug: 'ai',
		title: 'AI Agents',
		description:
			'Memory, tools, local models, agent architectures and Fleming AI experiments.',
		category: 'AI',
		featured: true,
	},
	{
		slug: 'tools',
		title: 'Tools',
		description: 'Small desk tools, and the files that keep them honest.',
		category: 'Tools',
	},
	{
		slug: 'reachy-mini',
		title: 'Reachy Mini',
		description:
			'A desk companion with local models, persistent memory, voice, and vision.',
		tag: 'Reachy Mini',
	},
];

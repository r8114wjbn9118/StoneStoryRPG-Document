import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Stone Story RPG石头纪中文文档",
	titleTemplate: false,

	head: [['link', { rel: 'icon', href: '/image/favicon.ico' }]],
	lang: 'zh-CN',

	appearance: false,
	
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		nav: [
			{ text: '简介', link: './index' },
			{ text: 'Stonescript', link: './Stonescript' },
			{ text: 'dnspy', link: './dnSpy' },
		],

		aside: 'left',

		outline: {
			level: [2, 3],
			label: "目录 Index"
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/r8114wjbn9118/StoneStoryRPG-Document' },
			{ icon: 'steam', link: 'https://store.steampowered.com/app/603390' },
			{ icon: 'discord', link: 'http://discord.gg/StoneStoryRPG' },
			{ icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=5fQO9XI' }
		],

		footer: {
			message: 'Released under the CC-BY-SA-4.0 License.',
			copyright: 'Copyright Martian Rex, Inc.<br>翻译：逃税奸商'
		},

		lastUpdated: {
			text: 'Updated at',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium'
			}
		},

	},
})

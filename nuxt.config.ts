// https://v3.nuxtjs.org/api/configuration/nuxt.config
const normalizeOutputName = (name = 'asset') => {
	const normalized = name
		.replace(/\[([^\]]+)\]/g, '$1')
		.replace(/^_+/, '')
		.replace(/^plugin-/, 'plugin-')
	return normalized || 'asset'
}

export default defineNuxtConfig({
	target: 'static',
	modules: ['@nuxtjs/tailwindcss'],
	experimental: {
		payloadExtraction: false
	},
	app: {
		buildAssetsDir: '/nuxt/',
		head: {
			charset: 'utf-8',
			title: 'ISecLab',
			meta: [
				{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
				{ name: 'description', content: 'ISecLab' }
			]
		}
	},
	tailwindcss: {
		config: {
			theme: {
				screens: {
					'sm': '640px',
					// => @media (min-width: 640px) { ... }
	
					'md': '768px',
					// => @media (min-width: 768px) { ... }
	
					'lg': '1024px',
					// => @media (min-width: 1024px) { ... }
	
					'xl': '1280px',
					// => @media (min-width: 1280px) { ... }
	
					'2xl': '1536px',
					// => @media (min-width: 1536px) { ... }
				},
				extend: {
					height: {
						'100': '25rem',
						'104': '26rem'
					}
				}
			}
		}
	},
	css: [
		'~/assets/style/base.scss',
	],
	vite: {
		build: {
			rollupOptions: {
				output: {
					entryFileNames: (chunkInfo) => `nuxt/${normalizeOutputName(chunkInfo.name)}.[hash].js`,
					chunkFileNames: (chunkInfo) => `nuxt/${normalizeOutputName(chunkInfo.name)}.[hash].js`,
					assetFileNames: (assetInfo) => {
						const name = assetInfo.name?.split(/[\\/]/).pop()?.replace(/\.[^.]+$/, '')
						return `nuxt/${normalizeOutputName(name)}.[hash][extname]`
					}
				}
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/style/variable.scss" as *;'
				}
			}
		}
	}
})
  

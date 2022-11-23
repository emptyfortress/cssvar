import { createRouter, createWebHashHistory } from 'vue-router'
import Vars from '@/pages/Vars.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		bread: string[]
	}
}

const routes = [
	{
		path: '/',
		name: 'vars',
		component: Vars,
		meta: { title: 'Docsvision docs', bread: ['Web-client'] },
	},
	{
		path: '/components',
		name: 'components',
		component: () => import('@/pages/Comp.vue'),
		meta: { title: 'Docsvision docs', bread: ['Web-client', 'Release notes'] },
	},
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})

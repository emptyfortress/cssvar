import { createApp } from 'vue'
import { Quasar, Notify, Loading } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/assets/style/main.scss'
import { createPinia } from 'pinia'
import { router } from '@/router/router'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
	plugins: {
		Notify,
		Loading,
	},
	config: {
		notify: {
			// type: 'warning',
			position: 'bottom-right',
			timeout: 3000,
			icon: 'mdi-alert',
			color: 'primary',
			classes: 'notific',
		},
		loading: {
			delay: 100,
			html: true,
			spinnerSize: 120,
		},
	},
})

myApp.use(createPinia())
myApp.use(router)
myApp.mount('#app')

<template lang="pug">
q-layout(view="hHh Lpr lff")
	q-header(bordered class="bg-grey text-white text-left")
		//- q-toolbar
		//- 	q-btn(dense flat round icon="menu" @click="drawer = !drawer")
		//- 	q-toolbar-title Title

		q-tabs(align="center")
			q-route-tab(to="/" label="Переменные")
			q-route-tab(to="/components" label="Компоненты")

	q-drawer(show-if-above v-model="drawer" side="left" bordered)
		q-list(bordered separator)

	q-page-container
		router-view(v-slot="{ Component }")
			transition(name="slide-fade" mode="out-in")
				component(:is="Component")
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
</script>

<style lang="scss">
.slide-fade-enter {
	transform: translateX(10px);
	opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.2s ease;
}

.slide-fade-leave-to {
	transform: translateX(-10px);
	opacity: 0;
}
</style>

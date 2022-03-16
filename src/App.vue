<template>
	<div id="app">
		<router-view></router-view>
		<FooterGuide v-if="$route.meta.isShow"></FooterGuide>
	</div>

</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default {
		name: 'App',
		components: {
			FooterGuide
		}
	}
</script>

<style lang="less">
#app{
	width: 100%;
	height: 100%;
	background-color: #f5f5f5
}
</style>

<template>
	<div class="footerGuide_wrap">
		<ul>
			<li class="item" :class="item.active?'active':''" @click="routeTo(item.route,index)"
				v-for="(item,index) in guideList" :key="item.route">
				<span class="iconfont" :class="item.icon"></span>
				<span class="txt">{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				guideList: [{
					icon: 'icon-waimai',
					text: '外卖',
					route: '/msite',
					active: true
				}, {
					icon: 'icon-Search',
					text: '搜索',
					route: '/search',
					active: false
				}, {
					icon: 'icon-order',
					text: '订单',
					route: '/order',
					active: false
				}, {
					icon: 'icon-person',
					text: '我的',
					route: '/profile',
					active: false
				}, ]
			}
		},
		methods: {
			routeTo(path, index) {
				this.$router.replace({
					path: path
				})
				this.guideList.forEach((item, index) => {
					item.active = false
				})
				this.guideList[index].active = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.footerGuide_wrap {
		position: fixed;
		bottom: 0;
		z-index: 100;
		width: 100%;
		font-size: 12px;
		border-top: 1px solid #e4e4e4;
		background-color: #fff;

		ul {
			display: flex;
			align-items: center;
			color: #999999;
			height: 50px;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				flex: 1;

				.iconfont {
					font-size: 22px;
				}

				.txt {}
			}

			.active {
				color: #02a774
			}
		}
	}
</style>

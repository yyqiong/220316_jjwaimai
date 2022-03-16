<template>
	<div class="msite_wrap">
		<Header>
			<template>
				<span class="header_search">
					<i class="iconfont icon-Search"></i>
				</span>
				<span class="herder_title">
					<span class="header_title_text ellipsis">王家桥农贸市场小吃街众善缘堂招牌处二楼</span>
				</span>
				<span class="herder_login">
					<span class="herder_login_text">登录 | 注册</span>
				</span>
			</template>
		</Header>

		<div class="msite_nav">
			<div class="swiper-container">
				<div class="swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a :href="item.href" class="link_to_food" v-for="item in navList" :key="item.name">
								<div class="img_container">
									<img :src="item.img">
								</div>
								<span class="txt">{{item.title}}</span>
							</a>
						</div>
						<div class="swiper-slide">
							<a :href="item.href" class="link_to_food" v-for="item in navList" :key="item.name">
								<div class="img_container">
									<img :src="item.img">
								</div>
								<span class="txt">{{item.title}}</span>
							</a>
						</div>

					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

				</div>
			</div>
		</div>

		<div class="msite_shop_list">
			<div class="msite_shop_list_header">
				<i class="iconfont icon-xuanxiang"></i>
				<span class="msite_shop_list_title">附近商家</span>
			</div>
			<ShopList></ShopList>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/swiper-bundle.min.css'
	import Header from '../../components/Header/Header.vue'
	import ShopList from "../../components/ShopList/ShopList.vue"
	export default {
		components: {
			Header,ShopList
		},
		data() {
			return {
				navList: [{
					href: 'https://www.baidu.com',
					img: './images/nav/meishi.png',
					title: '美食'
				}, {
					href: '',
					img: './images/nav/chaoshi.png',
					title: '超市'
				}, {
					href: '',
					img: './images/nav/shuguo.png',
					title: '生鲜果蔬'
				}, {
					href: '',
					img: './images/nav/zhuansong.png',
					title: '小江专送'
				}, {
					href: '',
					img: './images/nav/jianshikuaican.png',
					title: '快食简餐'
				}, {
					href: '',
					img: './images/nav/hanbao.png',
					title: '甜点饮品'
				}, {
					href: '',
					img: './images/nav/jiachangcai.png',
					title: '家常菜'
				}, {
					href: '',
					img: './images/nav/xiaochiguan.png',
					title: '小吃馆'
				}, ]
			}
		},
		mounted() {
			new Swiper('.swiper', {
				direction: 'horizontal', // 垂直切换选项
				// loop: true, // 循环模式选项

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar'
				},

				// // 如果需要前进后退按钮
				// navigation: {
				// 	nextEl: '.swiper-button-next',
				// 	prevEl: '.swiper-button-prev',
				// },

				// // 如果需要滚动条
				// scrollbar: {
				// 	el: '.swiper-scrollbar',
				// },
			})
		}
	}
</script>

<style lang="less">
	.msite_wrap {
		height: calc(100vh - 50px);

		.header_search {
			display: inline-block;
			width: 40px;

			.iconfont {
				font-size: 28px;

			}
		}

		.herder_title {
			flex: 1;
			padding: 0 10px;

			.header_title_text {
				display: inline-block;
				width: 200px;
				font-size: 16px;
			}
		}

		.herder_login {
			display: inline-block;
			width: 70px;

			.herder_login_text {
				font-size: 14px;
			}
		}


		.msite_nav {
			background-color: #fff;

			.swiper-container {
				height: 200px;

				.swiper {
					width: 100%;
					height: 100%;


					/* 两种都可以 */
					.swiper-wrapper {
						.swiper-slide {
							display: flex;
							flex-wrap: wrap;
							align-items: center;

							.link_to_food {
								width: 25%;
								height: 50%;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;


								.img_container {
									width: 44px;
									height: 44px;

									img {
										width: 100%;
										height: 100%;
									}
								}

								.txt {
									font-size: 14px;
									color: #222426;
									margin-top: 5px;
								}
							}
						}
					}
				}
			}
		}

		
	}
</style>

<template>
	<div class="profile_wrap">
		<Header>
			<template>
				<div class="profile_header">
					个人中心
				</div>
			</template>
		</Header>

		<div class="profile_login" @click="routeTo">
			<div class="avator">
				<img src="../../../public/images/profile/touxiang.webp">
			</div>
			<div class="login">
				<p class="txt">登录/注册</p>
				<p class="tel"><i class="iconfont icon-mobile"></i><i>暂无绑定手机号</i></p>
			</div>
			<div class="more">
				<i class="iconfont icon-right"></i>
			</div>
		</div>

		<ul class="profile_data">
			<li class="data_item">
				<p class="num"><b>0.00</b>元</p>
				<p class="txt">我的余额</p>
			</li>
			<li class="data_item">
				<p class="num"><b>0</b>个</p>
				<p class="txt">我的优惠</p>
			</li>
			<li class="data_item">
				<p class="num"><b>0</b>分</p>
				<p class="txt">我的积分</p>
			</li>
		</ul>

		<ul class="other_server">
			<li class="server_item"><i class="iconfont icon-order"></i><span class="server_title">我的订单</span></li>
			<li class="server_item"><i class="iconfont icon-jifen"></i><span class="server_title">商城积分</span></li>
			<li class="server_item"><i class="iconfont icon-fuwu_o"></i><span class="server_title">服务中心</span></li>
			<li class="server_item"><i class="iconfont icon-person"></i><span class="server_title">会员卡</span></li>
			
		</ul>

	</div>
</template>

<script>
	import Header from '../../components/Header/Header.vue';
	export default {
		components: {
			Header
		},
		methods: {
			routeTo() {
				this.$router.push({
					path:'/login'
				})
			}
		},
	}
</script>

<style lang="less">
	.profile_wrap {
		background-color: #fff;

		.profile_header {
			width: 100%;
			text-align: center;

		}

		.profile_login {
			padding: 10px 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100px;
			background-color: #02a774;
			border-top: 1px solid #fff;
			color: #fff;

			.avator {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 10px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.login {
				flex: 1;

				.txt {}

				.tel {
					margin-top: 10px;

					i {
						font-style: normal;
						font-size: 14px;
					}

					.iconfont {
						font-size: 18px;
					}
				}
			}

			.more {
				width: 20px;

				.iconfont {}
			}
		}

		.profile_data {
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #e2e3e4;
			;

			.data_item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-right: 1px solid #e2e3e4;

				&:last-child {
					border-right: 0
				}

				&:nth-child(1) b {
					color: #ff9327;
				}

				&:nth-child(2) b {
					color: #ff6b26;
				}

				&:nth-child(3) b {
					color: #a4c50f;
				}

				.num {
					font-size: 12px;

					b {
						font-size: 18px;
					}
				}

				.txt {
					font-size: 12px;
					margin-top: 10px;
					color: #222426;
				}
			}
		}

		.other_server {
			color: #222426;
			padding: 0 5px;
			width: 100%;
			max-height: calc(100vh - 290px);
			overflow-y: auto;
			.server_item{
				display: flex;
				align-items: center;
				font-size: 14px;
				height: 40px;
				width: 100%;
				border-bottom: 1px solid #e2e3e4;
				position: relative;
				
				&:after{
					content: '\e6a3';
					position: absolute;
					right: 0;
					font-family: "iconfont" !important;
					font-size: 14px;
					color: #c7c7c8;
				}
				&:nth-child(1) .iconfont{
					color: #63A35C;
				}
				&:nth-child(2) .iconfont{
					color: #d38423;
				}
				&:nth-child(3) .iconfont{
					color: #a36c9a;
				}
				&:nth-child(4) .iconfont{
					color: #6da39d;
				}
				.iconfont{
					font-size: 20px;
				}
				.server_title{
					margin-left: 5px;
				}
			}
		}
	}
</style>

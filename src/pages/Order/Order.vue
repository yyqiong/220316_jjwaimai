<template>
	<div class="order_wrap">
		<Header>
			<template>
				<div class="order_header">
					订单列表
				</div>
			</template>
		</Header>
		
		<div class="order_no_login">
			<img src="../../../public/images/order/nologin.jpg" >
			<p>登陆后查看外卖订单~</p>
			<button type="button">立即登录</button>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/Header/Header.vue';
	export default {
		components: {
			Header
		},
	}
</script>

<style lang="less">
	.order_wrap{
		background-color: #fff;
		
		.order_header{
			width: 100%;
			text-align: center;
		}
		.order_no_login{
			display: flex;
			flex-direction: column;
			align-items: center;
			height: calc(100vh - 90px);
			padding-top: 20px;
			img{
				width: 300px;
				height: 300px;
			}
			p{
				font-size: 14px;
			}
			button{
				color: #fff;
				background-color: #02a774;
				border: 0;
				width: 100px;
				height: 40px;
				border-radius: 10px;
				margin-top: 20px;
			}
		}
	}
</style>

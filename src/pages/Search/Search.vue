<template>
	<div class="search_wrap">
		<Header>
			<template>
				<div class="search_header">
					搜索
				</div>
			</template>
		</Header>

		<form action="" method="" class="search_form">
			<input type="search" name="search" placeholder="请输入商家或美食名称" class="search_ipt"/>
			<button type="button" class="search_btn">搜索</button>
		</form>
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

<style lang="less" scoped>
	.search_wrap{
		.search_header {
			width: 100%;
			text-align: center;
		}
		.search_form{
			display: flex;
			height: 50px;
			padding: 10px;
			.search_ipt{
				flex: 1;
				border: 1px solid #02a774;
				border-radius:15px ;
				padding-left: 10px;
				&:focus{
					outline: none;
				}
			}
			.search_btn{
				width: 50px;
				border-radius: 10px;
				margin-left: 10px;
				border: none;
				background-color: #02a774;
				color: #fff;
			}
		}
	}
</style>

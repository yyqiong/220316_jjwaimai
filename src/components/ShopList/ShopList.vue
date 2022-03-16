<template>
	<div class="msite_shop_list_container">
		<ul class="msite_shop_items">
			<li class="msite_shop_item">
				<a>
					<div class="item_left">
						<img src="../../../public/images/shop/img1.jpg">
					</div>
					<div class="item_right">
						<div class="shop_detail">
							<div class="shop_title">
								<span class="brand">品牌</span>
								<span class="txt">思乡记(中大国际)</span>
							</div>
							<div class="shop_data">
								<span class="score">4.0</span>
								<span class="saleNum">月售106单</span>
							</div>
							<div class="dispatch">
								￥20起送 / 配送费￥5
							</div>
						</div>
						<div class="shop_promise">
							<div class="label">
								<span class="option"> 保</span>
								<span class="option"> 准</span>
								<span class="option"> 票</span>
							</div>
							<div class="dispatch_method">
								<span class="spe">小江专送</span>
							</div>
						</div>
					</div>
				</a>
			</li>
			<li class="msite_shop_item">
				<a>
					<div class="item_left">
						<img src="../../../public/images/shop/img2.png">
					</div>
					<div class="item_right">
						<div class="shop_detail">
							<div class="shop_title">
								<span class="brand">品牌</span>
								<span class="txt">德克士(未来方舟)</span>
							</div>
							<div class="shop_data">
								<span class="score">4.0</span>
								<span class="saleNum">月售106单</span>
							</div>
							<div class="dispatch">
								￥20起送 / 配送费￥5
							</div>
						</div>
						<div class="shop_promise">
							<div class="label">
								<span class="option"> 保</span>
								<span class="option"> 准</span>
								<span class="option"> 票</span>
							</div>
							<div class="dispatch_method">
								<span class="spe">小江专送</span>
							</div>
						</div>
					</div>
				</a>
			</li>
			<li class="msite_shop_item">
				<a>
					<div class="item_left">
						<img src="../../../public/images/shop/img3.png">
					</div>
					<div class="item_right">
						<div class="shop_detail">
							<div class="shop_title">
								<span class="brand">品牌</span>
								<span class="txt">肯德基(亨特)</span>
							</div>
							<div class="shop_data">
								<span class="score">4.0</span>
								<span class="saleNum">月售106单</span>
							</div>
							<div class="dispatch">
								￥20起送 / 配送费￥5
							</div>
						</div>
						<div class="shop_promise">
							<div class="label">
								<span class="option"> 保</span>
								<span class="option"> 准</span>
								<span class="option"> 票</span>
							</div>
							<div class="dispatch_method">
								<span class="spe">小江专送</span>
							</div>
						</div>
					</div>
				</a>
			</li>
			<li class="msite_shop_item">
				<a>
					<div class="item_left">
						<img src="../../../public/images/shop/img2.png">
					</div>
					<div class="item_right">
						<div class="shop_detail">
							<div class="shop_title">
								<span class="brand">品牌</span>
								<span class="txt">德克士(未来方舟)</span>
							</div>
							<div class="shop_data">
								<span class="score">4.0</span>
								<span class="saleNum">月售106单</span>
							</div>
							<div class="dispatch">
								￥20起送 / 配送费￥5
							</div>
						</div>
						<div class="shop_promise">
							<div class="label">
								<span class="option"> 保</span>
								<span class="option"> 准</span>
								<span class="option"> 票</span>
							</div>
							<div class="dispatch_method">
								<span class="spe">小江专送</span>
							</div>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="less">
	.msite_shop_list {
		background-color: #fff;
		margin-top: 10px;
		padding: 0 5px;
	
		.msite_shop_list_header {
			color: #575859;
			padding: 10px 0;
	
			.iconfont {}
	
			.msite_shop_list_title {
				padding-left: 5px;
			}
	
		}
	
		.msite_shop_list_container {
			.msite_shop_items {
				height: calc(100vh - 336px);
				overflow-y: auto;
	
				.msite_shop_item {
					padding-bottom: 20px;
	
					a {
						display: flex;
	
						.item_left {
							display: flex;
							align-items: center;
							width: 80px;
							height: 80px;
							margin-right: 10px;
	
							img {
								width: 100%;
	
							}
						}
	
						.item_right {
							flex: 1;
							display: flex;
							justify-content: space-between;
	
							.shop_detail {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
	
								.shop_title {
									.brand {
										background-color: #FFCC33;
										font-size: 12px;
										margin-right: 5px;
										border-radius: 5px;
										padding: 0 2px;
									}
	
									.txt {
										font-size: 14px;
										font-weight: bold;
									}
								}
	
								.shop_data {
									font-size: 12px;
	
									.score {
										color: #f17923;
										margin-right: 5px;
									}
	
									.saleNum {
										color: #858687;
									}
								}
	
								.dispatch {
									color: #858687;
									font-size: 12px;
								}
							}
	
							.shop_promise {
								display: flex;
								flex-direction: column;
								justify-content: center;
	
								.label {
									.option {
										display: inline-block;
										font-size: 12px;
										color: #858687;
										background-color: #e8e8e8;
										margin-left: 2px;
										border-radius: 5px;
										padding: 2px;
									}
								}
	
								.dispatch_method {
									margin-top: 5px;
									font-size: 12px;
									color: #02a774;
									background-color: rgba(2, 167, 116, .2);
									padding: 2px;
									border-radius: 5px;
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}
		
</style>

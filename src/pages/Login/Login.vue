<template>
	<div class="login_wrap">
		<i class="iconfont icon-arrow-left-bold back" @click="goBack"></i>
		<div class="login_title">
			<span class="txt">小江外卖</span>
		</div>
		
		<div class="login_msg">
			<ul class="login_methods">
				<li class="tel" :class="showForm=='tel'?'active':''" @click="showForm = 'tel'">短信登录</li>
				<li class="psw" :class="showForm=='psw'?'active':''" @click="showForm = 'psw'">密码登录</li>
			</ul>
			<div class="login_detail">
				<form action="" method="" class="login_detail_tel" v-if="showForm == 'tel'">
					<div class="tel_wrap">
						<input type="tel" name="" id="" value="" placeholder="手机号" />
						<button type="button" class="get_yzm">获取验证码</button>
					</div>
					<div class="yzm_wrap">
						<input type="tel" name="" id="" value="" placeholder="验证码" />
					</div>
					<p class="agree">温馨提示:为主车硅谷外卖账号的手机号,登陆时将自动注册,且代表已同意<i>《用户服务协议》</i></p>
					
					<button type="button" class="submit">登录</button>
					
					
					
				</form>
				
				<form action="" method="" class="login_detail_psw" v-else>
					<div class="tel_wrap">
						<input type="tel" name="" id="" value="" placeholder="手机号" />
						<button type="button" class="get_yzm">获取验证码</button>
					</div>
					<div class="psw_wrap">
						<input type="tel" name="" id="" value="" placeholder="密码" />
						<button type="button">显示密码</button>
					</div>
					
					<div class="yzm_wrap">
						<input type="tel" name="" id="" value="" placeholder="验证码" />
						<button type="button">验证码</button>
					</div>
					
					<button type="button" class="submit">登录</button>
					
					
					
				</form>
				
			</div>
			<div class="about_us">关于我们</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showForm:'tel'
			}
		},
		methods: {
			goBack() {
				this.$router.back()
			}
		},
	}
</script>

<style lang="less">
	.login_wrap{
		background-color: #fff;
		padding: 60px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.back{
			position: fixed;
			font-size: 24px;
			top: 20px;
			left: 5px;
			color: #666666;
		}
		.login_title{
			font-size: 24px;
			font-weight: bold;
			color: #02a774;
			margin-bottom: 40px;
			.txt{}
		}
		.login_msg{
			width: 100%;
			.login_methods{
				display: flex;
				justify-content: center;
				margin-bottom: 20px;
				.tel,.psw{
					font-size: 14px;
					line-height: 1.5;
				}
				.psw{
					margin-left: 30px;
				}
				.active{
					color: #02a774;
					font-weight: bold;
					border-bottom: 2px solid #02a774;
				}
			}
			.login_detail{
				.login_detail_tel,.login_detail_psw{
					.tel_wrap,.yzm_wrap,.psw_wrap{
						width: 100%;
						height: 40px;
						border: 1px solid #c5c5c5;
						position: relative;
						padding-left: 5px;
						input{
							border: none;
							height: 36px;
							
							&:focus{
								outline: none;
							}
						}
						button{
							position: absolute;
							right: 0;
							top: 50%;
							transform: translateY(-50%);
							border: 0;
							background-color: #fff;
							color: #c5c5c5;
						}
					}
					.yzm_wrap,.psw_wrap{
						margin-top: 20px;
						
					}
					.agree{
						font-size: 12px;
						color: #666666;
						margin-top: 20px;
						line-height: 1.5;
						i{
							font-style: normal;
							color: #02a774;
							font-weight: bold;
						}
					}
					.submit{
						margin-top: 40px;
						width: 100%;
						height: 40px;
						color: #fff;
						background-color: #02a774;
						font-size: 18px;
						border: none;
						border-radius: 20px;
					}
				}
				
			}
			
		}		
		.about_us{
			margin-top: 20px;
			width: 100%;
			text-align: center;
			color: #666666;
			font-size: 12px;
		}
	}
</style>

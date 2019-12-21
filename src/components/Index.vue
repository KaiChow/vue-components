<template>
	<div>
		<k-button type="fail" text="提交按钮" @click.native="comfirm">展示自定义的弹框</k-button>
		<k-button type="default" text="提交按钮" @click.native="btn">展示自定义的弹框</k-button>
	</div>
</template>
<script>
	import KButton from './button/Button'
	export default {
		components: {
			KButton
		},
		methods: {
			btn() {
				this.$msgBox.showMsgBox({
					title:"",
					content: `<p class="info">姓名：Kevin</p><p class="info">年龄：20</p><p class="info">电话：135****3619</p>`,
					hasMore:true//内容是简单的提示还是多行提示
				}).then(async () => {
					window.console.log('object')
					// ...        
				}).catch(() => {
					// ...
				});
			},
			comfirm() {
				this.KDialog({
					title: "温馨提示",
					content: `请输入完整信息,信息失败`,
					cancelBtn: true, //这个是启用取消按钮，
					canclickbale: false, //是否点击遮罩层关闭
					close() {
						// 这里执行点击右上角需要做的事，默认执行关闭弹框
						window.console.log("关闭");
					},
					confirm() {
						// 这里执行点击确定按钮需要做的事，默认执行关闭弹框
						window.console.log("确认");
					},
					cancel() {
						// 这里执行点击取消按钮需要做的事，默认执行关闭弹框
						window.console.log("取消");
					}
				});
			}
		}
	};
</script>

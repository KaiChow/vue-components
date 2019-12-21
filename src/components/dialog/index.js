import Vue from 'vue'; 
import Dialog from './Dialog.vue'; //引入刚才写的弹框组件 
let DialogConstructor = Vue.extend(Dialog); // 返回一个“扩展实例构造器” 

let DialogModal = (o) => {
  let DialogDom = new DialogConstructor({
    el: document.createElement('div') //将Alert组件挂载到新创建的div上
  })
  document.body.appendChild(DialogDom.$el); //把Alert组件的dom添加到body里 
	
  // 标题
  DialogDom.title = o.title || '信息';
  // 单条内容
  DialogDom.content = o.content;
  // 关闭按钮
  DialogDom.cancelBtn = o.cancelBtn;

  // 弹框三个事件 右上角关闭 确定 取消
  DialogDom.a_close = o.close || null;
  DialogDom.a_confirm = o.confirm || null;
  DialogDom.a_cancel = o.cancel || null;

}


export default DialogModal;

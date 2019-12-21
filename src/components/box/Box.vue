<template>
  <div id="tip_alertModal" v-show="isShowMessageBox">
    <div class="t-alert-mask" @click="cancel"></div>
    <div class="t-alert-container">
      <div class="t-alert-title">
        <span>
          {{ title }}
        </span>
        <img @click="cancel" src="../../assets/close-2.png" alt="" />
      </div>
      <div class="t-alert-content" v-show="!hasMore">
        <p class="content-text">
          {{ content }}
        </p>
      </div>
      <div class="t-alert-content" v-show="hasMore">
        <div v-html="content" class="more-content"></div>
      </div>

      <div class="t-alert-confirm">
        <p @click="confirm" v-show="isShowConfimrBtn">
          {{ confirmBtnText }}
        </p>
        <p class="cancel-btn" v-show="isShowCancelBtn" @click="cancel">
          {{ cancelBtnText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    hasMore: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: "这是弹框内容"
    },
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    confirmBtnText: {
      type: String,
      default: "确定"
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: "",
      reject: "",
      promise: "" // 使用保存promise对象
    };
  },
  methods: {
    // 确定,将promise断定为resolve状态
    confirm: function() {
      this.isShowMessageBox = false;
      this.resolve("confirm");
      this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel: function() {
      this.isShowMessageBox = false;
      this.reject("cancel");
      this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox: function() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    remove: function() {
      setTimeout(() => {
        this.destroy();
      }, 300);
    },
    destroy: function() {
      this.$destroy();
      // window.console.log(this);
      document.body.removeChild(this.$el);
    }
  }
};
</script>
<style lang="scss">
#tip_alertModal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  .t-alert-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .t-alert-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13.8rem;
    min-height: 8.25rem;
    height: auto;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 4px;

    .t-alert-title {
      position: relative;
      width: 100%;
      height: 40px;
      line-height: 40px;
      // background-color: rgba(115, 134, 255, 1);
      border-radius: 4px 4px 0px 0px;

      span {
        position: absolute;
        top: 50%;
        left: 10px;
        font-weight: 500;
        font-size: 16px;
        color: #384164;
        transform: translate(0, -50%);
      }

      img {
        position: absolute;
        top: 50%;
        height: 1.4rem;
        width: 1.4rem;
        right: 10px;
        transform: translate(0, -50%);
        cursor: pointer;
      }
    }

    .t-alert-content {
      text-align: center;
      font-size: 1rem;
      .more-content {
        margin: 10px;
        padding: 0 25px;
        .info {
          margin: 5px 0;
          text-align: left;
          color: #384164;
        }
      }
      span.content-text {
        display: inline-block;
        width: 100%;
        height: auto;
        font-weight: 400;
        font-size: 1rem;
        color: #384164;
        padding: 0.4rem 0.36rem;
      }
    }

    .t-alert-confirm {
      font-size: 1rem;
      width: 100%;
      text-align: center;
      display: flex;
      border-top: 1px solid #979797;
      justify-content: space-around;
      align-items: center;
      p {
        color: #384164;
        margin: 8px 0;
      }
    }
  }
}
</style>

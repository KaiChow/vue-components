<template>
  <button :class="type + '-btn'">{{ text }}</button>
</template>

<script>
export default {
  name: "k-button",
  props: {
    text: {
      type: String,
      default: "确认"
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style scoped lang="scss">
.default-btn {
  margin: 10px 0;
  outline: none;
  width: 100%;
  height: 38px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 38px;
  text-align: center;
  border: 1px solid #dddddd;
  font-size: 16px;
}
.success-btn {
  margin: 10px 0;
  outline: none;
  width: 100%;
  height: 38px;
  color: #409eff;
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 38px;
  text-align: center;
  border: 1px solid #409eff;
  font-size: 16px;
}
.fail-btn {
  margin: 10px 0;
  outline: none;
  border: none;
  width: 100%;
  height: 38px;
  color: #ff0000;
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 38px;
  text-align: center;
  border: 1px solid #ff0000;
  font-size: 16px;
}
</style>

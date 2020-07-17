<template>
  <div class="tg-list-item">
    <input class="tgl tgl-light" :id="id" type="checkbox" v-model="isChecked" :disabled="disabled">
    <label class="tgl-btn" :for="id">
    </label>
    <small v-if="showText">{{tglText}}</small>
  </div>
</template>

<script>
  export default {
    name: "Switcher",
    props: {
      value: {
        type: Boolean
      },
      showText: {
        default: true,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      tglText() {
        return this.isChecked ? 'Allowed' : 'Blocked'
      }
    },
    data() {
      return {
        id: null,
        isChecked: null
      }
    },
    watch: {
      isChecked(newVal) {
        this.$emit('input', newVal)
      }
    },
    mounted() {
      this.id = this._uid;
      this.isChecked = this.value;
    }
  }
</script>

<style lang="scss" scoped>
  .tgl {
    display: none;

    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;

      &::selection {
        background: none;
      }
    }

    + .tgl-btn {
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;

      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }

      &:after {
        left: 0;
      }

      &:before {
        display: none;
      }
    }

    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }

  .tgl-light {
    + .tgl-btn {
      background: #c63140;
      border-radius: 2em;
      padding: 2px;
      transition: all .4s ease;

      &:after {
        border-radius: 50%;
        background: #fff;
        transition: all .2s ease;
      }
    }
    & ~ small {
      color: #c63140;
      font-weight: bold;
      text-align: center;
      width: 100%;
      display: inline-block;
      margin-top: 5px;
    }
    &:checked + .tgl-btn {
      background: #5ac88d;
    }
    &:checked ~ small {
      color: #5ac88d;
    }


  }
</style>

<template>
    <transition name="slide-fade">
      <div class="notification" :class="notificationClass" v-show="showMsg">
        <button class="delete"></button>
        <span class="message">{{message}}</span>
      </div>
    </transition>
</template>

<script>
  export default {
    props: {
      type: String,
      message: String,
      position: String,
      duration: [Number, String]
    },
    created () {
      this.setNotificationType ()
    },
    data () {
      return {
        notificationClass: 'is-primary',
        showMsg: true
      }
    },
    mounted () {
      if (this.duration != null) {
        this.showMsg = true
        setTimeout( () => {
          this.showMsg = false
        }, parseInt(this.duration))
      }
    },
    watch: {
      type () {
        this.setNotificationType ()
      }
    },
    methods: {
      setNotificationType () {
        if (this.type != null) {
          switch (this.type) {
            case 'primary':
              this.notificationClass = 'is-primary'
              break
            case 'success':
              this.notificationClass = 'is-success'
              break
            case 'info':
              this.notificationClass = 'is-info'
              break
            case 'warning':
              this.notificationClass = 'is-warning'
              break
            case 'danger':
              this.notificationClass = 'is-danger'
              break
            case 'link':
              this.notificationClass = 'is-link'
              break
            default:
              this.notificationClass = 'is-primary'
          }
        }
      }
    }
  }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

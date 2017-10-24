<template>
    <transition name="slide-fade">
        <div class="notification" :class="notificationClass" v-if="showMsg">
            <button class="delete" @click.stop.prevent="closePressed"></button>
            <slot>
                <span class="message">{{message}}</span>
            </slot>
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
      closePressed () {
        this.showMsg = false
        this.$emit('notification-closed')
      },
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
    @import "notification.css";
</style>

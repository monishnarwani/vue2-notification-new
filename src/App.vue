<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <notification
              type="success"
              message="Cupiditate excepteur pariatur perferendis occaecat quod, placerat nam maiores nostrud dicta voluptatum fuga numquam accusantium atque officia adipiscing repellat per suspendisse, accumsan metus?"
            ></notification>
          </div>

          <div class="column is-one-quarter">
            <notification
              type="warning"
              message="Cupiditate excepteur pariatur perferendis occaecat quod, placerat nam maiores nostrud dicta voluptatum fuga numquam accusantium atque officia adipiscing repellat per suspendisse, accumsan metus?"
              :duration="2000"
            ></notification>
          </div>

          <div class="column is-one-quarter">
            <notification
              type="danger"
              message="Cupiditate excepteur pariatur perferendis occaecat quod, placerat nam maiores nostrud dicta voluptatum fuga numquam accusantium atque officia adipiscing repellat per suspendisse, accumsan metus?"
              :duration="3000"
            ></notification>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './components/Notification.vue'
export default {
  name: 'app',
  components: {
    Notification
  }
}
</script>

<style lang="sass">
  @import "~bulma/bulma.sass"
</style>

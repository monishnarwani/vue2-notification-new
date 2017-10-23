import {mount} from 'vue-test-utils';
import Notification from './../../../src/components/Notification.vue'
import expect from 'expect'

describe('Notification', () => {
  it ('defaults show is true', () => {
    let wrapper = mount(Notification)
    expect(wrapper.vm.showMsg).toBe(true)
  })
})

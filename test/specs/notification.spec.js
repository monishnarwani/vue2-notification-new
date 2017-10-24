import {mount} from 'vue-test-utils';
import Notification from './../../src/Notification.vue'
import {expect} from 'chai'

describe('Notification', () => {
  it ('defaults show is true', () => {
    let wrapper = mount(Notification)
    expect(wrapper.vm.showMsg).to.equal(true)
  })
})
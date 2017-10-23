import {mount} from 'vue-test-utils';
import Notification from './../../../src/components/Notification.vue'
import expect from 'expect'

describe('Notification', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Notification)
  })

  it ('defaults show is true', () => {
    expect(wrapper.vm.showMsg).toBe(true)
  })

  it ('defaults primary notification shown', () => {
    expect(wrapper.vm.notificationClass).toBe('is-primary')
  })

  it ('sets type of notification properly for type success', () => {
    let message = 'This is test notification displayed'
    let type = 'success'
    // wrapper.setProps({
    //   type: 'success',
    //   message: message
    // })
    wrapper = mount(Notification,{
      propsData: {
        type: type,
        message: message
      }
    })

    //Props sets
    expect(wrapper.hasProp('message', message)).toBe(true)
    expect(wrapper.hasProp('type', type)).toBe(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).toBe(message)
    expect(wrapper.vm.type).toBe(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).toBe(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).toBe('is-success')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).toContain('is-success')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).toContain(message)


  })

  it ('sets type of notification properly for type danger', () => {
    let message = 'This is test notification displayed'
    let type = 'danger'
    // wrapper.setProps({
    //   type: 'success',
    //   message: message
    // })
    wrapper = mount(Notification,{
      propsData: {
        type: type,
        message: message
      }
    })

    //Props sets
    expect(wrapper.hasProp('message', message)).toBe(true)
    expect(wrapper.hasProp('type', type)).toBe(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).toBe(message)
    expect(wrapper.vm.type).toBe(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).toBe(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).toBe('is-danger')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).toContain('is-danger')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).toContain(message)

  })

})

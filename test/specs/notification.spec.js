import {mount} from 'vue-test-utils';
import Notification from './../../src/Notification.vue'
import {expect} from 'chai'

describe('Notification', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Notification)
  })
  
  it ('defaults show is true', () => {
    expect(wrapper.vm.showMsg).to.equal(true)
  })

  it ('defaults primary notification shown', () => {
    expect(wrapper.vm.notificationClass).to.equal('is-primary')
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
    expect(wrapper.hasProp('message', message)).to.equal(true)
    expect(wrapper.hasProp('type', type)).to.equal(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-success')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-success')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).to.include(message)


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
    expect(wrapper.hasProp('message', message)).to.equal(true)
    expect(wrapper.hasProp('type', type)).to.equal(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-danger')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-danger')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).to.include(message)

  })

  it ('sets type of notification properly for type primary', () => {
    let message = 'This is test notification displayed'
    let type = 'primary'
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
    expect(wrapper.hasProp('message', message)).to.equal(true)
    expect(wrapper.hasProp('type', type)).to.equal(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-primary')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-primary')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).to.include(message)

  })

  it ('sets type of notification properly for type warning', () => {
    let message = 'This is test notification displayed'
    let type = 'warning'
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
    expect(wrapper.hasProp('message', message)).to.equal(true)
    expect(wrapper.hasProp('type', type)).to.equal(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-warning')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-warning')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).to.include(message)

  })

  it ('checks slot data shown properly on notification', () => {
    let message = 'This is test notification displayed'
    let type = 'warning'
    // wrapper.setProps({
    //   type: 'success',
    //   message: message
    // })
    wrapper = mount(Notification,{
      propsData: {
        type: type
      },
      slots: {
        default: '<div>' + message + '</div>'
      }
    })

    //Props sets
    expect(wrapper.hasProp('message', message)).to.equal(false)
    expect(wrapper.hasProp('type', type)).to.equal(true)

    //Props Data Sets properly
    // expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-warning')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-warning')

    //Notification Msg updates on DOM
    expect(wrapper.find('.notification').html()).to.include(message)

  })


  it('msg disappers after duartion', () => {
    let message = 'This is test notification displayed'
    let type = 'success'
    let duration = 20000
    // wrapper.setProps({
    //   type: 'success',
    //   message: message
    // })
    wrapper = mount(Notification, {
      propsData: {
        type: type,
        message: message,
        duration: duration
      }
    })

    //Props sets
    expect(wrapper.hasProp('message', message)).to.equal(true)
    expect(wrapper.hasProp('type', type)).to.equal(true)
    expect(wrapper.hasProp('duration', duration)).to.equal(true)

    //Props Data Sets properly
    expect(wrapper.vm.message).to.equal(message)
    expect(wrapper.vm.type).to.equal(type)
    expect(wrapper.vm.duration).to.equal(duration)


    //Has class 'notification'
    expect(wrapper.hasClass('notification')).to.equal(true)

    //Set Class according to type of notification
    expect(wrapper.vm.notificationClass).to.equal('is-success')

    //Updates class to DOM accordingly
    expect(wrapper.find('.notification').html()).to.include('is-success')

    //Notification Msg updates on DOM
    expect(wrapper.find('.message').html()).to.include(message)

    setTimeout(() => {
      expect(wrapper.find('.notification').html()).to.not.include('is-success')
    }, duration)

  })

})
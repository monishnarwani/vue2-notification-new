# Vue2-notification-new
_____

## Installation:

#### Using NPM:
```js
npm install vue2-notification-new --save
```

#### Using Yarn:
```js
yarn add vue2-notification-new
```

## Props:

| Props Name | Type | Options |
| ---------- | ---- | ------- |
| type | String | Primary, Warning, Danger, Success, Info
| duration | Number | value in MilliSeconds

## Events Fired: 
| Event Name | Comments |
| ---------- | ------- |
| notification-closed | Event fired if notification is explicitly closed by user |




## Basic Usage:

### Template

```js
<notification type="danger" @notification-closed="closed">
    <img src="./assets/logo.png" alt="">
    <span>Lacus pulvinar veniam illum voluptates inceptos exercitation laoreet accumsan? Ullamco.</span>
</notification>
```

### Script
```js
import Notification from 'vue2-notification-new'

export default {
    components: {
        Notification
    },
    methods: {
        closed () {
            console.log('Notification was closed explicitly')
        }
    }
}
```

## Setting Notification Duration:

### Template

```js
<notification type="danger" :duration="5000" @notification-closed="closed"> //Notification will disappears after 5sec
    <img src="./assets/logo.png" alt="">
    <span>Lacus pulvinar veniam illum voluptates inceptos exercitation laoreet accumsan? Ullamco.</span>
</notification>
```

### Script
```js
import Notification from 'vue2-notification-new'

export default {
    components: {
        Notification
    },
    methods: {
        closed () {
            console.log('Notification was closed explicitly')
        }
    }
}
```

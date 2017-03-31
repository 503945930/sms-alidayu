'use strict'

/**
 * index.test.js
 *
 *
 */

import 'should'
import test from 'ava'
import creator from '../index'
import AlidayuSmsConsumer from '../lib/consumer'

const conf = {
  clientOption: {
    'appkey': '23569268',
    'appsecret': '57ddd04eebae351ec4afee97c8d75ac4',
    'REST_URL': 'gw.api.taobao.com/router/rest'
  },
  smsOption: {
    'extend': '', // String    可选 公共回传参数，在“消息返回”中会透传回该参数；举例：用户可以传入自己下级的会员ID，在消息返回时，该会员ID会包含在内，用户可以根据该会员ID识别是哪位会员使用了你的应用
    'sms_type': 'normal', // 短信类型，传入值请填写normal
    'sms_free_sign_name': '夜点', // 短信签名
    'sms_template_code': '34370095', // 短信模板ID
    'tel': '18575740461', // 手机
    'code': 'hello' // 参数
  }
}

test('should return instanceof', () => {
  const consumer = creator.create(conf)
  consumer.should.be.instanceof(AlidayuSmsConsumer)
})

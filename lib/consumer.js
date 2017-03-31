'use strick'

const EventEmitter = require('events').EventEmitter
const { Map } = require('immutable')
const Client = require('./sdk/topClient').TopClient

/**
 *
 *
 * @class AlidayuSmsConsumer
 * @extends {EventEmitter}
 * @author wei
 *
 *
 */
class AlidayuSmsConsumer extends EventEmitter {
  /**
   * Creates an instance of AlidayuSmsConsumer.
   * @param {any} options
   *
   * @memberOf AlidayuSmsConsumer
   */
  constructor (options) {
    super()
    this.client = new Client(options)
   // this.smsOption = Map(options)
    const self = this
    this.on('message', (message, ack) => {
      self.send(message, function (err, info) {
        if (err) {
         /// if (!process.env.MOCHA) console.error(err)
          return ack.acknowledge()
        }

        // if (!process.env.MOCHA) console.log('Sent.', info)
        ack.acknowledge()
      })
    })
  }
  /**
   * 发送短信
   * @param {*} tel
   * @param {*} options
   */
  send (message, callback) {
    // let opt = {}

    // if (typeof tel === 'object') {
    //   options = tel
    //   tel = options.tel
    // }
    // if (!tel) {
    //   return console.log('需要一个手机号码')
    // }
    // if (options.tel) delete options.del
    // opt = Object.assign(opt, options)
    // this.smsOption.rec_num = tel

    // this.smsOption.sms_param = JSON.stringify(opt)

    this.client.execute('alibaba.aliqin.fc.sms.num.send', message, (error, response) => {
      if (error) {
        return callback(error)
      }
      return callback(null, response)
    })

    // return new Promise((resolve, reject) => {
    //   this.client.execute('alibaba.aliqin.fc.sms.num.send', this.smsOption, (error, response) => {
    //     error ? reject(error) : resolve(response)
    //   })
    // })
  }
}

module.exports = AlidayuSmsConsumer

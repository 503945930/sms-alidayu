'use strict'

const AlidayuSmsConsumer = require('./lib/consumer')

exports.create = function (arg) {
  return new AlidayuSmsConsumer(arg)
}

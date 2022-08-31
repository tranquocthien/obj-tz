const necklace = require('./necklace/index')
const crypto = require('crypto')

const base64 = {
  /**@param {Buffer} value */
  encode: value => value.toString('base64'),
  /**@param {string} value */
  decode: value => Buffer.from(value, 'base64'),
}

const salted_hmac = function (key_salt, value, secret = '') {
  secret = secret || process.env.SECRET_KEY
  const key = crypto
    .createHash('sha1')
    .update(key_salt + secret)
    .digest()
  return crypto.createHmac('sha1', key).update(Buffer.from(value, 'utf-8'))
}

class Store {
  _hash(value) {
    const key_salt = 'a' + this.constructor.name
    return salted_hmac(key_salt, value).digest('hex')
  }
  encode(sessionObj) {
    const serialized = necklace(sessionObj, {
      json: true,
      lowercaseHex: true,
    })
    const hash = this._hash(serialized)
    return base64.encode(Buffer.from(`${hash}:${serialized}`))
  }
  decode(sessionData) {
    const encoded_data = base64.decode(sessionData).toString('ascii')
    try {
      const i = encoded_data.indexOf(':')
      if (i <= 0) throw new Error('Session data corrupted')
      const hash = encoded_data.slice(0, i)
      const serialized = encoded_data.slice(i + 1)
      const expected_hash = this._hash(serialized)
      if (hash !== expected_hash) throw new Error('Session data corrupted')
      return JSON.parse(serialized)
    } catch (error) {
      console.warn(error)
      return {}
    }
  }
}

const obj_cz = new Store()
obj_cz.version = '1.0.5'
module.exports = obj_cz

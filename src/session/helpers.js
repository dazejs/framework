
const { crc32 } = require('crc');

exports.decode = function decode(string) {
  const body = Buffer.from(string, 'base64').toString('utf8');
  const json = JSON.parse(body);
  return json;
};

exports.encode = function encode(body) {
  return Buffer.from(JSON.stringify(body)).toString('base64');
};

exports.hash = function hash(sess) {
  return crc32(JSON.stringify(sess));
};

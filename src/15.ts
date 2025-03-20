import { Random } from 'meteor/random';

function getRandomCode() {
  return Random.hexString(16);
}

getRandomCode();
import axios from 'axios';

let instance = axios.create({
  headers: {
    'X-LC-Id': 'oqeupC4NeyEbx3JHekgSk1Gj-gzGzoHsz',
    'X-LC-Sign': '60468aeea86e37cb36698a2e4795c103,1555315451559',
    'Content-Type': 'application/json'
  }
});

export default instance

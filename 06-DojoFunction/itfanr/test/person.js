define(['dojo/_base/declare'], function(declare) {
  return declare('Person', null, {
    name: 'zs',
    constructor: function(name) {
      this.name = name
    },
    say: function() {
      return this.name +'你好'
    }
  })
})

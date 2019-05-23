define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./widget.html',
  'dojo/dom'
], function(declare, _WidgetBase, _TemplateMinix, widget, dom) {
  return declare([_WidgetBase, _TemplateMinix], {
      templateString: widget,
    onClick: function() {
        // alter(this.text1.value)
        var t = dom.byId('Text1')
        console.log(1, this.templateString)
       
      alert(t.value)
    }
  })
})

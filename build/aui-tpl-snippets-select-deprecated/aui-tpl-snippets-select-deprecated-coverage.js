if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tpl-snippets-select-deprecated/aui-tpl-snippets-select-deprecated.js']) {
   __coverage__['build/aui-tpl-snippets-select-deprecated/aui-tpl-snippets-select-deprecated.js'] = {"path":"build/aui-tpl-snippets-select-deprecated/aui-tpl-snippets-select-deprecated.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":65}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":17,"column":78}},"2":{"start":{"line":3,"column":0},"end":{"line":14,"column":2}}},"branchMap":{},"code":["(function () { YUI.add('aui-tpl-snippets-select-deprecated', function (A, NAME) {","","A.Template.register(","    'select', [","  '<tpl if=\"values.label !== undefined\">',","   '<label class=\"{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}\" for=\"{id}\" id=\"{labelId}\" name=\"{labelName}\" style=\"{labelStyle}\">{label}</label>',","  '</tpl>',","  '<select class=\"{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}\" <tpl if=\"values.disabled\">disabled=\"disabled\"</tpl> id=\"{id}\" name=\"{name}\" style=\"{style}\">',","    '<tpl for=\"options\">',","     '<option value=\"{value}\">{label}</option>',","    '</tpl>',","  '</select>'"," ]",");","","","}, '3.0.3-deprecated.69', {\"requires\": [\"aui-tpl-snippets-base-deprecated\"]});","","}());"]};
}
var __cov_F0U9woblyaERDDmPl_SgzQ = __coverage__['build/aui-tpl-snippets-select-deprecated/aui-tpl-snippets-select-deprecated.js'];
__cov_F0U9woblyaERDDmPl_SgzQ.s['1']++;YUI.add('aui-tpl-snippets-select-deprecated',function(A,NAME){__cov_F0U9woblyaERDDmPl_SgzQ.f['1']++;__cov_F0U9woblyaERDDmPl_SgzQ.s['2']++;A.Template.register('select',['<tpl if="values.label !== undefined">','<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>','</tpl>','<select class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" <tpl if="values.disabled">disabled="disabled"</tpl> id="{id}" name="{name}" style="{style}">','<tpl for="options">','<option value="{value}">{label}</option>','</tpl>','</select>']);},'3.0.3-deprecated.69',{'requires':['aui-tpl-snippets-base-deprecated']});

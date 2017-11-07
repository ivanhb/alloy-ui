if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-surface-screen-route/aui-surface-screen-route.js']) {
   __coverage__['build/aui-surface-screen-route/aui-surface-screen-route.js'] = {"path":"build/aui-surface-screen-route/aui-surface-screen-route.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":55}}},"2":{"name":"(anonymous_2)","line":12,"loc":{"start":{"line":12,"column":17},"end":{"line":12,"column":33}}},"3":{"name":"(anonymous_3)","line":36,"loc":{"start":{"line":36,"column":19},"end":{"line":36,"column":35}}},"4":{"name":"(anonymous_4)","line":49,"loc":{"start":{"line":49,"column":21},"end":{"line":49,"column":37}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":83,"column":56}},"2":{"start":{"line":3,"column":0},"end":{"line":80,"column":3}},"3":{"start":{"line":13,"column":8},"end":{"line":13,"column":36}},"4":{"start":{"line":15,"column":8},"end":{"line":17,"column":9}},"5":{"start":{"line":16,"column":12},"end":{"line":16,"column":34}},"6":{"start":{"line":18,"column":8},"end":{"line":20,"column":9}},"7":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}},"8":{"start":{"line":21,"column":8},"end":{"line":23,"column":9}},"9":{"start":{"line":22,"column":12},"end":{"line":22,"column":43}},"10":{"start":{"line":24,"column":8},"end":{"line":24,"column":20}},"11":{"start":{"line":37,"column":8},"end":{"line":37,"column":97}},"12":{"start":{"line":50,"column":8},"end":{"line":50,"column":40}}},"branchMap":{"1":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":8},"end":{"line":15,"column":8}},{"start":{"line":15,"column":8},"end":{"line":15,"column":8}}]},"2":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":8},"end":{"line":18,"column":8}},{"start":{"line":18,"column":8},"end":{"line":18,"column":8}}]},"3":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":8},"end":{"line":21,"column":8}},{"start":{"line":21,"column":8},"end":{"line":21,"column":8}}]},"4":{"line":37,"type":"binary-expr","locations":[{"start":{"line":37,"column":15},"end":{"line":37,"column":37}},{"start":{"line":37,"column":41},"end":{"line":37,"column":65}},{"start":{"line":37,"column":69},"end":{"line":37,"column":96}}]}},"code":["(function () { YUI.add('aui-surface-screen-route', function (A, NAME) {","","A.ScreenRoute = A.Base.create('screenRoute', A.Base, [], {","    /**","     * Matches if the `ScreenRouter` can handle the tested `value` path, if not","     * returns null.","     *","     * @method matchesPath","     * @param {String} value Path to test and may contains the querystring part.","     * @return {Boolean} Returns true if matches.","     */","    matchesPath: function(value) {","        var path = this.get('path');","","        if (A.Lang.isString(path)) {","            return value === path;","        }","        if (A.Lang.isFunction(path)) {","            return path(value);","        }","        if (A.instanceOf(path, RegExp)) {","            return value.search(path) > -1;","        }","        return null;","    },","","    /**","     * Validates the value of path attribute. A value will be accepted as valid","     * if it is `String`, `RegExp` or `Function`.","     *","     * @method _validatePath","     * @param  {String|RegExp|Function} value The provided value to be","     * validated.","     * @protected","     */","    _validatePath: function(value) {","        return A.Lang.isString(value) || A.Lang.isFunction(value) || A.instanceOf(value, RegExp);","    },","","    /**","     * Validates the value of screen attribute. A value will be accepted as","     * valid if it is component like `A.Screen` or class which extends","     * `A.Screen`, for example `A.HTMLScreen`.","     *","     * @method _validateScreen","     * @param {Function} value The provided value to be validated.","     * @protected","     */","    _validateScreen: function(value) {","        return A.Lang.isFunction(value);","    }","}, {","    ATTRS: {","        /**","         * Defines the path which will trigger the rendering of the screen,","         * specified in `screen` attribute. Could be `String`, `RegExp` or","         * `Function`. In case of `Function`, it will receive the URL as","         * parameter and it should return true if this URL could be handled by","         * the screen.","         *","         * @attribute path","         * @type {String|RegExp|Function}","         */","        path: {","            validator: '_validatePath'","        },","","        /**","         * Defines the screen which will be rendered once a URL in the","         * application matches the path, specified in `path` attribute. Could be","         * `A.Screen` or its extension, like `A.HTMLScreen`.","         *","         * @attribute screen","         * @type {A.Screen}","         */","        screen: {","            validator: '_validateScreen'","        }","    }","});","","","}, '3.0.3-deprecated.69', {\"requires\": [\"base-build\"]});","","}());"]};
}
var __cov_LRE7m1adRV3Wskpt3ay0$w = __coverage__['build/aui-surface-screen-route/aui-surface-screen-route.js'];
__cov_LRE7m1adRV3Wskpt3ay0$w.s['1']++;YUI.add('aui-surface-screen-route',function(A,NAME){__cov_LRE7m1adRV3Wskpt3ay0$w.f['1']++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['2']++;A.ScreenRoute=A.Base.create('screenRoute',A.Base,[],{matchesPath:function(value){__cov_LRE7m1adRV3Wskpt3ay0$w.f['2']++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['3']++;var path=this.get('path');__cov_LRE7m1adRV3Wskpt3ay0$w.s['4']++;if(A.Lang.isString(path)){__cov_LRE7m1adRV3Wskpt3ay0$w.b['1'][0]++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['5']++;return value===path;}else{__cov_LRE7m1adRV3Wskpt3ay0$w.b['1'][1]++;}__cov_LRE7m1adRV3Wskpt3ay0$w.s['6']++;if(A.Lang.isFunction(path)){__cov_LRE7m1adRV3Wskpt3ay0$w.b['2'][0]++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['7']++;return path(value);}else{__cov_LRE7m1adRV3Wskpt3ay0$w.b['2'][1]++;}__cov_LRE7m1adRV3Wskpt3ay0$w.s['8']++;if(A.instanceOf(path,RegExp)){__cov_LRE7m1adRV3Wskpt3ay0$w.b['3'][0]++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['9']++;return value.search(path)>-1;}else{__cov_LRE7m1adRV3Wskpt3ay0$w.b['3'][1]++;}__cov_LRE7m1adRV3Wskpt3ay0$w.s['10']++;return null;},_validatePath:function(value){__cov_LRE7m1adRV3Wskpt3ay0$w.f['3']++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['11']++;return(__cov_LRE7m1adRV3Wskpt3ay0$w.b['4'][0]++,A.Lang.isString(value))||(__cov_LRE7m1adRV3Wskpt3ay0$w.b['4'][1]++,A.Lang.isFunction(value))||(__cov_LRE7m1adRV3Wskpt3ay0$w.b['4'][2]++,A.instanceOf(value,RegExp));},_validateScreen:function(value){__cov_LRE7m1adRV3Wskpt3ay0$w.f['4']++;__cov_LRE7m1adRV3Wskpt3ay0$w.s['12']++;return A.Lang.isFunction(value);}},{ATTRS:{path:{validator:'_validatePath'},screen:{validator:'_validateScreen'}}});},'3.0.3-deprecated.69',{'requires':['base-build']});

angular.module('stackWatch').factory('NativeTransition', $state => {
    let nativeTransition = {};

    let options = {
        // "direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
        // "duration": 500, // in milliseconds (ms), default 400
        // "slowdownfactor": 5, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
        // "slidePixels": 20, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.
        // "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        // "androiddelay": 150, // same as above but for Android, default 70
        // "winphonedelay": 250, // same as above but for Windows Phone, default 200,
        // "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        // "fixedPixelsBottom": 60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    };

    nativeTransition.go = state => {
        if (isCordova()) {
            return window.plugins.nativepagetransitions.slide(angular.extend({}, options, {'href' : `#/${state}`}));
        }
        $state.go(state);
    };

    return nativeTransition;
});
function dd(...arr) {
    window.console.log(...arr);
}

function isCordova() {
    return window.cordova !== undefined;
}

RegExp.escape = s => {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
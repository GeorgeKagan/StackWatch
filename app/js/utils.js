function dd(...arr) {
    window.console.log(...arr);
}

RegExp.escape = s => {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
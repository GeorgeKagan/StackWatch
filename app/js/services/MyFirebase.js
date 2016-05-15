angular.module('stackWatch').factory('MyFirebase', $firebaseObject => {
    const FIREBASE_URL = 'https://stackwatch.firebaseio.com';

    let myFirebase = {},
        ref        = new Firebase(FIREBASE_URL);

    myFirebase.reset = key => {
        let obj = $firebaseObject(ref.child(key));
        return obj.$remove();
    };

    myFirebase.save = (key, data) => {
        let obj = $firebaseObject(ref);
        obj[key] = data;
        return obj.$save();
    };

    return myFirebase;
});
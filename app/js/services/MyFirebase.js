angular.module('stackWatch').factory('MyFirebase', $firebaseObject => {
    const FIREBASE_URL = 'https://stackwatch.firebaseio.com';

    let myFirebase = {},
        ref        = new Firebase(FIREBASE_URL);

    myFirebase.getAll = () => {
        return $firebaseObject(ref).$loaded();
    };

    myFirebase.reset = key => {
        let obj = $firebaseObject(ref.child(key));
        return obj.$remove();
    };

    myFirebase.saveTechData = (providerKey, techKey, data) => {
        let obj = ref.child(providerKey).child(encodeURIComponent(techKey));
        return obj.update(data);
    };

    return myFirebase;
});
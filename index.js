// Write your solution in this file!
//create variable driver assigned to Object
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    //do not mutate, return new driver w/ updated value for key passed in
    return Object.assign({}, driver, { [key]: value } );
    // returns driver { key: value }
    // creates a copy w/in funct. 
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // like update above, but mutate.
    driver[key] = value;
    return driver;
    //adds to actual variable we created at the top
};

function deleteFromDriverByKey(driver, key) {
    // delete k-v pair for the key passed in from obj. Do not mutate.
    const newObject = Object.assign({}, driver);
    // creates copy then deletes key from our copy

    delete newObject[key];
    return newObject
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    // work the same as above, but mutate
    //deletes key from vari. created at top
    delete driver[key];
    return driver
};
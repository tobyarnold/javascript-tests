describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']}, //didnt touch
        obj = JSON.parse(JSON.stringify(expected)); //basically made it so the stringify func converts expected to a string and is equal to obj but isnt actually obj
        //json.parse = converts to js object
    

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});

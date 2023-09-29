function compareObjects(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (const property in object1) {
      if (!object2.hasOwnProperty(property) || object1[property] !== object2[property]) {
        return false;
      }
    }
  }
  const object1 = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };
  
  const object2 = {
    name: "John Doe",
    occupation: "Software Engineer",
  };
  
  const areEqual = compareObjects(object1, object2);
  
  console.log(areEqual);
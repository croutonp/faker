const express = require("express");
const app = express();
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};
    
const createCompany = () => {
  const newCompany = {
      _id: faker.datatype.uuid(),
      name: faker.internet.email(),
      street: faker.location.street(),
      city: faker.location.city(),
      state:faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
  };
  return newCompany;
};
const newFakeUser = createUser();
const newFakeCompany = createCompany();



app.get("/api/users/new", (req, res) => {
  
  res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newFakeCompany);
})

app.get("/api/user/company", (req, res) => {
  res.json({newFakeUser, newFakeCompany});
  
})




const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

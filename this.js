const person = {
  fname: "Harish",
  lname: "S",
  phNo: 90457520792,
  email: "h@gmail.com",
  id: 9988,
  fullName: function() {
    return this.fname + " " + this.lname;
  },
};


console.log("Fullname: " + person.fullName());
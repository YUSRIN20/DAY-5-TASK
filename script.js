// 1.) For the given JSON iterate over all for loops (for,for in, for of, forEach ):

// First question solution starts here =>
let data = {
  name: "Misfer Yusrin",
  dob: "20 - 12 - 2000",
  dept: "Mechatronics-Engineering",
  college: "Hindusthan College of Engineering and Technology",
  cgpa: "8.0",
  languages_known: "Html,Css",
};

let keys = Object.keys(data);

// For Loop starts here =>
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key, ":", data[key]);
}
// For Loop ends here ----
console.log("--->");


// For of Loop starts here =>
for (let j of keys) {
  console.log(j, ":", data[j]);
}
// For of Loop ends here----
console.log("--->");


// For in Loop starts here->
for (let f in keys) {
  let key2 = keys[f];
  console.log(key2, ":", data[key2]);
}
//For in Loop ends here-----
console.log("--->");


//For Each starts here =>
keys.forEach((keyval) => {
  console.log(keyval, ":", data[keyval]);
});
//For Each ends here----

// First question solution starts here----



// 2.)Create your own resume data in JSON format:

// second question solution starts here ==>
let resumedata = {
  name: "Misfer Yusrin",
  dob: "20 - 12 - 2000",
  dept: "Mechatronics-Engineering",
  college: "Hindusthan College of Engineering and Technology",
  cgpa: "8.0",
  languages_known: "Html,Css",
};
console.log(resumedata)
// second question solution ends here -----
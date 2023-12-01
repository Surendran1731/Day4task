const users=[
  {
    "Brand":"LG",
    "Model":"FHM1207SDM",
    "FUNCTION TYPE":"AUTOMATIC",
    "ENERGY":"5",
    "WASHING CAPACITY":"7KG",
    "METHOD":"TRUMBLE",
    "COLOR":"BLACK"
  },
  {
    "Brand":"IFB",
    "Model":"IFBHM1255224507SDM",
    "FUNCTION TYPE":"SEMI AUTOMATIC",
    "ENERGY":"9",
    "WASHING CAPACITY":"7KG",
    "METHOD":"TRUMBLE",
    "COLOR":"BLACK"
  },
  {
    "Brand":"LG",
    "Model":"JG207SDM",
    "FUNCTION TYPE":"AUTOMATIC",
    "ENERGY":"3",
    "WASHING CAPACITY":"7KG",
    "METHOD":"BUBBLE",
    "COLOR":"BLACK"
  }
]
//forloop
for(let i=0;i<users.length;i++){
  console.log(users[i].Brand)
}
//for of
for(let array of users){
  console.table(array)
}

// for in
  for(let user in users){
    console.log(users[user])
  }

  //for each
  users.forEach((element)=>console.log(element.Brand))
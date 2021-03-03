function greenBottles(num) {
  while (num > 0) {

  console.log(num + " green bottles")
  console.log("hanging on the wall")
  console.log(num + " green bottle")
  console.log("Hanging on the wall")
  console.log("if that green bottle")
  console.log("Should accidentally fall")
  if(num === 1) {
    console.log("There'll be no green bottles hanging on the wall")
  } else {
    console.log(`There'll be ${num - 1} green bottles`)
    console.log("Hanging on the wall")
  }

  num --;
    }
}



  function greenBottles(num) {
  while (num > 0) {
      console.log(`${num} green bottles hanging on the wall`)
      console.log(`${num} green bottles hanging on the wall`)
      console.log(("and if one green bottle should accidently fall"))
      num = num - 1
      console.log(`there will be ${num} green bottles hanging on the wall`)
  }
    }

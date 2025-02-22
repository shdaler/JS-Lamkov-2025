const age = +prompt("how old are you?");

switch (true) {
  case age < 1: {
    console.log("Wrong age");
    break;
  }

  case age === 18: {
    console.log("dont believe, show the passport");
    break;
  }

  case age > 126: {
    console.log("are you vampire?");
    break;
  }
  default: {
    console.log("wrong message");
  }
}

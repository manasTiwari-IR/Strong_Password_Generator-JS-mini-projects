const number = () => {
  return Math.floor(Math.random() * 10);
};

const Upper_alpha = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const Lower_alpha = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const specialChar = () => {
  const special = "!@#$%^&";
  return special[Math.floor(Math.random() * special.length)];
};

const generatePassword = () => {
  let val = document.querySelector("#length").value;
  if (val >= 8 && val <= 128) {
    let password = "";

    for (let i = 0; i < val; i++) {
      let x = Math.floor(Math.random() * 4);
      switch (x) {
        case 0: {
          password += Lower_alpha();
          break;
        }
        case 1: {
          password += specialChar();
          break;
        }
        case 2: {
          password += number();
          break;
        }
        case 3: {
          password += Upper_alpha();
          break;
        }
      }
    }
    console.log(password);
    document.querySelector(".display").innerHTML = password;
  } else {
    alert("Please enter a valid length between 8 and 128");
  }
};

document
  .querySelector(".generatebtn")
  .addEventListener("click", generatePassword);

{
  let val = document.querySelector("#length").value;
  if (document.hasFocus() === (val >= 8 && val <= 128)) {
    document.querySelector("#length").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        generatePassword();
      }
    });
  }
}

function clearPassword() {
  document.querySelector(".display").innerHTML = "";
  document.querySelector("#length").value = "12";
}

// document.querySelector(".popup").hidden = true;
function copyPassword() {
  let password = document.querySelector(".display").innerHTML;
  if (password !== "") {
    navigator.clipboard.writeText(password);
    // alert("Password copied to clipboard");
    // document.querySelector(".popup").hidden = false;
    document.querySelector(".popup").style.top = "1%";
    document.querySelector(".popup").style.opacity = "1";
    setTimeout(() => {
    //   document.querySelector(".popup").hidden = true;
      document.querySelector(".popup").style.top = "-10%";
      document.querySelector(".popup").style.opacity = "0";
    }, 2300);
  } else {
    alert("Please generate a password first");
  }
}

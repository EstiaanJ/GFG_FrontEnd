function transfer() {
    console.log("was here")
    const accName = document.getElementById("from-acc-name").value;
    const amount = document.getElementById("amount").value;
    const passHash = document.getElementById("password").value;
    const toAccName = document.getElementById("to-acc-name").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://51.161.163.66:44658/transfer", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        document.getElementById("result").innerHTML = this.responseText;
      }
    };
    //xhr.send(`acc-name=${accName}&amount=${amount}&pass-hash=${passHash}`);
    xhr.send(`from-acc-name=${accName}&amount=${amount}&password=${passHash}&to-acc-name=${toAccName}`);
  }


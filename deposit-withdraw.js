function deposit() {
    const accName = document.getElementById("acc-name").value;
    const amount = document.getElementById("amount").value;
    const passHash = document.getElementById("pass-hash").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://51.161.163.66:44658/deposit", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        document.getElementById("result").innerHTML = this.responseText;
      }
    };
    xhr.send(`acc-name=${accName}&amount=${amount}&pass-hash=${passHash}`);
  }

  function withdraw() {
    const accName = document.getElementById("acc-name").value;
    const amount = document.getElementById("amount").value;
    const passHash = document.getElementById("pass-hash").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://51.161.163.66:44658/withdraw", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        document.getElementById("result").innerHTML = this.responseText;
      }
    };
    xhr.send(`acc-name=${accName}&amount=${amount}&pass-hash=${passHash}`);
  }
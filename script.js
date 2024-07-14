function clearr() {
  document.getElementById('number').value =' ';
  document.getElementById('result').innerHTML = '';
}

function check() {
  var num = document.getElementById('number').value;
  var p = true
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      p = false;
      break;
      } else {
      p = true;
      }
    }
  
  if (num.charAt(1)!='.') {
    if (num % 2 === 0 && p == false) {
      document.getElementById('result').innerHTML ='It is an even number and definitely not a prime number';  
    } else if (num % 2 !== 0 && p == false) {
      document.getElementById('result').innerHTML ='It is an odd number and not a prime number';  
    } else {
      document.getElementById('result').innerHTML ='It is an odd number and a prime number';
    }

  } else {
    alert('Please enter integer number. Ex : 12');
    clearr();
  }
}
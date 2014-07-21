$(function () {

  var $calculate = $('#calculate');

  $calculate.on('submit', function () {
    var balance = parseFloat(document.getElementById('balance').value);
    var funds = parseFloat(document.getElementById('funds').value);
    var atm = parseFloat(document.getElementById('atm').value);
    var atmfees = Math.min(atm*3, 12);
    var money = balance + funds;
    if (money < 10000) {
      var total = (money * 0.0149) + atmfees;
      document.acceleration.total.value = total;
    } else if ((money > 10000) && (money < 20000)) {
      var checking = 10000 * 0.0149;
      var savings = (money -10000) * 0.005;
      var total2 = checking + savings + atmfees;
      document.acceleration.total.value = total2;
    } else {
      var check = 10000 * 0.0149;
      var savings2 = 10000 * 0.005;
      var over = (money - 20000) * 0.0025;
      var total3 = check + savings2 + over + atmfees;
      document.acceleration.total.value = total3;
    }
  });
});

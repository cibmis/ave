$(function () {

  var $balance = $('#balance');
  var $funds = $('funds');
  var $atm = $('atm');
  var $calculate = $('#calculate');

  $('#balance-slide').slider({
    min: 0,
    max: 25000,
    step: 25,
    value: 0,
    slide: function(event, ui) {
      $('#balance').val('$' + ui.value);
    }
  });

  $('#funds-slide').slider({
    min: 0,
    max: 25000,
    step: 25,
    value: 0,
    slide: function(event, ui) {
      $('#funds').val('$' + ui.value);
    }
  });

  $('#atm-slide').slider({
    min: 0,
    max: 25,
    step: 1,
    value: 0,
    slide: function(event, ui) {
      $('#atm').val('$' + ui.value);
    }
  });

  $calculate.on('submit', function (e) {
    e.preventDefault();
    // var balance = parseFloat(document.getElementById('balance').value) || 0;
    // var funds = parseFloat(document.getElementById('funds').value) || 0;
    // var atm = parseFloat(document.getElementById('atm').value) || 0;
    var atmfees = Math.min($atm*3, 12);
    var money = $balance + $funds;
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

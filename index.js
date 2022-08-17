let distance = 0

function scuberGreetingForFeet(distance){
  // Write your code here!
  
  if (distance <= 400) {
      return 'This one is on me!'
  } else if ( distance > 2000 && distance < 2500 ) {
      return 'I will gladly take your thirty bucks.'
  } else  if ( distance > 2500 ) {
      return 'No can do.'
  }
  
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2500);

let city = ""

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}
ternaryCheckCity("NYC");

let tip = ""

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return "Thank you."
  } else {
    return "Bye."
  }
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip("bad")
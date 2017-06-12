console.log(process)

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var commands = require('./commands');
  var cmd = data.toString().trim(); // remove the newline
  var commandArray = cmd.split(' ');
  var prefix = commandArray[0];
  var postfix = commandArray[1];
  process.stdout.write('You typed: ' + cmd + '\n');

  commands[prefix](postfix);

  //setTimeout(function() {process.stdout.write('\nprompt > ')}, 0);
});

const { exec } = require('child_process');
function stop() {
 exec('kill `cat tshark_pid.txt`', (err, stdout, stderr) => {
  if (err) {
   // node couldn't execute the command
   return console.log(err);
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
 });
}
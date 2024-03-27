const fs = require("fs");
// Convert the command line arguments array into a string
const fileContent = process.argv.join(" ");

fs.writeFile("log.txt", fileContent, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Done!");
});

fs.readFile("log.txt", "utf8", function(error, log) {
  if (error) {
    return console.log(error);
  }
  console.log(log);
});

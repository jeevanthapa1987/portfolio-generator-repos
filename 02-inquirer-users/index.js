
import fs from 'fs';
import inquirer from 'inquirer';

// Prompt the user

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'Slack', 'smoke signal', 'dove']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python' , 'C++']
    },
    {
      type: 'checkbox',
      name: 'day',
      message: 'What days do you have class?',
      choices: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    console.log(data);
    // Bonus: Generate the name of your user file from their input
    //const filename = `fancy ${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = 
      data.name
      .toLowerCase()
      .split(' ')
      .join('') + '.json';
    

    console.log(`my name is ${data.name}`);

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });


  // const firstName = "jeevan";
  // const middleInit = "b";
  // const lastName = "thapa";

  // const fullName = `${lastName},  ${firstName} ${middleInit}.`;

  // console.log(fullName);
import { Command } from 'commander';
import inquirer from 'inquirer';
const program = new Command();




program
  .name('courses manager')
  .description('CLI to help You to manage courses')
  .version('1.8.0');

  program.command('add').alias('a')
  .description('Add a course to')
  
  .action(() =>{
    inquirer
    .prompt([
      {type:'input',
      name: 'programming',
      message:'What is your favorite programming language'}
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });  })

  program.command('list').alias('l')
  .description('List all courses')
 
  .action(() =>{
    console.log('all courses');
  })
program.parse(process.argv)
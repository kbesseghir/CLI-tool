const { Command } = require('commander');
const program = new Command();

program
  .name('courses manager')
  .description('CLI to help You to manage courses')
  .version('1.8.0');

  program.command('add').alias('a')
  .description('Add a course to')
  .option('--price <price>', 'Add a price')
  .argument('<title>', 'Add a course title')
  .action((param,option) =>{
    console.log("param,option",param,option);
  })

  program.command('list').alias('l')
  .description('List all courses')
 
  .action(() =>{
    console.log('all courses');
  })
program.parse(process.argv)
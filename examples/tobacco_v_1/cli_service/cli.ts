import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import {tobaccoQALY } from "../knowledge/tobacco.js";
import { parse } from "https://deno.land/std@0.177.0/encoding/csv.ts";
import { writeCSV } from "https://deno.land/x/csv/mod.ts";


await new Command()
  .name("Knowledge object - QALY Gain By Stop Using Tobacco")
  .version("1.0.0")
  .description("Quality-Adjusted Life Year Gain By Stop Using Tobacco")

  .command("qalyValue", "Use Knowledge To Calculate Quality-Adjusted Life Year Gain By Stop Using Tobacco")
  .option("--json_input <json_input:string>", "JSON input string",{required: true}) 
  .example(
    "Execute qalyValue command from source file, with example input",
    "deno run --allow-read cli.ts qalyValue --json_input='{ \"features\": { \"age\": 65, \"gender\": 1, \"race\": 0, \"smokeyear\": 30, \"quityear\": 0, \"cigpday\": 20, \"diabetes\": 1, \"totalcholesterol\": 200, \"hdl\": 30, \"sbp\": 110, \"htmedication\": 0, \"alcohol_abuse\": 1 } }'"
  )
  .example(
    "Execute qalyValue command from installed cli called tobacco, with example input",
    "tobacco qalyValue --json_input='{ \"features\": { \"age\": 65, \"gender\": 1, \"race\": 0, \"smokeyear\": 30, \"quityear\": 0, \"cigpday\": 20, \"diabetes\": 1, \"totalcholesterol\": 200, \"hdl\": 30, \"sbp\": 110, \"htmedication\": 0, \"alcohol_abuse\": 1 } }'"
  )
  .action((options) => {
    const input_data = JSON.parse(options.json_input);
    console.log("Quality-Adjusted Life Year Gain By Stop Using Tobacco Is",tobaccoQALY(input_data.features))
  }
  )  

  .command("batchProcess", "Use knowledge To Calculate Quality-Adjusted Life Year Gain By Stop Using Tobacco in batch ")
  .option("--input_path <input_path:string>", "path to CSV input file",{required: true}) 
  .example(
    "Execute batchProcess command from source file, with example input file",
    "deno run --allow-read --allow-write cli.ts batchProcess --input_path='batchinput.csv'"
  )
  .example(
    "Execute batchProcess command from installed cli called tobacco, with example input file",
    "tobacco batchProcess --input_path='batchinput.csv'"
  )
  .action(async (options) => {

    const csvFile = await Deno.readTextFile(options.input_path);
    const array = parse(csvFile);
    let output=[];
    for (let i = 1; i < array.length; i++) {
      const row = array[i];
      const rowData : Record<string, unknown>= {};
    
      // Iterate over each column and create key-value pairs
      for (let j = 0; j < array[0].length; j++) {
        const label = array[0][j];
        const value = row[j];
        rowData[label] = value;
      }
      output.push([row[0],tobaccoQALY(rowData)])
    } 

    const f = await Deno.open("outfile.csv", {
      write: true,
      create: true,
      truncate: true,
      });

      await writeCSV(f, output);
      
      f.close();
  
  }
  )  
  .parse(Deno.args);



//deno run --allow-read cli.ts --help 
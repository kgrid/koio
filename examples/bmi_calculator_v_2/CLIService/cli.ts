import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { parse } from "https://deno.land/std@0.177.0/encoding/csv.ts";
import { writeCSV } from "https://deno.land/x/csv/mod.ts";
import { bmi } from "../Knowledge/bmi.js";

await new Command()
  .command("batchProcess", "Use knowledge To Calculate Diabetes Diagnosis, in Batch ")
  .option("--input_path <input_path:string>", "path to CSV input file",{required: true}) 
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
        if (j>0)
          rowData[label] = Number(value);
        else
          rowData[label] = value;

      }
      output.push([row[0],bmi(rowData.height,rowData.weight)])
    } 

    const f = await Deno.open("outfileBMI.csv", {
      write: true,
      create: true,
      truncate: true,
      });

      await writeCSV(f, output);
      
      f.close();
  
  }
  )  
  .parse(Deno.args);

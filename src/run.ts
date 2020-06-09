// run.ts

import * as github from '@actions/github';


export async function run() {

  console.log(process.env);
  console.log(github.context.payload);
  console.log('Base value: ');
  console.log(process.env.BASE_VALUE);


}

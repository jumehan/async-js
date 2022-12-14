"use strict";

const BASE_URL = "http://numbersapi.com/";

async function getFavoriteNumberFact(favNum = 333) {

  const response = await axios.get(`${BASE_URL}${favNum}/trivia?json`);
  console.log(response.data.text);
}


async function getMultipleNumberFacts(batchNums = "1,2,3,4") {
  const response = await axios.get(`${BASE_URL}${batchNums}`);
  console.log(response.data);
}


const BASE_URL = "http://numbersapi.com/";
const num = 88;
let response = axios({ url: `${BASE_URL}${num}/trivia?json` });

let fourRandomFacts = await Promise.allSettled(
  [response, response, response, response]);

function getFourFacts() {
  console.log(fourRandomFacts.map(res => res.value.data.text));
}

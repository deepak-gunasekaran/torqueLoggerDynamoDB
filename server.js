/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

//snippet-sourcedescription:[ddbdoc_put.js demonstrates how to ues a DocumentClient to create or replace an item in an Amazon DynamoDB table.]
//snippet-service:[dynamodb]
//snippet-keyword:[JavaScript]
//snippet-sourcesyntax:[javascript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon DynamoDB]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[AWS-JSDG]

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html
//AWS.config.update({
//     accessKeyId: 'XXXXXXXXXXXXXXXX',
//     secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//     region: "XXXXXXXXX",
//   });

// snippet-start:[dynamodb.JavaScript.docClient.put]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
// Set the region 
AWS.config.update({region: 'us-east-1'});
//var TABLE = 'Torque';
//var STRING_VALUE = "stringtest";
//var VALUE_2 = "testtest";
//var VALUE = "test";
//const AWS_SECRET_ACCESS_KEY = "xyz"; Populated from k8secrets
//const AWS_ACCESS_KEY_ID = "xyz"; Populated from k8secrets

//console.log("test1")

// Create DynamoDB document client
//Table table = dynamo.getTable("people");



var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//console.log("test2")

server.get("/logs", (request, response) => {
const item = request.query;
console.log("req body", request.body);
console.log("Request query param is", item);
//});
var table = 'torque';


var params = {
  TableName: table,
  Item: item
  // {
  //  'id': '1000',
  //  'name': 'deep',
  //  'age': '34'
  
  //}
};

docClient.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);            
    response.json('Screwed!');
    response.status(200);
  } else {
    console.log("Success", data);
    response.json('OK!');
    response.status(200);
  }
});
});

//console.log("test3")
server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});

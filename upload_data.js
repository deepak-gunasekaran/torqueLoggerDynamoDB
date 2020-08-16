var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const AWS_ACCESS_KEY_ID = process.ENV.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.ENV.AWS_SECRET_ACCESS_KEY;
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
  TableName: 'torque',
  Item: {
    'id': '1000',
    'name': 'deep',
    'age': '34'
  }
};

docClient.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

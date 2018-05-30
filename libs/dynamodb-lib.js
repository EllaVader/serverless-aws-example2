import AWS from 'aws-sdk';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}
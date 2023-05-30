# Getting Started with GraphQL serverless app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app 


## Deploying to AWS Lambda

- Create an AWS account
- install the AWS CLI
- Create an IAM
- Configure the AWS CLI with your new IAM user's credentials


The IAM user should be granted rights to;

- S3 Bucket
- Logs
- Lambda Functions
- ApiGatewayV2


Run `npm run prod:deploy` to deploy to AWS
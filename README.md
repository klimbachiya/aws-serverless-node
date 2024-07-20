# Serverless Framework AWS NodeJS Example

This repository helps how to deploy a simple NodeJS function to AWS Lambda using the Serverless Framework.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
npm install -g serverless
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-serverless-node-lambda" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-serverless-node-lambda-dev (86s)

functions:
  hello: aws-serverless-node-lambda-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "{\"message\":\"Hi Serverless :)! Your function executed successfully!\"}"
}
```

### Local development

It is possible to invoke Lambda function from local using serverless-offline.

```
serverless plugin install -n serverless-offline
serverless invoke local --function hello
```

It will add both plugins to devDependencies in package.json file as well as will add it to plugins in serverless.yml.

```
plugins:
  - serverless-offline
```

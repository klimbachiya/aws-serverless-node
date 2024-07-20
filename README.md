# Serverless Framework AWS NodeJS Example

This repository helps how to deploy a simple NodeJS function to AWS Lambda using the Serverless Framework.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-serverless-node" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-serverless-node-dev (86s)

functions:
  hello: aws-serverless-node-dev-hello (1.5 kB)
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

The easiest way to develop and test your function is to use the Serverless Framework's `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.
# Get started with Lambda SmartApps

This example allows you to test a Lambda SmartApp without requiring any physical devices. It can also be invoked locally using [Serverless CLI](https://www.serverless.com/framework/docs/providers/aws/cli-reference/) without requiring any accounts or deployments.

## Invoke Locally

Test locally using [serverless invoke local](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) by passing in example SmartThings event payload data. This will enable you to exercise the various event handlers in the SmartApp without needing to deploy the changes.

### Examples

First, `npm install` to pull in serverless.

#### Installed event handler

`npx serverless invoke local -f smartapp -p payloads/install.json`

#### Scheduled event handler

`npx serverless invoke local -f smartapp -p payloads/schedule.json`

See [payloads](payloads) for more event data that conforms to the SmartThings SmartApp API.

## Run in AWS

### Prerequisites

- An [AWS](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) account (free tier is fine).
- A [Samsung account](https://account.samsung.com/membership/index.do) and the SmartThings mobile application.
- A [Developer Workspace](https://smartthings.developer.samsung.com/workspace/) account.

### Deploy

1. Install the dependencies for this app: `npm install`.

1. Follow the instructions to [setup AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) for serverless.

1. Deploy the Lambda function: `npx serverless deploy`.

1. Follow the steps to grant SmartThings [permission to execute your Lambda function](https://smartthings.developer.samsung.com/docs/smartapps/aws-lambda.html). **This is required for successful registration.**

### Register

Follow the instructions for [registering a SmartApp](https://smartthings.developer.samsung.com/docs/smartapps/app-registration.html) with the SmartThings platform.

- The following OAuth2 scopes are required.
	- `r:locations:*`

### Test

Follow the instructions for [testing a SmartApp](https://smartthings.developer.samsung.com/docs/testing/how-to-test.html).

Once installed, the app should schedule itself to say hello every minute.

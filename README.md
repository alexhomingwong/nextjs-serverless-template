# NextJs on Lambda - Template

This repo is a template for deploying your Nextjs application on AWS Serverless infrastructure.

It uses a Lambda to server side render the application and then serves it via Api Gateway and Cloudfront. All assets are held in an S3 bucket.

This repo is taken from an existing repo from serverless land which can be found [here](https://github.com/aws-samples/aws-lambda-nextjs). It has been tweaked so that the NextJs app uses typescript by default.

You can find more information by visiting the serverless land article [here](https://serverlessland.com/repos/nextjs-serverless-architecture).

## Guide

1. First install the packages such as cdk

```bash
npm i
```

2. Install and build the NextJs application in the app folder

```bash
cd app
npm i
npm run build
```

3. Bootstrap CDK in the root folder

```bash
cd ..
cdk bootstrap
cdk synth
```

4. Deploy the application

```bash
cdk deploy
```

## Next.js Static Files Support

In order to support `public` directory being deployed to S3 bucket and CloudFront, must use `/static` prefix for assets inside the `public` directory.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Destroy CDK app resources

To clean up your CDK app run the below command:
```bash
cdk destroy --all
```

Please be aware that some resources aren't automatically deleted and either need a retention policy that allows deletes or you need to delete them manually in you AWS account.

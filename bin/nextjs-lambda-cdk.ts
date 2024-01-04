#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { NextjsLambdaCdkStack } from "../lib/nextjs-lambda-cdk-stack";

const APP_NAME = "serverless-nextjs-template";

const app = new cdk.App();
new NextjsLambdaCdkStack(app, APP_NAME);

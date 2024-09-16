import * as cdk from 'aws-cdk-lib';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Cdk2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Cdk2Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const bucket = new Bucket(this, "mycdkbucket", {
      bucketName: "myfirstbucketcdk-2024-09-16",
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      encryption: BucketEncryption.KMS_MANAGED,
      versioned: true
    })

  }
}

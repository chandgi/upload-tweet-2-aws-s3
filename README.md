
## Use-cases

- Get the tweet of the user and store it in S3 bucket.

## Expection

- we have the following initial setup done before start working on app.

    1) install serverless module and created aws nodejs template
      - provide serverless config credentials --provider aws --key XyZ --secret zYx

    2) S3 bucket
      - lambda function has the write to this bucket.

    3) Developer account in twitter.
      - get the consumer_key, consumer_secret, access_token, access_token_secret, so that we can user twit api

## Setup

```bash
npm install
```

After you created the bucket change the bucket name in `serverless.yml` custom settings to your buckets.

```yml
custom:
  bucket: <S3-aws-bucket>
```

## Deploy

In order to deploy the you endpoint simply run

```bash
serverless deploy
```

## Usage

You can now send an HTTP request directly to the endpoint using a tool like curl

```bash
serverless invoke --function save --log --data='{"username": "nodejs"}'
```

The expected result should be similar to:

```bash
"Saved"
--------------------------------------------------------------------
START RequestId: c658859d-bd42-11e6-ac1f-c7a7ee5bd7f3 Version: $LATEST
END RequestId: c658859d-bd42-11e6-ac1f-c7a7ee5bd7f3
REPORT RequestId: c658859d-bd42-11e6-ac1f-c7a7ee5bd7f3	Duration: 436.94 ms	Billed Duration: 500 ms 	Memory Size: 1024 MB	Max Memory Used: 29 MB
```

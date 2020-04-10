# csc-airtable-aws
Airtable API for use by the Cant Stop Columbus website

## Background
This repo uses the [Serverless Framework](https://www.serverless.com) to create a REST API for the CantStopColumbus static website
to read/write data to airtable. 

The code uses `serverless-bundle` to include support for ES6/7, testing, and bundling the code to reduce AWS costs.

Much credit to the starter package and tutorial available at [Serverless Stack](https://www.serverless-stack.com), 
from which comes the general organization, `serverless-bundle`, and the testing approach.

## Testing
The system is designed for TDD using Jest. Jest is a comprehensive NPM package for testing Node/Javascript-based
applications. All tests are stored in the `tests` directory, in sub-directories for each resource managed by 
the REST API. Resources tend to be CRUD operations mapped to HTTP verbs, and there should be a test for each endpoint.

See Jest for details on how to write tests and using the test API.

To execute tests prior to release:
```
npm test
```

The above command builds the code and executes every test suite in the `tests` directory, with the command:
```
serverless-bundle test
```

## Build and Deploy
Deploying the code is relatively straightforward. Serverless Framework handles packaging, deploying resources 
via CloudFront, and exposing the API via AWS. The command `serverless deploy` will push the API code to AWS
in an optimized bundle.

```
serverless deploy
```

or 

```
npm deploy:prod
```

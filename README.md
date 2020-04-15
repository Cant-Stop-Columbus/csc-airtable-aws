# csc-airtable-aws
Airtable API for use by the Cant Stop Columbus website

## Background
This repo uses the [Serverless Framework](https://www.serverless.com) to create a REST API for the CantStopColumbus static website
to read/write data to airtable. 

The code uses `serverless-bundle` to include support for ES6/7, testing, and bundling the code to reduce AWS costs.

Much credit to the starter package and tutorial available at [Serverless Stack](https://www.serverless-stack.com), 
from which comes the general organization, `serverless-bundle`, and the testing approach.

## Structure of the Repo
The `gateway` directory holds the code that defines the API gateway. The `api` directory holds the code for all 
of the actual resources that are exposed by the REST API. The gateway should only be deployed one time. The 
`api` directory, however, should be deployed whenever code is changed. 

### Adding a New Resource
The `api/promotions` directory holds the code that exposes the REST API resource for the 10tv Promotions table in
the Airtable base. This resource uses Jest for testing and mocks out the actual network API calls to interact with
the Airtable base. To create a new resource, add it to the serverless.yml, and copy the `promotions` directory as
an example.

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

There are several environment variables that you will have to have set in order to deploy. Among them:
- AWS_ACCESS_ID    : ID of API user for AWS
- AWS_SECRET_KEY   : secret API key used for access to the AWS API
- AIRTABLE_API_KEY : secret API key for Airtable API
- AIRTABLE_BASE    : ID of the Airtable "base" being accessed

Obtain these keys from the Can't Stop Columbus leadership.

```
serverless deploy
```

or 

```
npm deploy:prod
```

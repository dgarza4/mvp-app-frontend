# README

This UI Kit is a basic started repo for a react single page app. It uses react and typescript.

To run in development: `yarn start`

To build: `yarn build`

## Repo Structure

All shared components will be found in the `src/components` directory.

All pages will be found in the `src/pages` directory. Pages are top level destinations that the react-router instance in `App.tsx` can reach.

## Deployment

You will have to create an S3 bucket and [configure it for static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html). Make sure to set the `Error document` to `index.html` so that requests to your SPA with paths that do not exist end up opening the app regardless.

If you have a url at hand you can also [configure a cloudfront distribution to serve s3 assets](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/)

You also need to configure cloudfront so that it returns something even if the path does not exist. Go to CloudFront and click the distribution you want to apply these SPA settings to. Click the Error Pages tab and add a new error page. Fill the form with these fields:

- HTTP Error Code: 404
- TTL: 0
- Custom Error Response: Yes
- Response Page Path: /index.html
- HTTP Response Code: 200

## Azure Pipelines

You can find the CI pipeline for azure in the `azure-pipelines.yml`. Before you run it, make sure to change all the variables starting with `CHANGE_`. Use the s3 bucket you created in the above step.

## SEO

You can add a `title` and `description` tag to each individual page by using the `src/components/HeaderTags/index.tsx` component.

## Pre-rendering

`react-snap` will automatically pre-render all the reachable pages in the app after `yarn build` is run. It does so by using puppetteer to crawl the app and generate static HTML files that can be served directly from an s3 bucket via cloudfront.

IMPORTANT: the react reconciliation algorithm has a hard time when components are conditionally rendered. What this means is that if your layout changes from mobile to desktop, you'd want to hide the component via css using `display: none;` as opposed to returning `null` when a component is not required. Also, avoid inline styles in favor of css so that a pre-rendered static page randered for mobile will work for desktop as well.

## Linting and Formatting

Linting and formatting will take place right before each git commit via a husky pre-commit hook.

## Auth

This repo is set up to use AWS Cognito.

## Tests

### Start Frontend Locally

Remember to point the frontend to the right backend `address:port`:

```sh
REACT_APP_API_URL=http://localhost:13080/api/todo/v1 yarn start
```

### Cypress

Set any of the following environment variables, if defaults are not correct:

Open the UI:

```sh
CYPRESS_BASE_URL=http://localhost:3000 yarn run cy:open
```

Create the base images:

```sh
CYPRESS_BASE_URL=http://localhost:3000 yarn run cy:base
```

Run the test against the base images:

```sh
CYPRESS_BASE_URL=http://localhost:3000 yarn run cy:test
```

Generate report:

```sh
yarn run cy:report
```

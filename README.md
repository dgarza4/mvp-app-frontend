# README

This UI Kit is a basic started repo for a react single page app. It uses react and typescript.

To run in development: `yarn start`

To build: `yarn build`

## Repo Structure

All shared components will be found in the `src/components` directory.

All pages will be found in the `src/pages` directory. Pages are top level destinations that the react-router instance in `App.tsx` can reach.

## Azure Pipelines

You can find the CI pipeline for azure in the `azure-pipelines.yml`. Before you run it, make sure to change all the variables starting with `CHANGE_`.

## SEO

You can add a `title` and `description` tag to each individual page by using the `src/components/HeaderTags/index.tsx` component.

## Pre-rendering

`react-snap` will automatically pre-render all the reachable pages in the app after `yarn build` is run. It does so by using puppetteer to crawl the app and generate static HTML files that can be served directly from an s3 bucket via cloudfront.

## Linting and Formatting

Linting and formatting will take place right before each git commit via a husky pre-commit hook.
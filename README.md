# Vourcher Proxy Server

> A sample product page modeled after Groupon's product pages

## Related Projects

- https://github.com/TenderloinCodeDealers/ratings-reviews
- https://github.com/TenderloinCodeDealers/photo-carousel
- https://github.com/TenderloinCodeDealers/side-bar
- https://github.com/TenderloinCodeDealers/recently-viewed-deals

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Make sure to start all the modules' individual servers before setting up the proxy server.
Once they are set up, you can start the proxy server. To do this, run the following command:
`npm start`

The server will start in port 3000. So if you navigate to http://localhost:3000/:id (Where :id is the index of a deal, currently between 1-100), you should be able to view all the modules being displayed.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

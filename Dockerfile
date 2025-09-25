### Dependencies ###
FROM node:20-alpine AS deps
WORKDIR /storefront

# Copy storefront package.json and yarn.lock from /storefront
COPY ./package.json .
# COPY ./yarn.lock? .

# Install deps and launch patch-package
RUN yarn install --frozen-lockfile

### Build ###
FROM node:20-alpine AS builder
WORKDIR /storefront

# Copy cached root and package node_modules from deps
COPY --from=deps /storefront/node_modules /storefront/node_modules

# Copy app source code
COPY . /storefront

# Build the app
RUN yarn build

# Run the builded app
ENTRYPOINT [ "yarn", "start" ]
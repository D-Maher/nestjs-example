# Use the official Node.js image as the base image
FROM node:22.14.0 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies including dev dependencies needed for build
RUN pnpm install --frozen-lockfile

COPY . /app

# Build the NestJS application
RUN pnpm run build

FROM base
WORKDIR /app
COPY --from=prod /app/package.json /app/package.json
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=prod /app/dist /app/dist

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start:prod"]

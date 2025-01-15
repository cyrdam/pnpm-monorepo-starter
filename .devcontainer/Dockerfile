# some examples: https://benmatselby.dev/post/vscode-dev-containers/

FROM mcr.microsoft.com/devcontainers/javascript-node:22

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y upgrade --no-install-recommends \
	# Install pnpm
	&& npm install -g pnpm

COPY pnpm-lock.yaml ./

# pre-loads required packages from pnpm-lock.yaml into the store,
# ready to be installed with `pnpm install`
RUN pnpm fetch

# EXPOSE 4321

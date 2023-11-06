FROM oven/bun:latest

#Setting up workdir
WORKDIR /usr/app

COPY package.json /usr/app/
#Copy from original folder to docker folder
#Install Dependencies
RUN bun install

COPY ./ ./

#Default command
CMD [ "bun","start" ]
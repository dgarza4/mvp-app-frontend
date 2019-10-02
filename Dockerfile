FROM node:12-alpine
WORKDIR /app
ADD . /app
ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin
RUN npm install -g serve
RUN npm install
RUN npm run graphql-codegen
RUN npm run build
# “| cat” prevents react-scripts clearing the output
CMD serve -s build -l $PORT
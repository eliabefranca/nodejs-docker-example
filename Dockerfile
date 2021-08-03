FROM node:12

WORKDIR /app

COPY package.json ./

RUN npm install

# Copies from . in the source to . in the container
COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]

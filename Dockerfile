FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install -g bun
RUN bun install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]

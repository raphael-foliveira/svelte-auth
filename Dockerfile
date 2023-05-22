FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && npx prisma generate


CMD ["npm", "run", "build", "&&", "npm", "run", "start"]
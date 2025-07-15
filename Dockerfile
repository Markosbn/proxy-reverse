FROM node:24

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .
#RUN npm init -y
#RUN npm install express mysql

RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 3000

CMD [ "/wait-for-it.sh","database:3306", "--", "node", "index.js" ]

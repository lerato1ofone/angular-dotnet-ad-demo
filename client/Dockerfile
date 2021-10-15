#### Stage 1: Build
FROM node:14.17 as builder

ARG WORKDIR=/app
ENV PATH ${WORKDIR}/node_modules/.bin:$PATH

RUN mkdir ${WORKDIR}
WORKDIR ${WORKDIR}

COPY package.json package-lock.json ${WORKDIR}
RUN npm install
COPY . ${WORKDIR}

RUN npm run build

#### Stage 2: Run
FROM nginx:1.15.8-alpine

COPY --from=builder /app/dist/client /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
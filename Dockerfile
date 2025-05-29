FROM nginx:stable-alpine3.21-perl

COPY ./dist/hello-world-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
RUN apk upgrade libxml2

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]

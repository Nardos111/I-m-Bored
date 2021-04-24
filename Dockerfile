FROM nginx:alpine
# # FROM ubuntu
# # RUN apt-get update
# # RUN apt-get install nginx -y
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./index.html /usr/share/nginx/html/index.html
# COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
# FROM httpd:2.4
# COPY . /usr/local/apache2/htdocs/
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p ~/nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
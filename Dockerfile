# Dockerfile for MySQL
FROM mysql:8.0

# Optional: set default environment variables
ENV MYSQL_DATABASE=InclusiveInsights
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

EXPOSE 3306

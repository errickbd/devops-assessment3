# Use the official PostgreSQL image as the base image
FROM postgres:16.4-bookworm

# Set environment variables for the database
# These are optional but can be useful for setting up the database
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=zxPaZx2LvYu
ENV POSTGRES_DB=movie_database

# Copy the initialization SQL script into the Docker image
# PostgreSQL will automatically execute any script found in /docker-entrypoint-initdb.d/
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the port PostgreSQL will run on
EXPOSE 5432

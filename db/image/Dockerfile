FROM mysql

ENV MYSQL_ROOT_PASSWORD=${DATABASE_PASSWORD}

COPY ./init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

EXPOSE 3306
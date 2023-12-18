FROM mysql

ENV MYSQL_ROOT_PASSWORD=root
# ENV host_cache_size=0 

COPY ./init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

EXPOSE 3306
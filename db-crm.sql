CREATE DATABASE "chat"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

create table users (
	id serial Primary key,
	name varchar(30) DEFAULT 'Not name' not null,
	login varchar(30) not null,
	passw varchar(30) not null,
	rule smallint DEFAULT 1 not null
);

create index ind_admins_login on users using hash (login);
create index ind_admins_passw on users using hash (passw);


INSERT INTO admins (id, name, login, passw, rule) VALUES
	 (1,'Yaroslav Lyan','Yaroslav','$2a$10$A2Nt7VXd69TSjOxVX4pvdOXdBU5VPgkrU9dUHKWNdvjLX0PregAHW',1),
	 (2,'Mihail Kievcev','Mihail','$2a$10$A2Nt7VXd69TSjOxVX4pvdOXdBU5VPgkrU9dUHKWNdvjLX0PregAHW',2),
	 (3,'Anton Panchenko','Anton','$2a$10$A2Nt7VXd69TSjOxVX4pvdOXdBU5VPgkrU9dUHKWNdvjLX0PregAHW',2),
	 (4,'Svetlana Ryd','Svetlana','$2a$10$A2Nt7VXd69TSjOxVX4pvdOXdBU5VPgkrU9dUHKWNdvjLX0PregAHW',2);
	 

CREATE FUNCTION check_login_and_password(l_login CHARACTER VARYING, l_pass CHARACTER VARYING) RETURNS boolean AS
$$
SELECT EXISTS(SELECT * FROM admins WHERE admins.login = l_login AND admins.pass = l_pass );
$$
LANGUAGE sql;

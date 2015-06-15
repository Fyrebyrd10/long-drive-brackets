drop database if exists ldb;
create database ldb;

-- create user 'ldb_user'@'localhost' identified by 'longball';
-- create user 'ldb_user'@'%' identified by 'longball';
-- grant all on tla.* to 'ldb_user'@'localhost';
-- grant all on tla.* to 'ldb_user'@'%';

use ldb;
create table player (id numeric, name varchar(255));
create table records(
  id numeric,
  bracket_id numeric,
  finals_id numeric,
  round_id numeric,
  set_id numeric,
  group_id numeric,
  player_id numeric,
  distance numeric,
  score numeric);
-- create table group_records (group_id numeric, record_id numeric);

insert into player(id, name) values (0, 'Select Hitter');
  insert into player(id, name) values (1, 'Tim Burke');
  insert into player(id, name) values (2, 'Spencer McDaniel');
  insert into player(id, name) values (3, 'Chris Hall');
  insert into player(id, name) values (4,'Brent Champion');
  insert into player(id, name) values (5, 'Chris Deason');
  insert into player(id, name) values (6,'Brooks Baldwin');
  insert into player(id, name) values (7,'Troy Templeton');
  insert into player(id, name) values (8,  'Maurice Allen');
  insert into player(id, name) values (9,  'Trent Scruggs');
  insert into player(id, name) values (10,  'Aaron Mansfield');
  insert into player(id, name) values (11,  'Tyler Parsons');
  insert into player(id, name) values (12,  'Troy Teal');
  insert into player(id, name) values (13,  'Eddie Fernandez');
  insert into player(id, name) values (14,  'Richard Smith');
  insert into player(id, name) values (15,  'Andy Bollenbacher');
  insert into player(id, name) values (16,  'Ryan Reisbeck');
  insert into player(id, name) values (17,  'Kevin Shook');
  insert into player(id, name) values (18,  'Landon Gentry');
  insert into player(id, name) values (19,  'Matt Vilade');
  insert into player(id, name) values (20,  'Tommy Hug');
  insert into player(id, name) values (21,'Will Hogue');
  insert into player(id, name) values (22,'Hunter Scheib');
  insert into player(id, name) values (23,'Nick Kiefer');
  insert into player(id, name) values (24,'Mike Ferrell');
  insert into player(id, name) values (25,'Seth Ellsworth');
  insert into player(id, name) values (26,'Rob Tiettmeyer');
  insert into player(id, name) values (27,'Jason Frey');
  insert into player(id, name) values (28,'Brady Torbitt');
  insert into player(id, name) values (29,'Jessie Petterson');
  insert into player(id, name) values (30,'Austin Hinshaw');
  insert into player(id, name) values (31,'Nicholas Guyton');
  insert into player(id, name) values (32,'Myles Dibrincat');
  insert into player(id, name) values (33,'Daniel Simon ');
  insert into player(id, name) values (34,'Kevin Hennessy');
  insert into player(id, name) values (35,'Shawn Holcomb');
  insert into player(id, name) values (36,'Austin Stinemetz');
  insert into player(id, name) values (37,'Ben Tuaone');
  insert into player(id, name) values (38,'Josh Crews');
  insert into player(id, name) values (39,'Randy Hunt');
  insert into player(id, name) values (40,'Ian Griscom');
  insert into player(id, name) values (41,'Kevin Bullard');
  insert into player(id, name) values (42,'Andrew Williams');
  insert into player(id, name) values (43,'Dustin Merrill');
  insert into player(id, name) values (44,'Jeff Crittendon');
  insert into player(id, name) values (45,'Patrick Hopper');
  insert into player(id, name) values (46,'Steve Magam');
  insert into player(id, name) values (47,'Bobby Peterson');
  insert into player(id, name) values (48,'Jeff Flagg');


    insert into records(id, bracket_id, finals_id, round_id, set_id, group_id, player_id, distance, score)
      values (0,0,0,0,0,0,0,0,0);
      -- insert into records(id, bracket_id, round_id, set_id, group_id, player_id, distance, score)
      --   values (2,1,1,1,1,2,0,0);
      --   insert into records(id, bracket_id, round_id, set_id, group_id, player_id, distance, score)
      --     values (3,1,1,1,1,3,0,0);
      --     insert into records(id, bracket_id, round_id, set_id, group_id, player_id, distance, score)
      --       values (4,1,1,1,1,4,0,0);

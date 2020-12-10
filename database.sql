create table player(
	id serial not null primary key,
    name text
);

create table language_exercise(
	id serial not null primary key,
    level_name text,
    level_order int,
    images text,
    model_tag text
);

create table player_exercise(
	id serial not null primary key,
    player_id int,
    language_exercise_id int,
    listen_count int,
    speak_count int,
    completed int,

    foreign key (player_id) references player(id),
    foreign key (language_exercise_id) references language_exercise(id)
);


insert into language_exercise (images, model_tag) values('thebig5.jpg', 'background');
insert into language_exercise (images, model_tag, level_name, level_order) values ('xhosa.jpg', 'xhosa', 'greet_xhosa', '1');
insert into language_exercise (images, model_tag, level_name, level_order) values ('venda.jpg', 'venda', 'greet_venda', '2');
insert into language_exercise (images, model_tag, level_name, level_order) values ('zulu.jpg', 'zulu', 'greet_zulu', '3');
insert into language_exercise (images, model_tag, level_name, level_order) values ('ndebele.jpg', 'isindebele', 'greet_ndebele', '4');
insert into language_exercise (images, model_tag, level_name, level_order) values ('english.jpg', 'english', 'greet_english', '5');


-- select * from language_exercise where model_tag = '';




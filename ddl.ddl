

CREATE TABLE alumno (
    id_alumno         INT NOT NULL,
    nombre_alumno     varchar(100) NOT NULL,
    fecha_nacimiento  DATE NOT NULL,
    direccion         TEXT NOT NULL,
    telefono          varchar(25) NOT NULL,
    correo            varchar(75) unique,
    id_sucursal       INT NOT NULL
);

CREATE UNIQUE INDEX alumno__idx ON
    alumno (
        id_sucursal
    ASC );

ALTER TABLE alumno ADD CONSTRAINT alumno_pk PRIMARY KEY ( id_alumno );

CREATE TABLE asigna_grado_alu (
    id_alumno      INT NOT NULL,
    id_grado       INT NOT NULL,
    carnet_alumno  VARCHAR(25) NOT NULL UNIQUE,
    fecha          DATE NOT NULL
);

ALTER TABLE asigna_grado_alu ADD CONSTRAINT asigna_grado_alu_pk PRIMARY KEY ( id_alumno,
                                                                              id_grado );

CREATE TABLE asigna_grado_cat (
    id_catedratico  INT NOT NULL,
    id_grado        INT NOT NULL,
    fecha           DATE NOT NULL
);

ALTER TABLE asigna_grado_cat ADD CONSTRAINT asigna_grado_cat_pk PRIMARY KEY ( id_catedratico,
                                                                              id_grado );

CREATE TABLE catedratico (
    id_catedratico      INT NOT NULL,
    carnet_catedratico  VARCHAR(25) NOT NULL UNIQUE,
    nombre_catedratico  VARCHAR(100) NOT NULL,
    telefono            VARCHAR(25) NOT NULL,
    correo              VARCHAR(75) UNIQUE
);

ALTER TABLE catedratico ADD CONSTRAINT catedratico_pk PRIMARY KEY ( id_catedratico );

CREATE TABLE grado (
    id_grado      INT NOT NULL,
    nombre_grado  VARCHAR(45) NOT NULL,
    id_nivel      INT NOT NULL
);

ALTER TABLE grado ADD CONSTRAINT grado_pk PRIMARY KEY ( id_grado );

CREATE TABLE nivel (
    id_nivel      INT NOT NULL,
    nombre_nivel  VARCHAR(45) NOT NULL
);

ALTER TABLE nivel ADD CONSTRAINT nivel_pk PRIMARY KEY ( id_nivel );

CREATE TABLE sucursal (
    id_sucursal      INT NOT NULL,
    nombre_sucursal  VARCHAR(75) NOT NULL
);

ALTER TABLE sucursal ADD CONSTRAINT sucursal_pk PRIMARY KEY ( id_sucursal );

ALTER TABLE alumno
    ADD CONSTRAINT alumno_sucursal_fk FOREIGN KEY ( id_sucursal )
        REFERENCES sucursal ( id_sucursal );

ALTER TABLE asigna_grado_alu
    ADD CONSTRAINT asigna_grado_alu_alumno_fk FOREIGN KEY ( id_alumno )
        REFERENCES alumno ( id_alumno );

ALTER TABLE asigna_grado_alu
    ADD CONSTRAINT asigna_grado_alu_grado_fk FOREIGN KEY ( id_grado )
        REFERENCES grado ( id_grado );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE asigna_grado_cat
    ADD CONSTRAINT asigna_grado_cat_catedratico_fk FOREIGN KEY ( id_catedratico )
        REFERENCES catedratico ( id_catedratico );

ALTER TABLE asigna_grado_cat
    ADD CONSTRAINT asigna_grado_cat_grado_fk FOREIGN KEY ( id_grado )
        REFERENCES grado ( id_grado );

ALTER TABLE grado
    ADD CONSTRAINT grado_nivel_fk FOREIGN KEY ( id_nivel )
        REFERENCES nivel ( id_nivel );


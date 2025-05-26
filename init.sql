CREATE TABLE IF NOT EXISTS departamentos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO departamentos (nombre) VALUES
('Desarrollo'),
('Marketing'),
('Jurídico'),
('Recursos Humanos');

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100),
  edad INTEGER,
  correo VARCHAR(100) NOT NULL UNIQUE,
  departamento_id INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'activo',
  CONSTRAINT fk_departamento FOREIGN KEY (departamento_id)
    REFERENCES departamentos(id)
    ON DELETE SET NULL
);
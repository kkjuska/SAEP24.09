BEGIN;

CREATE TYPE tipo AS ENUM ('comum', 'chef');

CREATE TABLE IF NOT EXISTS public.tb_usuario
(
    id_usuario serial NOT NULL,
    nome text NOT NULL,
    nome_usuario text NOT NULL,
    email text NOT NULL,
    senha text NOT NULL,
    imagem_usuario text,
    tipo tipo NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    updated_at timestamp with time zone NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS public.tb_receita
(
    id_receita serial NOT NULL,
    titulo_receita text NOT NULL,
    origem_receita text NOT NULL,
    id_usuario serial NOT NULL,
    url_imagem text,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    updated_at timestamp with time zone NOT NULL,
    PRIMARY KEY (id_receita)
);

CREATE TABLE IF NOT EXISTS public.tb_favoritar
(
    id_favorito serial NOT NULL,
    id_receita serial NOT NULL,
    id_usuario serial NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    updated_at timestamp with time zone NOT NULL,
    PRIMARY KEY (id_favorito)
);

ALTER TABLE IF EXISTS public.tb_receita
    ADD CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario)
    REFERENCES public.tb_usuario (id_usuario) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tb_favoritar
    ADD CONSTRAINT "fk_usuario_idFavorito" FOREIGN KEY (id_usuario)
    REFERENCES public.tb_usuario (id_usuario) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tb_favoritar
    ADD CONSTRAINT fk_receita_id FOREIGN KEY (id_receita)
    REFERENCES public.tb_receita (id_receita) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

INSERT INTO public.tb_usuario(id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo, created_at, updated_at)
	VALUES
	 (1,'Chef Marco Bianchi','chef1','chef1@saepchef.com',123456,'chef1.jpg','chef','2026-01-10 09:15:00','2026-01-10 09:15:00'),	
	 (2, 'Chef Ana Ferreira' , 'chef2' ,'chef2@saepchef.com', 123456 ,'chef2.jpg','chef','2026-01-12 10:30:00','2026-01-12 10:30:00'),
	 (3,'Chef Lucas Tanaka','chef3','chef3@saepchef.com',123456,'chef3.jpg','chef','2026-01-14 14:20:00','2026-01-14 14:20:00'),
	 (4,'Mariana Costa', 'usuario1','usuario1@gmail.com',123456,'usuario1.jpg','comum','2026-01-16 08:45:00','2026-01-16 08:45:00'),
	 (5,'Rafael Souza','usuario2','usuario2@gmail.com',123456,'usuario2.jpg','comum','2026-01-18 11:00:00','2026-01-18 11:00:00'),
	 (6,'Beatriz Lima','usuario3','usuario3@gmail.com',123456,'usuario3.jpg','comum','2026-01-20 16:10:00','2026-01-20 16:10:00');

END;
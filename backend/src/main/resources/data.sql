INSERT INTO materia (id, codigo, nome) VALUES 
(1, 'MATA02', 'CÁLCULO A'),
(2, 'MATA37', 'INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO'),
(3, 'MATA39', 'SEMINÁRIOS DE INTRODUÇÃO AO CURSO'),
(4, 'MATA42', 'MATEMÁTICA DISCRETA I'),
(5, 'MATA68', 'COMPUTADOR, ÉTICA E SOCIEDADE'),

(6, 'ADME99', 'ECONOMIA DA INOVAÇÃO'),
(7, 'MATC73', 'INTRODUÇÃO À LÓGICA MATEMÁTICA'),
(8, 'MATC90', 'CIRCUITOS DIGITAIS E ARQUITETURA DE COMPUTADORES'),
(9, 'MATC92', 'FUNDAMENTOS DE SISTEMAS DE INFORMAÇÃO'),
(10, 'MATD04', 'ESTRUTURAS DE DADOS'),

(11, 'ADM001', 'INTRODUÇÃO À ADMINISTRAÇÃO'),
(12, 'MATA07', 'ÁLGEBRA LINEAR A'),
(13, 'MATA55', 'PROGRAMAÇÃO ORIENTADA A OBJETOS'),
(14, 'MATA58', 'SISTEMAS OPERACIONAIS'),
(15, 'MATC94', 'INTRODUÇÃO ÀS LINGUAGENS FORMAIS E TEORIA DA COMPUTAÇÃO'),
(16, 'LETA09', 'OFICINA DE LEITURA E PRODUÇÃO DE TEXTOS'),
(17, 'MAT236', 'MÉTODOS ESTATÍSTICOS'),
(18, 'MATA59', 'REDES DE COMPUTADORES I'),
(19, 'MATA62', 'ENGENHARIA DE SOFTWARE I'),
(20, 'MATC82', 'SISTEMAS WEB'),

(21, 'ADM211', 'MÉTODOS QUANTITATIVOS APLICADOS À ADMINISTRAÇÃO'),
(22, 'MATA56', 'PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO'),
(23, 'MATA60', 'BANCO DE DADOS'),
(24, 'MATA63', 'ENGENHARIA DE SOFTWARE II'),
(25, 'MATC84', 'LABORATÓRIO DE PROGRAMAÇÃO WEB'),

(26, 'ADMF01', 'SISTEMAS DE APOIO À DECISÃO'),
(27, 'MAT220', 'EMPREENDEDORES EM INFORMÁTICA'),
(28, 'MATA76', 'LINGUAGENS PARA APLICAÇÃO COMERCIAL'),
(29, 'MATB09', 'LABORATÓRIO DE BANCO DE DADOS'),
(30, 'MATC89', 'APLICAÇÕES PARA DISPOSITIVOS MÓVEIS'),

(31, 'MATA64', 'INTELIGÊNCIA ARTIFICIAL'),
(32, 'MATB02', 'QUALIDADE DE SOFTWARE'),
(33, 'MATB19', 'SISTEMAS MULTIMÍDIA'),
(34, 'MATC72', 'INTERAÇÃO HUMANO-COMPUTADOR'),
(35, 'MATC99', 'SEGURANÇA E AUDITORIA DE SISTEMAS DE INFORMAÇÃO'),
 
(36, 'MATA01', 'GEOMETRIA ANALÍTICA'),

(37, 'MATA38', 'PROJETO DE CIRCUITOS LÓGICOS'),

(38, 'MATA40', 'ESTRUTURAS DE DADOS E ALGORITMOS I'),
(39, 'MATA48', 'ARQUITETURA DE COMPUTADORES'),
(40, 'MATA57', 'LABORATÓRIO DE PROGRAMAÇÃO I'),
(41, 'MATA95', 'COMPLEMENTOS DE CÁLCULO'),
(42, 'MATA97', 'MATEMÁTICA DISCRETA II'),

(43, 'FISA75', 'ELEMENTOS DO ELETROMAGNETISMO E DE CIRCUITOS ELÉTRICOS'),
(44, 'MATA47', 'LÓGICA PARA COMPUTAÇÃO'),
(45, 'MATA49', 'PROGRAMAÇÃO DE SOFTWARE BÁSICO'),
(46, 'MATA50', 'LINGUAGENS FORMAIS E AUTÔMATOS'),

(47, 'FCHC45', 'METODOLOGIA E EXPRESSÃO TÉCNICO-CIENTÍFICA'),
(48, 'MATA51', 'TEORIA DA COMPUTAÇÃO'),
(49, 'MATA52', 'ANÁLISE E PROJETO DE ALGORITMOS'),
(50, 'MATA61', 'COMPILADORES'),

(51, 'MATA53', 'TEORIA DOS GRAFOS'),
(52, 'MATA54', 'ESTRUTURAS DE DADOS E ALGORITMOS II'),

(53, 'MATA65', 'COMPUTAÇÃO GRÁFICA'),
(54, 'MATA88', 'FUNDAMENTOS DE SISTEMAS DISTRIBUÍDOS'),
(55, 'MATE11', 'ENGENHARIA DE SOFTWARE II-A');


INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(36, 'BCC', '1'), -- MATA01
(1,  'BCC', '1'), -- MATA02
(37, 'BCC', '1'), -- MATA38
(2,  'BCC', '1'), -- MATA37
(3,  'BCC', '1'), -- MATA39
(4,  'BCC', '1'); -- MATA42

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(12, 'BCC', '2'), -- MATA07
(38, 'BCC', '2'), -- MATA40
(39, 'BCC', '2'), -- MATA48
(40, 'BCC', '2'), -- MATA57
(41, 'BCC', '2'), -- MATA95
(42, 'BCC', '2'); -- MATA97

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(43, 'BCC', '3'), -- FISA75
(17, 'BCC', '3'), -- MAT236
(44, 'BCC', '3'), -- MATA47
(45, 'BCC', '3'), -- MATA49
(46, 'BCC', '3'), -- MATA50
(13, 'BCC', '3'); -- MATA55

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(47, 'BCC', '4'), -- FCHC45
(48, 'BCC', '4'), -- MATA51
(49, 'BCC', '4'), -- MATA52
(14, 'BCC', '4'), -- MATA58
(50, 'BCC', '4'), -- MATA61
(5,  'BCC', '4'); -- MATA68

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(51, 'BCC', '5'), -- MATA53
(52, 'BCC', '5'), -- MATA54
(18, 'BCC', '5'), -- MATA59
(19, 'BCC', '5'), -- MATA62
(22, 'BCC', '5'); -- MATA56 (correspondente à MATE12)

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(23, 'BCC', '6'), -- MATA60
(31, 'BCC', '6'), -- MATA64
(53, 'BCC', '6'), -- MATA65
(54, 'BCC', '6'), -- MATA88
(55, 'BCC', '6'); -- MATE11

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(1,  'SI', '1'), -- MATA02
(2,  'SI', '1'), -- MATA37
(3,  'SI', '1'), -- MATA39
(4,  'SI', '1'), -- MATA42
(5,  'SI', '1'); -- MATA68

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(6,  'SI', '2'), -- ADME99
(7,  'SI', '2'), -- MATC73
(8,  'SI', '2'), -- MATC90
(9,  'SI', '2'), -- MATC92
(10, 'SI', '2'); -- MATD04

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(11, 'SI', '3'), -- ADM001
(12, 'SI', '3'), -- MATA07
(13, 'SI', '3'), -- MATA55
(14, 'SI', '3'), -- MATA58
(15, 'SI', '3'); -- MATC94


INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(16, 'SI', '4'), -- LETA09
(17, 'SI', '4'), -- MAT236
(18, 'SI', '4'), -- MATA59
(19, 'SI', '4'), -- MATA62
(20, 'SI', '4'); -- MATC82

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(21, 'SI', '5'), -- ADM211
(22, 'SI', '5'), -- MATA56
(23, 'SI', '5'), -- MATA60
(24, 'SI', '5'), -- MATA63
(25, 'SI', '5'); -- MATC84

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(26, 'SI', '6'), -- ADMF01
(27, 'SI', '6'), -- MAT220
(28, 'SI', '6'), -- MATA76
(29, 'SI', '6'), -- MATB09
(30, 'SI', '6'); -- MATC89

INSERT INTO materia_curso (materia_id, curso, semestre_do_curso) VALUES
(31, 'SI', '7'), -- MATA64
(32, 'SI', '7'), -- MATB02
(33, 'SI', '7'), -- MATB19
(34, 'SI', '7'), -- MATC72
(35, 'SI', '7'); -- MATC99

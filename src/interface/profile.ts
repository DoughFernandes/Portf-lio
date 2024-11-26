// @src/interface/types.ts// src/interface/types.ts
export interface Contato {
  email?: string;
  telefone?: string;
  github?: string;
  linkedin?: string;
  Instagram?: string;
}

export interface Profile {
  nome?: string;
  foto?: string;
  emprego?: string;
  localizacao?: string;
  contato?: Contato;
  github?: string;
  linkedin?: string;
  descricao?: string;
  habilidades_tecnicas?: { [key: string]: string };
  habilidades_interpessoais?: string[];
  idiomas?: {
    portugues?: string;
    ingles?: string;
  };
  portfolio?: {
    titulo?: string;
    subtitulo?: string;
    descricao?: string;
    link?: string;
    imagem?: string;
    ferramentas?: { [key: string]: string };
  }[];
  experiencia_profissional?: {
    cargo: string;
    empresa: string;
    periodo: string;
    descricao: string;
  }[];
  educacao?: {
    instituicao: string;
    curso: string;
    periodo: string;
    descricao: string;
    url: string;
  }[];
}


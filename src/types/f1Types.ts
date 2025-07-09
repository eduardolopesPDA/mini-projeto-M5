export interface Piloto {
  id: number;
  nome: string;
  equipe: string;
  nacionalidade: string;
  numeroCarro: number;
  vitorias: number;
  poles: number;
  podios: number;
  titulosMundiais: number;
  imagemUrl?: string;
}
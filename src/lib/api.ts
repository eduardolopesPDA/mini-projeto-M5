 const API_BASE_URL = 'https://mini-projeto-m4-bwug.onrender.com';

 interface Piloto {
   id: number;
   nome: string;
   equipe: string;
   numeroCarro: number;
   nacionalidade: string;
   vitorias: number;
   poles: number;
   podios: number;
   titulosMundiais: number;
   imagemUrl?: string;
 }

 export const fetchPilotos = async (): Promise<Piloto[]> => {
   const response = await fetch(`${API_BASE_URL}/pilotos`);
  
   if (!response.ok) {
     throw new Error(`Erro HTTP: ${response.status}`);
   }

   const contentType = response.headers.get('content-type');
   if (!contentType?.includes('application/json')) {
     throw new Error('Resposta não é JSON');
   }

   return response.json();
 };

 export const fetchPilotoById = async (id: number): Promise<Piloto> => {
   const response = await fetch(`${API_BASE_URL}/pilotos/${id}`);
  
   if (!response.ok) {
     throw new Error(`Erro ao buscar piloto ${id}`);
   }

   return response.json();
 };

 export const fetchPilotosByEquipe = async (equipe: string): Promise<Piloto[]> => {
   const response = await fetch(`${API_BASE_URL}/equipes/${encodeURIComponent(equipe)}`);
  
   if (!response.ok) {
     throw new Error(`Erro ao buscar equipe ${equipe}`);
   }

   return response.json();
 };
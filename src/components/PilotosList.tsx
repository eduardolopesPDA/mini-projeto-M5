import React, { useEffect, useState } from 'react';
import { fetchPilotos } from '../services/f1Services';
import { Piloto } from '../types/f1Types';
import PilotoCard from './PilotoCard';
import './PilotosList.css';



const PilotosList: React.FC = () => {
  const [pilotos, setPilotos] = useState<Piloto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPilotos = async () => {
      try {
        const data = await fetchPilotos();
        console.log('Dados recebidos:', data);
        setPilotos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    loadPilotos();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pilotos-list">
      {pilotos.map((piloto) => (
        <PilotoCard key={piloto.id} piloto={piloto} />
      ))}
    </div>
  );
};

export default PilotosList;
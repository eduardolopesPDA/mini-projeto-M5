import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPilotoById } from '../services/f1Services';
import { Piloto } from '../types/f1Types';
import './PilotoDetalhes.css';

const PilotoDetalhes: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [piloto, setPiloto] = useState<Piloto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPiloto = async () => {
            try {
                if (!id) return;
                
                const pilotoData = await fetchPilotoById(parseInt(id));
                setPiloto(pilotoData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        loadPiloto();
    }, [id]);

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!piloto) return <div>Nenhum piloto encontrado</div>;

    return (
        <div className="piloto-detalhes">
            <h2>{piloto.nome}</h2>
            <div className="detalhes-grid">
                <div className="detalhe-item">
                    <span>Equipe:</span>
                    <strong>{piloto.equipe}</strong>
                </div>
                {/* Adicione os outros campos conforme necessário */}
            </div>
        </div>
    );
};

export default PilotoDetalhes;
import React from 'react';
import { Piloto } from '../types/f1Types';
import './PilotoCard.css';


interface PilotoCardProps {
  piloto: Piloto;
}

const PilotoCard: React.FC<PilotoCardProps> = ({ piloto }) => {
  return (
    <div className="piloto-card">
      <div className="piloto-header">
        <h3>{piloto.nome}</h3>
        <span className="numero-carro">#{piloto.numeroCarro}</span>
      </div>
      <div className="piloto-body">
        <p>Equipe: {piloto.equipe}</p>
        <p>Nacionalidade: {piloto.nacionalidade}</p>
        <div className="piloto-stats">
          <span>🏆 {piloto.vitorias}</span>
          <span>⏱️ {piloto.poles}</span>
          <span>🏁 {piloto.podios}</span>
        </div>
      </div>
    </div>
  );
};

export default PilotoCard;
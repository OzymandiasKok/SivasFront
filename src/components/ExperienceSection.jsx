import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="image-container">
          <img 
            src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/kevin-matos-Nl_FMFpXo2g-unsplash-scaled.jpeg" 
            alt="Investimentos" 
            className="experience-image"
          />
        </div>

        <div className="text-container">
          <h2 className="experience-title">Invista no Futuro com Segurança e Rentabilidade</h2>
          <p className="experience-description">
            Somos uma securitizadora especializada na estruturação e distribuição de títulos lastreados em ativos imobiliários e corporativos. 
            Nosso objetivo é conectar investidores a oportunidades seguras e rentáveis, impulsionando o crescimento de pequenas e médias 
            incorporadoras em mercados promissores.
          </p>

          <h3 className="experience-subtitle">Por que Investir Conosco?</h3>
          <ul className="experience-list">
            <li><strong>Rentabilidade Atrativa:</strong> Retornos superiores às opções tradicionais do mercado financeiro.</li>
            <li><strong>Segurança e Transparência:</strong> Modelos estruturados com garantias reais e total visibilidade sobre os ativos.</li>
            <li><strong>Acesso a Projetos Exclusivos:</strong> Oportunidades em empreendimentos imobiliários e empresariais em regiões de alto crescimento.</li>
            <li><strong>Tokenização de Ativos:</strong> Democratização do acesso a investimentos através de tecnologia blockchain.</li>
          </ul>

          <h3 className="experience-subtitle">Nossos Produtos</h3>
          <ul className="experience-list">
            <li>Certificados de Recebíveis Imobiliários (CRI)</li>
            <li>Certificados de Recebíveis do Agronegócio (CRA)</li>
            <li>Notas Comerciais e Debêntures</li>
            <li>Investimentos Tokenizados</li>
          </ul>

          <h3 className="experience-subtitle">Como Funciona?</h3>
          <ul className="experience-list">
            <li><strong>Seleção de Ativos:</strong> Analisamos e estruturamos operações com alto potencial de retorno e segurança.</li>
            <li><strong>Emissão de Títulos:</strong> Criamos instrumentos financeiros acessíveis aos investidores.</li>
            <li><strong>Investimento Transparente:</strong> Você acompanha seu investimento com total clareza.</li>
            <li><strong>Rentabilidade e Liquidez:</strong> Retornos periódicos e possibilidades de negociação dos ativos.</li>
          </ul>

          <h3 className="experience-subtitle">Junte-se a Nós!</h3>
          <p className="experience-description">Seja um investidor e faça parte de uma nova era de investimentos alternativos e estruturados.</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

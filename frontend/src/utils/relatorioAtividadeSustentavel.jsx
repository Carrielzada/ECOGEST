export const processarDadosGraficoPorAtiv = (servicos) => {
    const dadosPorAtividade = {};
  
    servicos.forEach((servico) => {
      const ativ = servico.id;
      if (ativ) {
        dadosPorAtividade[ativ] = (dadosPorAtividade[ativ] || 0) + 1;
      }
    });
  
    const labels = Object.keys(dadosPorAtividade);
    const data = Object.values(dadosPorAtividade);
  
    return { labels, data };
  };

  
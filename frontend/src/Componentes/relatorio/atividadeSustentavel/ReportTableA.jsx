import  { useState, useEffect, forwardRef } from 'react';
import { Table } from 'react-bootstrap';

const ReportTableA = forwardRef((_, ref) => {
    const [relatorioAtividade, setRelatorioAtividade] = useState([]);

    useEffect(() => {
        const fetchRelatorioAtiv = async () => {
          try {
            const response = await fetch('http://localhost:3001/criarativsust/');
            const data = await response.json();
            setRelatorioAtividade(data);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };
    
        fetchRelatorioAtiv();
      }, []);

      function formatCPF(cpf) {
        if (!cpf) return ''; // Verifica se o CPF é válido
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }

return (
       //criar nome, criar_cpf, id, criar_descrição, criar_data
    <Table ref={ref} >
     <thead>
        <tr>
          <th>ID</th>
          <th>Data da Atividade</th>
          <th>Nome do Solicitante</th>
          <th>CPF do Solicitante</th>
          <th>Atividade</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {relatorioAtividade.map((criarativi) => (
          <tr key={criarativi.criar_id}>
            <td>{criarativi.criar_id}</td>
            <td>{new Date(criarativi.criar_data).toLocaleDateString()}</td>
            <td>{criarativi.criar_nome}</td>
            <td>{criarativi.criar_cpf ? formatCPF(criarativi.criar_cpf) : '-'}</td>
            <td>{criarativi.tipo_atividade}</td>
            <td>{criarativi.criar_descricao}</td>
          </tr>
        ))}
      </tbody>

    </Table>

)

});

export default ReportTableA;
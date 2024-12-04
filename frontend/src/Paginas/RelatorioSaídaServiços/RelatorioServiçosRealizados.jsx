import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Form, Container, Table } from 'react-bootstrap';
import { FaListAlt, FaBackspace } from 'react-icons/fa';
import Dashboard from '../../Componentes/relatorio/saidaServicos/Dashboard.jsx'

function ModeloRelatorio() {
    const [termoBusca, setTermoBusca] = useState(''); 
    const [dados, setDados] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]); 

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const response = await fetch('http://localhost:3001/realizaragserv/');
                if (!response.ok) throw new Error('Erro ao buscar dados da API');
                const data = await response.json();
                setDados(data);
                setDadosFiltrados(data);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchDados();
    }, []);

    const formatCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    const handleBuscaChange = (event) => {
        const termo = event.target.value;
        setTermoBusca(termo);

        if (termo.trim() === '') {
            setDadosFiltrados(dados);
        } else {
            const termoLower = termo.toLowerCase();
            const resultados = dados.filter((item) =>
                item.agserv_nomeSolicitante.toLowerCase().includes(termoLower) ||
                item.tipo_servico.toLowerCase().includes(termoLower) ||
                item.agserv_cpfSolicitante?.toLowerCase().includes(termoLower) ||
                item.agserv_status.toLowerCase().includes(termoLower)
            );
            setDadosFiltrados(resultados);
        }
    };

    const handleLimpar = () => {
        setTermoBusca('');
        setDadosFiltrados(dados);
    };

    return (
        <div className="bg-white p-0 rounded shadow w-100" style={{ minHeight: '90vh' }}>
            <h2 className="text-center mb-4 fs-3"><FaListAlt /> RELATÓRIO DE SERVIÇOS REALIZADOS</h2>
            <Container className="mt-2">
                <Card>
                    <Card.Header as="h5">
                        <Row className="align-items-center">
                            <Col lg={2}>Pesquisar:</Col>
                            <Col lg={8}>
                                <Form.Group className="mb-0">
                                    <Form.Control
                                        className="border-secondary"
                                        type="text"
                                        onChange={handleBuscaChange}
                                        placeholder="Digite um termo para buscar"
                                        value={termoBusca}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Button variant="secondary" className="w-100" onClick={handleLimpar}>
                                    <FaBackspace /> Limpar
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Data</th>
                                    <th>Nome do Solicitante</th>
                                    <th>CPF</th>
                                    <th>Status</th>
                                    <th>Tipo de Serviço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dadosFiltrados.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center">Nenhum item encontrado</td>
                                    </tr>
                                ) : (
                                    dadosFiltrados.map((realizaragserv) => (
                                        <tr key={realizaragserv.agserv_id}>
                                            <td>{realizaragserv.agserv_id}</td>
                                            <td>{new Date(realizaragserv.agserv_data).toLocaleDateString()}</td>
                                            <td>{realizaragserv.agserv_nomeSolicitante}</td>
                                            <td>
                                                {realizaragserv.agserv_cpfSolicitante
                                                    ? formatCPF(realizaragserv.agserv_cpfSolicitante)
                                                    : '-'}
                                            </td>
                                            <td>{realizaragserv.agserv_status}</td>
                                            <td>{realizaragserv.tipo_servico}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </Table>
                        <Dashboard/>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default ModeloRelatorio;

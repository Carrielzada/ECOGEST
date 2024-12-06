import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Col, Row, Form, Container, Table } from 'react-bootstrap';
import { FaListAlt, FaBackspace } from 'react-icons/fa';
import Dashboard from '../../Componentes/relatorio/saidaServicos/Dashboard.jsx';
import TableExportButtons from '../../Componentes/relatorio/TableExportButtons.jsx';

function ModeloRelatorio() {
    const [termoBusca, setTermoBusca] = useState('');
    const [listaOriginal, setListaOriginal] = useState([]);
    const [listaItens, setListaItens] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/realizaragserv/');
            const data = await response.json();
            setListaOriginal(data);
            setListaItens(data);
        };

        fetchData();
    }, []);

    const handleBuscaChange = (event) => {
        const termo = event.target.value.toLowerCase();
        setTermoBusca(termo);
        const filtrados = listaOriginal.filter((item) =>
            item.agserv_nomeSolicitante.toLowerCase().includes(termo) ||
            (item.agserv_cpfSolicitante && item.agserv_cpfSolicitante.includes(termo)) ||
            item.tipo_servico.toLowerCase().includes(termo)
        );
        setListaItens(filtrados);
    };

    const handleLimpar = () => {
        setTermoBusca('');
        setListaItens(listaOriginal);
    };

    return (
        <div className="bg-white p-0 rounded shadow w-100" style={{ minHeight: '90vh' }}>
            <h2 className="text-center mb-4 fs-3"><FaListAlt /> RELATÓRIO DE SERVIÇOS</h2>
            <Container className="mt-2">
                <Card>
                    <Card.Header as="h5">
                    <Card>
                        <Dashboard />
                        </Card>
                        <Row className="align-items-center">
                            <Col lg={2}>Pesquisar:</Col>
                            <Col lg={6}>
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
                        <TableExportButtons tableRef={tableRef}/>
                        <Table striped bordered hover dados={setListaItens} ref={tableRef}> 
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Data do Serviço</th>
                                    <th>Nome do Solicitante</th>
                                    <th>CPF do Solicitante</th>
                                    <th>Status do Serviço</th>
                                    <th>Tipo de Serviço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaItens.map((item) => (
                                    <tr key={item.agserv_id}>
                                        <td>{item.agserv_id}</td>
                                        <td>{new Date(item.agserv_data).toLocaleDateString()}</td>
                                        <td>{item.agserv_nomeSolicitante}</td>
                                        <td>{item.agserv_cpfSolicitante}</td>
                                        <td>{item.agserv_status}</td>
                                        <td>{item.tipo_servico}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default ModeloRelatorio;

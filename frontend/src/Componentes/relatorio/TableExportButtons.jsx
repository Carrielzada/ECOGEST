import React, { useRef } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReportTable from './saidaServicos/ReportTable';

const TableExportButtons = () => {
    const tableRef = useRef(null);

    const exportToXLS = () => {
        if (tableRef.current) {
            const table = tableRef.current;
            const workbook = XLSX.utils.table_to_book(table);
            XLSX.writeFile(workbook, 'relatorio_servicos.xlsx');
        }
    }

    const exportToPDF = () => {
        if (tableRef.current) {
            const pdf = new jsPDF('landscape', 'mm', 'a4');
            
            html2canvas(tableRef.current, { 
                scale: 2,
                useCORS: true 
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                
                // Calcular o tamanho da imagem para manter a proporção
                const imageWidth = pdfWidth;
                const imageHeight = (canvas.height * imageWidth) / canvas.width;
                
                pdf.addImage(imgData, 'PNG', 0, 10, imageWidth, imageHeight);
                pdf.save('relatorio_servicos.pdf');
            });
        }
    }
    
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <button 
                    className='btn btn-primary me-2' 
                    onClick={exportToXLS} 
                    type='button'
                >
                    Exportar XLSX
                </button>
                <button 
                    className='btn btn-primary' 
                    onClick={exportToPDF} 
                    type='button'
                >
                    Exportar PDF
                </button>
            </div>
            <ReportTable ref={tableRef} />
        </div>
    )
}

export default TableExportButtons;
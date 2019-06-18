import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pdfjs } from 'react-pdf';
import PDFUploder from './pdfuploader'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
      <main className="App-header">
      <PDFUploder />
     
    </main>
  );
}

export default App;

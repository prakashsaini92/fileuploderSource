import React, {Component} from 'react';
import './App.css';
import { Document, Page } from 'react-pdf';
import { Button,  Row, Col } from 'react-bootstrap';

class PDFUploder extends Component {

    state = {
    file: null,  numPages: 0, pageNumber: 1
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages: numPages  });
  }

  nextPage = () => {

    const crntPageNumber = this.state.pageNumber;
    let nextPageNumber;

    if (crntPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = crntPageNumber + 1;
    }

    this.setState({
      pageNumber: nextPageNumber
    });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (

     <div className="container-fluid">
     <div className="NavLeftPanel">

     <Row>
         <Col lg="12">
            <header>
                <h1><i className="fa fa-book" aria-hidden="true"></i>Reader Zone</h1>
                 
            </header>
            <nav>
                     <ul>
                         <li><i className="fa fa-file" aria-hidden="true"></i> Document 1</li>
                         <li><i className="fa fa-file" aria-hidden="true"></i> Document 2</li>
                     </ul>
                 </nav>
        </Col>
        </Row>
        <div className="fileUplods">
      
          <p> <i className="fa fa-cloud-upload" aria-hidden="true"></i>Upload Files</p>
          <input type="file" className="custom-file-input" onChange={this.onFileChange}/>
        </div>
     </div>
     <div className="contentPanel">
     <Row>
         <Col lg="12">
       
        {this.state.file ? <p>Page {pageNumber} of {numPages}   <Button className="next_btnAdded" onClick={this.nextPage}>Next Page </Button> </p> : null}
        <div centered columns={2}>
        <Document file={this.state.file} onLoadSuccess={this.onDocumentLoadSuccess} noData={"Please select pdf file"}>
        <Page pageNumber={pageNumber} />
            </Document>
          
        </div>
        </Col>
      </Row>
     </div>
      
      </div>
    );
  }
}

export default PDFUploder;
import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';

@Component({
  selector: 'econth-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor() { 
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
  }

  appointmentNo:number=123456;
  invoiceNo:number=2344567;

  generatePDF():void{
    var docDefinition = { 
      content:[
        {
          text:'Detailed report of Parthiban',
          bold:true,
          margin: [ 5, 2, 10, 20 ],
          style:'header'
        },{
          table:{
            width:['auto','auto'],
            body: [
              [ {text: 'Appointment No',  style:'tableHead'}, {text:this.appointmentNo,style:'tableData'}],
              [ {text: 'Invoice No',      style:'tableHead'}, {text:this.invoiceNo,    style:'tableData'}],
              [ {text: 'Customer Name',   style:'tableHead'}, {text:'Parthiban',  style:'tableData'}],
              [ {text: 'Mobile No',       style:'tableHead'}, {text:'8146969642', style:'tableData'}],
              [ {text: 'Appointment Date',style:'tableHead'}, {text:'11/12/2017', style:'tableData'}],
              [ {text: 'Appointment Time',style:'tableHead'}, {text:'7:00 PM',    style:'tableData'}],
              [ {text: 'Amount',          style:'tableHead'}, {text:'600',        style:'tableData'}],
              [ {text: 'Status',          style:'tableHead'}, {text:'Paid',       style:'tableData'}]
            ]
          }
        }
      ],
      styles:{
        header:{
          fontSize:22,
          bold:true,
          margin: [ 5, 2, 10, 20 ]
        },
        tableHead:{
          margin:[0,3,50,3],
          bold:true
        },
        tableData:{
          margin:[0,3,50,3]
        }
      }
     };
    pdfMake.createPdf(docDefinition).print();
  }

  sendEmail():void{
    alert("Under development");
  }

  sendSMS():void{
    alert("Under development");
  }
}

import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { fontHebrew } from 'src/app/models/foneBase.model';


@Component({
  selector: 'app-pdf-shit',
  templateUrl: './pdf-shit.component.html',
  styleUrls: ['./pdf-shit.component.scss'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
    

})
export class PdfShitComponent implements OnInit {

  @Input() pdfElement: HTMLDivElement | undefined;
  constructor() { }

  ngOnInit() {
  }
  doc = new jsPDF('l','pt','a4');
  pdfShit(){
    const doc = this.doc;
    let content = this.pdfElement as HTMLDivElement;  

      doc.addFileToVFS('Rubik-normal.ttf', fontHebrew);
      doc.addFont('Rubik-normal.ttf', 'Rubik', 'normal');
      
      setTimeout(() => {
        doc.html(content.innerHTML).then(re=>{
          doc.save("assspdf.pdf");
          doc.close();
        });
      })
  }

}

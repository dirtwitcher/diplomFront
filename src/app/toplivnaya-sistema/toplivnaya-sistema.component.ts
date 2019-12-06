declare var $: any;

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toplivnaya-sistema',
  templateUrl: './toplivnaya-sistema.component.html',
  styleUrls: ['./toplivnaya-sistema.component.css']
})

export class ToplivnayaSistemaComponent implements OnInit {

  id_toplivnayaSistema: number;
  typeDetali: string;
  proizvoditel: string;
  garantiya: string;
  dopComment: string;
  cena: number;

  userInSystem: string = 'Not Set';

  dtOptions: any = { };

  private openModal(info: any): void {
    this.id_toplivnayaSistema = info[0];
    this.typeDetali = info[1];
    this.proizvoditel = info[2];
    this.garantiya = info[3];
    this.dopComment = info[4];
    this.cena = info[5];
    if ($('#updateRadio').is(':checked')) $('#updateModal').modal('show');
    if ($('#deleteRadio').is(':checked')) $('#deleteModal').modal('show');
  }

  constructor(private http: HttpClient, private router: Router) {}

  private addToplivnayaSistema(){
    var myData = {
      "typeDetali": this.typeDetali,
      "proizvoditel": this.proizvoditel,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/ToplivnayaSistema",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success post data ToplivnayaSistema: ", data);
      }, 
      error: function(data) {
        console.log("error post data ToplivnayaSistema: ", data);
      },
      type: "post",
      dataType: "text",
      timeout: 30000
    });
    $('#addModal').modal('hide');
  }

  private updateToplivnayaSistema(){
    var myData = {
      "id_toplivnayaSistema": this.id_toplivnayaSistema,
      "typeDetali": this.typeDetali,
      "proizvoditel": this.proizvoditel,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/ToplivnayaSistema",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success update data ToplivnayaSistema: ", data);
      }, 
      error: function(data) {
        console.log("error update data ToplivnayaSistema: ", data);
      },
      type: "PUT",
      dataType: "text",
      timeout: 30000
    });
    $('#updateModal').modal('hide');
  }

  private deleteToplivnayaSistema(){
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/ToplivnayaSistema"+ '?' + $.param({"id_toplivnayaSistema": this.id_toplivnayaSistema}),
      success: function(data){
        console.log("success delete data ToplivnayaSistema: ", data);
      }, 
      error: function(data) {
        console.log("error delete data ToplivnayaSistema: ", data);
      },
      type: "delete",
      dataType: "text",
      timeout: 30000
    });
    $('#deleteModal').modal('hide');
  }
 
  ngOnInit(): void {
    
  }

  logExit():void{
    sessionStorage.setItem('login','Not Set');
    this.router.navigate(['/']);
  }

  clearData(): void {
    this.id_toplivnayaSistema = null;
    this.typeDetali = null;
    this.proizvoditel = null;
    this.garantiya = null;
    this.dopComment = null;
    this.cena = null;
  }
    
}

declare var $: any;

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kolesa-diski',
  templateUrl: './kolesa-diski.component.html',
  styleUrls: ['./kolesa-diski.component.css']
})

export class KolesaDiskiComponent implements OnInit {

  id_kolesaDiski: number;
  typeDetali: string;
  typeDiska: string;
  PCD: string;
  kolvoOtversti: number;
  diametrStupOtverstia: number;
  diametr: number;
  firmaModel: string;
  sezon: string;
  shirina: number;
  visota: number;
  indexNagruzki: number;
  garantiya: string;
  dopComment: string;
  cena: number;

  userInSystem: string = 'Not Set';

  dtOptions: any = { };

  private openModal(info: any): void {
    this.id_kolesaDiski = info[0];
    this.typeDetali = info[1];
    this.typeDiska = info[2];
    this.PCD = info[3];
    this.kolvoOtversti = info[4];
    this.diametrStupOtverstia = info[5];
    this.diametr = info[6];
    this.firmaModel = info[7];
    this.sezon = info[8];
    this.shirina = info[9];
    this.visota = info[10];
    this.indexNagruzki = info[11];
    this.garantiya = info[12];
    this.dopComment = info[13];
    this.cena = info[14];
    if ($('#updateRadio').is(':checked')) $('#updateModal').modal('show');
    if ($('#deleteRadio').is(':checked')) $('#deleteModal').modal('show');
  }

  constructor(private http: HttpClient, private router: Router) {}

  private addKolesaDiski(){
    var myData = {
      "typeDetali":  this.typeDetali,
      "typeDiska": this.typeDiska,
      "PCD":  this.PCD,
      "kolvoOtversti": this.kolvoOtversti,
      "diametrStupOtverstia": this.diametrStupOtverstia,
      "diametr": this.diametr,
      "firmaModel": this.firmaModel,
      "sezon": this.sezon,
      "shirina": this.shirina,
      "visota": this.visota,
      "indexNagruzki": this.indexNagruzki,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/KolesaDiski",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success post data KolesaDiski: ", data);
      }, 
      error: function(data) {
        console.log("error post data KolesaDiski: ", data);
      },
      type: "post",
      dataType: "text",
      timeout: 30000
    });
    $('#addModal').modal('hide');
  }

  private updateKolesaDiski(){
    var myData = {
      "id_kolesaDiski": this.id_kolesaDiski,
      "typeDetali":  this.typeDetali,
      "typeDiska": this.typeDiska,
      "PCD":  this.PCD,
      "kolvoOtversti": this.kolvoOtversti,
      "diametrStupOtverstia": this.diametrStupOtverstia,
      "diametr": this.diametr,
      "firmaModel": this.firmaModel,
      "sezon": this.sezon,
      "shirina": this.shirina,
      "visota": this.visota,
      "indexNagruzki": this.indexNagruzki,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/KolesaDiski",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success update data KolesaDiski: ", data);
      }, 
      error: function(data) {
        console.log("error update data KolesaDiski: ", data);
      },
      type: "PUT",
      dataType: "text",
      timeout: 30000
    });
    $('#updateModal').modal('hide');
  }

  private deleteKolesaDiski(){
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/KolesaDiski"+ '?' + $.param({"id_kolesaDiski": this.id_kolesaDiski}),
      success: function(data){
        console.log("success delete data KolesaDiski: ", data);
      }, 
      error: function(data) {
        console.log("error delete data KolesaDiski: ", data);
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
    this.id_kolesaDiski = null;
    this.typeDetali = null;
    this.typeDiska = null;
    this.PCD = null;
    this.kolvoOtversti = null;
    this.diametrStupOtverstia = null;
    this.diametr = null;
    this.firmaModel = null;
    this.sezon = null;
    this.shirina = null;
    this.visota = null;
    this.indexNagruzki = null;
    this.garantiya = null;
    this.dopComment = null;
    this.cena = null;
  }
    
}

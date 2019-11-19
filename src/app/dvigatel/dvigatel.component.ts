declare var $: any;

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dvigatel',
  templateUrl: './dvigatel.component.html',
  styleUrls: ['./dvigatel.component.css']
})

export class DvigatelComponent implements OnInit {

  private dvigatels: any = [];
  private polzovatel: String = "!NONE!";

  id_dvigatel: number;
  obem: string;
  garantiya: string;
  dopComment: string;
  cena: number;

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 10,
    // processing: true,

    rowCallback: (row: Node, data: any[] | Object, index: number) => {
      $('td', row).unbind('click');
      $('td', row).bind('click', () => {
        this.openModal(data);
      });
        return row;
    }
    
  };

  private openModal(info: any): void {
    this.id_dvigatel = info[0];
    this.obem = info[1];
    this.garantiya = info[2];
    this.dopComment = info[3];
    this.cena = info[4];
    if ($('#updateRadio').is(':checked')) $('#updateModal').modal('show');
    if ($('#deleteRadio').is(':checked')) $('#deleteModal').modal('show');
  }

  constructor(private http: HttpClient) {}

  private addDvigatel(){
    var myData = {
      "obem": this.obem,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/Dvigatel",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success post data dvigatel: ", data);
      }, 
      error: function(data) {
        console.log("error post data dvigatel: ", data);
      },
      type: "post",
      dataType: "text",
      timeout: 30000
    });
    // this.getAllToTable();
    $('#addModal').modal('hide');
    window.location.reload(false);
  }

  private updateDvigatel(){
    var myData = {
      "id_dvigatel": this.id_dvigatel,
      "obem": this.obem,
      "garantiya": this.garantiya,
      "dopComment": this.dopComment,
      "cena": this.cena
    };
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/Dvigatel",
      data: JSON.stringify(myData),
      success: function(data){
        console.log("success update data dvigatel: ", data);
      }, 
      error: function(data) {
        console.log("error update data dvigatel: ", data);
      },
      type: "PUT",
      dataType: "text",
      timeout: 30000
    });
    // this.getAllToTable();
    $('#updateModal').modal('hide');
    window.location.reload(false);
  }

  private deleteDvigatel(){
    jQuery.ajax({
      url: "http://127.0.0.1:8080/diplomBackEnd/Dvigatel"+ '?' + $.param({"id_dvigatel": this.id_dvigatel}),
      success: function(data){
        console.log("success delete data dvigatel: ", data);
      }, 
      error: function(data) {
        console.log("error delete data dvigatel: ", data);
      },
      type: "delete",
      dataType: "text",
      timeout: 30000
    });
    // this.getAllToTable();
    $('#deleteModal').modal('hide');
    window.location.reload(false);
  }

  private getAllToTable(): void {
    this.http.get( "http://127.0.0.1:8080/diplomBackEnd/Dvigatel").subscribe(
      (data) => {
      this.dvigatels = data;
    });
  }
 
  ngOnInit(): void {
    this.getAllToTable();
  }

  clearData(): void {
    this.id_dvigatel = null;
    this.obem = null;
    this.garantiya = null;
    this.dopComment = null;
    this.cena = null;
  }
    
}
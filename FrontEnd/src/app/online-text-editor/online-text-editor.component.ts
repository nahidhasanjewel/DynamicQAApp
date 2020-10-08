import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-online-text-editor',
  templateUrl: './online-text-editor.component.html',
  styleUrls: ['./online-text-editor.component.css']
})
export class OnlineTextEditorComponent implements OnInit {

  files:Array<any>;

  textForm = new FormGroup({
    Text:new FormControl(''),
    Name:new FormControl(''),
    });


  

     constructor(private api : ApiService) { 
     this.files=new Array<any>();
     this.getFiles();
      }

  getFiles()
  {
   this.api.getFileList().subscribe(data=>{
   this.files=data;
   console.log(data);
   })

  }


   dynamicDownloadTxt(){
     this.api.saveTextFile(this.textForm.value).subscribe((data)=>{
       if (data){
         console.log('crate text', data);
       }

     });
  
  
   }



  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FieldDefinition } from '../fielddefinition';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(private location: Location) { }

  @Input()
  fields : Array<FieldDefinition>;
  @Input()
  fieldsData : any;
  fieldsDataCopy : any;  

  @Input()
  action: string;

  form : FormGroup;
  
  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(): void {
    //new replica copy object
    this.fieldsDataCopy = Object.assign({},this.fieldsData);
    let group = {};
    this.fields.forEach(field => {
      group[field.key] = new FormControl(this.fieldsDataCopy[field.key]);
      //group[id]=new FormControl(1);//this.fieldData["id"]
      //group[name]=new FormControl("switzerland");//this.fieldData["name"]
      //group[epiIndex]=new FormControl(100.96);//this.fieldData["epiIndex"]
    });
    //group = {id:"1",name:"swizer..",epiIndex:"100.96"}
    this.form = new FormGroup(group);
  }

  goTobackPage(): void {
    //console.log("######## Going to Back Page");
    this.location.back();    
  }

}

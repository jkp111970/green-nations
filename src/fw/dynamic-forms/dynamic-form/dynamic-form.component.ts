import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FieldDefinition } from '../fielddefinition';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(private location: Location,
    private router: Router, private route: ActivatedRoute) { }

  @Input()
  fields : Array<FieldDefinition>;
  @Input()
  fieldsData : any;
  fieldsDataCopy : any;  

  @Input()
  action: string;

  @Output()
  update : EventEmitter<any> = new EventEmitter();
  @Output()
  create : EventEmitter<any> = new EventEmitter();

  form : FormGroup;
  
  ngOnInit(): void {
    this.clearForm();
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.clearForm();
    });
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

  onCancel(){
    this.fieldsData = this.fieldsDataCopy;
    this.clearForm();
  }

  onEdit(){
    this.router.navigate(['../','update'], {relativeTo: this.route});
  }

  processRequest() : void {
    if(this.action == "update"){
      this.update.emit(this.form.value);
    }
    if(this.action == "add"){
      this.create.emit(this.form.value);
    }
    
  }

}

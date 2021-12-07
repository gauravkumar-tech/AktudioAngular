import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * @author gaurav.kumar
 */

@Component({
  selector: 'app-customer-master-passport',
  templateUrl: './customer-master-passport.component.html',
  styleUrls: ['./customer-master-passport.component.scss']
})
export class CustomerMasterPassportComponent implements OnInit {

  CustomerCreation!:FormGroup;
  

  ngOnInit(): void {
    this.CustomerCreation= new FormGroup({
      normalorurgent: new FormControl(false),
      customername: new FormControl(null),
      photocreated: new FormControl(null),
      deliverytime: new FormControl(null),
      totalamount: new FormControl(null),
      advancepaid: new FormControl(null),
      balancemoney: new FormControl(null),
    });
  }

  file:any;

  getFormValue(){
    let fvalue= new FormData();
    fvalue.append('file',this.file);
    //*save logic here

    console.log(this.CustomerCreation);
    
  }

  isfirstChange=0;
  slideValue(){
    this.isfirstChange+=1;
    if(this.isfirstChange==0){
      this.CustomerCreation.controls['normalorurgent'].setValue(false);    
    }else if(this.isfirstChange%2!=0){
      this.CustomerCreation.controls['normalorurgent'].setValue(true);    
    }else{
      this.CustomerCreation.controls['normalorurgent'].setValue(false);    
    }
  }

  getFile(file:any){
    this.file=file.target.files[0];
  }

}

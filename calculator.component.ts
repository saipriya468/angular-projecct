import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentNumber ='0';
  firstOperand=null;
  operator=null;
  waitForSecNum = false;
  public getNumber(v:string){
    console.log(v);
    if(this.waitForSecNum){
      this.currentNumber = v;
      this.waitForSecNum = false;

    }else{
      this.currentNumber === '0'? this.currentNumber = v:this.currentNumber += v;
    }
  }
    getDecimal(){
      if(!this.currentNumber.includes('.')){
          this.currentNumber += '.'; 
      }
    }
  
private doCalculaion(op,secop){
  switch(op){
    case '+':
    return this.firstOperand += secop;
    case '-':
      return this.firstOperand -= secop;
      case '/':
        return this.firstOperand /= secop;
        case '*':
          return this.firstOperand *= secop;
          case '=':
            return secop;
  }
}
  
public getOperation(op:string){
  console.log(op);
  if(this.firstOperand === null){
this.firstOperand = Number(this.currentNumber);
  }else if(this.operator){
    const result = this.doCalculaion(this.operator,Number(this.currentNumber)) 
    this.currentNumber = String(result);
    this.firstOperand =       result;
  }
  this.operator = op;
  this.waitForSecNum = true;
  console.log(this.firstOperand);
}
public clear(){
  this.currentNumber = '0';
  this.firstOperand = null;
  this.operator = null;
  this.waitForSecNum = false;
}

}

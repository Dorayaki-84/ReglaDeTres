import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name: string;
  public valueA: number;
  public valueB: number;
  public valueC: number;
  public result = 'X =';
  public isValid = false;

  public historial: any [] = [];
  public historyObj: any = {
    result : null,
    name: null,
  };



  constructor() {}

  clean(){
    this.valueA = null;
    this.valueB = null;
    this.valueC = null;
  }

  calculate(){
    const operation = this.valueB * this.valueC / this.valueA;
    this.result +=  Math.round(operation * 1e2) / 1e2;
    this.historyObj = [];
    this.historyObj.result = this.result;
    this.historyObj.name = this.name;
    this.historial.push(this.historyObj);
  }

  checkValid() {
    if (this.valueA && this.valueB && this.valueC) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

}

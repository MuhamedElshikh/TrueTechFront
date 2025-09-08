import { Component, OnInit } from '@angular/core';
import { getorder } from '../../../../shared/interfaces/orderinterface';
import { Orderservice } from '../../../../shared/servises/order/orderservice';
import { base } from '../../../../base/environment';

@Component({
  selector: 'app-allorder',
  imports: [],
  templateUrl: './allorder.html',
  styleUrl: './allorder.css'
})
export class Allorder implements OnInit {
getallorder!:getorder[]
baseurl:string = base.baseurl

constructor(private _Orderservice:Orderservice){}
  ngOnInit(): void {
    this.getallorderforuser()
  }

getallorderforuser()
{
  this._Orderservice.getorderforuser().subscribe({
      next: (res) => {
        console.log(res);
        this.getallorder = res;
        
      },
})
}
toggleAccordion(index: number) {
  const body = document.getElementById(`accordion-collapse-body-${index}`);
  const isVisible = body?.classList.contains('hidden');
  
  // Close all other accordions
  document.querySelectorAll('[id^="accordion-collapse-body-"]').forEach((el) => {
    el.classList.add('hidden');
  });
  
  // Toggle the clicked accordion
  if (isVisible) {
    body?.classList.remove('hidden');
  } else {
    body?.classList.add('hidden');
  }
}
}

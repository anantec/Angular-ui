import { Component } from '@angular/core';
import { CrossComponent } from '../../../../../assets/icon/cross/cross.component';
import { TickComponent } from '../../../../../assets/icon/tick/tick.component';
import { DoneComponent } from '../../../../../assets/icon/done/done.component';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [
    CrossComponent,
    TickComponent,
    DoneComponent],
  templateUrl: './price.component.html',
  styles: ''
})
export class PriceComponent {

}

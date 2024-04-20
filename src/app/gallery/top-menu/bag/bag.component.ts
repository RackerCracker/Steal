import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Item } from '../../../services/item';
import { ItemsService } from '../../../services/items.service';

import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent {

    //достаем их из сервиса список предметов, которые идут в сумку
    itemsService: ItemsService = inject(ItemsService);
    itemsInBag: Item[] = this.itemsService.itemsInBag;
  
    constructor(){  

    }



    

}

import { Sort } from './../../model/types/sort';
import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";

export type SortingOption = {
  label: string,
  sort: Sort
}

@Component({
  selector: 'app-price-sorter',
  templateUrl: './price-sorter.component.html',
  styleUrls: ['./price-sorter.component.scss', '../price-slider/price-slider.component.scss']
})
export class PriceSorterComponent implements OnInit {

  @Input() btnLabel: string = 'Apply';
  @Input() sortLabel: string = 'Sort';
  @Input() ascSortLabel: string = 'Lowest price';
  @Input() descSortLabel: string = 'Highest price';
  @Input() starSortLabel: string = 'Best rated';
  @Output() priceSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  sortingOptions: SortingOption[] = [];
  selectedOption: SortingOption | null = null;

  ngOnInit(): void {
    this.sortingOptions = [
      { label: this.ascSortLabel, sort: Sort.ASCENDING },
      { label: this.descSortLabel, sort: Sort.DESCENDING },
      { label: this.starSortLabel, sort: Sort.STAR }
    ]
  }

  onPriceSortSelected(option: SortingOption): void {
    if(option) {
      this.priceSort.emit(option.sort);
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';


@Component({ 
    selector: 'econth-pagination[ngModel]',
    templateUrl:'./pagination.directive.html'
})

export class PaginationDirective implements ControlValueAccessor,OnInit{

    @Input("totalItems")    totalItems:number;
    @Input("currentPage")   currentpage:number;
    @Input("maxSize")       pageSize:number;
    @Input("boundaryLinks") boundaryLinks:boolean;
    @Input("itemsPerPage")  itemsPerPage:number;
    @Output("pageChanged")  pageChanged= new EventEmitter();

    pageList:Array<number> = [];

    private onChange: Function;
    private onTouched: Function;
    private seletedPage: number;
    private nextItem: number;
    private previousItem: number;
    private nextItemValid: boolean;
    private previousItemValid: boolean;

    constructor(private pageChangedNgModel: NgModel) {
      this.pageChangedNgModel.valueAccessor = this;
    }

    ngOnInit(){
      this.doPaging();
    }

    doPaging() {
      this.pageList = [];
      var i:number,count:number;
      this.seletedPage = this.currentpage;
      var remaining = this.totalItems % this.itemsPerPage;
      var totalSize =((this.totalItems-remaining) / this.itemsPerPage)+(remaining ===0 ? 0 : 1);
      for (i = (this.currentpage), count=0; i<= totalSize && count<this.pageSize; i++, count++) {
        this.pageList.push(i);
      }
      //next validation
      if(i-1<totalSize) {
        this.nextItemValid = true;
        this.nextItem = i;
      }else {
        this.nextItemValid = false;      
      }
      //previous validation
      if((this.currentpage) >1) {
        this.previousItemValid = true;
        this.previousItem = (this.currentpage*this.pageSize)-1;
      }else {
        this.previousItemValid = false;
      }
    }

    writeValue(value: string): void {
      if (!value && value != '0') return;
      this.setValue(value);
    }

    registerOnChange(fn: (_: any) => {}): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: (_: any) => {}): void {
      this.onTouched = fn;
    }

    setCurrentPage(pageNo:number) {
      this.seletedPage = pageNo;
      this.pageChangedNgModel.viewToModelUpdate(pageNo);
      this.pageChageListner();
    }

    firstPage(){
      this.currentpage = 1;
      this.pageChangedNgModel.viewToModelUpdate(1);
      this.pageChageListner();
      this.doPaging(); 
    }

    lastPage(){
      var totalPages = (this.totalItems / this.itemsPerPage);
      var lastPage = (totalPages) - (totalPages % this.itemsPerPage === 0 ? this.itemsPerPage : totalPages % this.itemsPerPage)+1;
      this.currentpage = lastPage;
      this.pageChangedNgModel.viewToModelUpdate(lastPage);
      this.pageChageListner();
      this.doPaging();
    }

    nextPage(pageNo:number) {
      this.currentpage = pageNo+1;
      this.pageChangedNgModel.viewToModelUpdate(this.currentpage);
      this.pageChageListner();
      this.doPaging();
    }

    previousPage(pageNo:number) {
      this.currentpage=pageNo-1;
      this.pageChangedNgModel.viewToModelUpdate(this.currentpage);
      this.pageChageListner();
      this.doPaging();
    }

    setValue(currentValue:any){
      this.currentpage = currentValue;
      this.doPaging();
    }
    pageChageListner() {
      this.pageChanged.emit({
        itemsPerPage: this.itemsPerPage    
      });
    }

}

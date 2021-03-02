import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBandasComponent } from './lista-bandas.component';

describe('ListaBandasComponent', () => {
  let component: ListaBandasComponent;
  let fixture: ComponentFixture<ListaBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableordenesComponent } from './tableordenes.component';

describe('TableordenesComponent', () => {
  let component: TableordenesComponent;
  let fixture: ComponentFixture<TableordenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableordenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableordenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableusersComponent } from './tableusers.component';

describe('TableusersComponent', () => {
  let component: TableusersComponent;
  let fixture: ComponentFixture<TableusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

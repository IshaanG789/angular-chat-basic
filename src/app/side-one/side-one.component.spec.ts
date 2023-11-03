import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOneComponent } from './side-one.component';

describe('SideOneComponent', () => {
  let component: SideOneComponent;
  let fixture: ComponentFixture<SideOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

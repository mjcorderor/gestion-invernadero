import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvernaderoDialogComponent } from './invernadero-dialog.component';

describe('InvernaderoDialogComponent', () => {
  let component: InvernaderoDialogComponent;
  let fixture: ComponentFixture<InvernaderoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvernaderoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvernaderoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

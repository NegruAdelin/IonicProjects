import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGestionarPage } from './edit-gestionar.page';

describe('EditGestionarPage', () => {
  let component: EditGestionarPage;
  let fixture: ComponentFixture<EditGestionarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGestionarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGestionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdukComponent } from './post-produk.component';

describe('PostProdukComponent', () => {
  let component: PostProdukComponent;
  let fixture: ComponentFixture<PostProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProdukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

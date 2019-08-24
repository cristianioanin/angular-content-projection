import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  logoSourceUrl: string = 'https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  companyHistory: string = `
  Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent company.
  Marvel started in 1939 by Martin Goodman under a under a number of corporations and imprints but now know as Timely Comics,[2] and by 1951 had generally become known as Atlas Comics. The Marvel era began in 1961, the year that the company launched The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand had been used over the years, but solidified as the company's primary brand.
  `;
  submitted = false;
  userName: string = '';
  acountId: string = '';

  @Input()
  headerTemplate: TemplateRef<any>;

  @Input()
  bodyTemplate: TemplateRef<any>;

  @Input()
  footerTemplate: TemplateRef<any>;

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

}

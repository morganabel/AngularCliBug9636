import { Component, OnInit } from '@angular/core';
import * as monaco from '@timkendrick/monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let editor = monaco.editor.create(new HTMLElement, {
      theme: "vs-dark",
      language: "csharp"
    });
  }
}

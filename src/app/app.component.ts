import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    const worker = new Worker('../assets/web-workers/worker1.js');
    worker.onmessage = (res) => {
      console.log(res);
    };
    worker.onerror = (err) => {
      console.log(err);
    };
    const workerMessage: { cmd: string; data: any } = {
      cmd: 'upperCase',
      data: 'ght ght ght',
    };
    worker.postMessage(workerMessage);
  }
}

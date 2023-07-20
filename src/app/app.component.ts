import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'udemy-angular';

    jogoEmAndamento = true
    jogoVencido = false

    encerrarJogo(jogoVencido: boolean) {
        this.jogoEmAndamento = false
        this.jogoVencido = jogoVencido
    }

    reiniciarJogo() {
        this.jogoEmAndamento = true
        this.jogoVencido = false
    }
}

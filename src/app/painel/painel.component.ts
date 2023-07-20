import { Component, EventEmitter, Output } from '@angular/core';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
    instrucao = 'Traduza a frase:'
    frases = FRASES
    resposta = ''
    rodada = 0
    progresso = 0
    tentativas = 3

    @Output() jogoVencido = new EventEmitter<boolean>()

    atualizarResposta(ev: Event) {
        this.resposta = (<HTMLInputElement>ev.target).value
    }

    verificarResposta() {
        if(this.resposta != this.frases[this.rodada].frasePtBr) {
            this.tentativas--

            if(this.tentativas < 0) this.jogoVencido.emit(false)

            return
        }

        alert('Tradução correta')
        this.progresso += 100 / this.frases.length
        this.resposta = ''
        this.rodada++

        if(this.rodada > this.frases.length-1) this.jogoVencido.emit(true)
    }
}

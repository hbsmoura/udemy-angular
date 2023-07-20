import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

    urlCoracaoCheio: string = 'assets/coracao_cheio.png'
    urlCoracaoVazio: string = 'assets/coracao_vazio.png'

    coracoes: boolean[] = []
    @Input() tentativas = 0

    ngOnInit(): void {
        this.coracoes = Array(this.tentativas).fill(true)
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.coracoes = this.coracoes.map(
            (item, index) => (index < <number>changes['tentativas'].currentValue)
        )

        /*
        // BACK TO FRONT

        this.coracoes = this.coracoes.map(
            (item, index) => index >= this.coracoes.length - <number>changes['tentativas'].currentValue
        )
        */

    }

    getUrlCoracao(selector: boolean): string {
        return selector ? this.urlCoracaoCheio : this.urlCoracaoVazio
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-lista-casamento',
  templateUrl: './lista-casamento.component.html',
  styleUrls: ['./lista-casamento.component.css']
})
export class ListaCasamentoComponent {

  constructor(private router: Router, private _clipboardService: ClipboardService) { }

  // Função para exibir a mensagem "Texto copiado"
  showCopyMessage() {
    const overlayElement = document.getElementById('copyOverlay');
    overlayElement?.classList.add('show');

    // Oculta a mensagem e o overlay após 2 segundos
    setTimeout(() => {
      overlayElement?.classList.remove('show');
    }, 900);
  }
}



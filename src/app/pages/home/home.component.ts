import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  mostrarModalMadrinhas() {
    window.location.href = '/madrinhas';
  }

  mostrarModalPadrinhos() {
    window.location.href = '/padrinhos';
  }

  ngOnInit(): void {
  }
}
interface ContagemRegressiva {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcularTempoRestante(): ContagemRegressiva {
  const dataAlvo = new Date('2024-11-09T21:30:00Z');
  const agora = new Date();
  // console.log("agora: " + agora)
  // console.log("dataAlvo: " + dataAlvo)

  const diferencaEmSegundos = Math.floor((dataAlvo.getTime() - agora.getTime()) / 1000);

  const dias = Math.floor(diferencaEmSegundos / (60 * 60 * 24));
  const horas = Math.floor((diferencaEmSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((diferencaEmSegundos % (60 * 60)) / 60);
  const segundos = diferencaEmSegundos % 60;

  return {
    dias,
    horas,
    minutos,
    segundos
  };
}

function atualizarContagemRegressiva(): void {
  const contagem = calcularTempoRestante();

  const diasElement = document.getElementById('dias');
  const horasElement = document.getElementById('horas');
  const minutosElement = document.getElementById('minutos');
  const segundosElement = document.getElementById('segundos');

  if (diasElement) {
    diasElement.innerText = contagem.dias.toString().padStart(2, '0');
  }
  if (horasElement) {
    horasElement.innerText = contagem.horas.toString().padStart(2, '0');
  }
  if (minutosElement) {
    minutosElement.innerText = contagem.minutos.toString().padStart(2, '0');
  }
  if (segundosElement) {
    segundosElement.innerText = contagem.segundos.toString().padStart(2, '0');
  }
}

// Atualize a contagem a cada segundo
setInterval(atualizarContagemRegressiva, 1000);



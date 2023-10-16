import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
  const dataAlvo = new Date('2024-11-09T19:00:00Z');
  const agora = new Date();

  const diferencaEmMilissegundos = dataAlvo.getTime() - agora.getTime();

  const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

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
    diasElement.innerText = contagem.dias.toString();
  }
  if (horasElement) {
    horasElement.innerText = contagem.horas.toString();
  }
  if (minutosElement) {
    minutosElement.innerText = contagem.minutos.toString();
  }
  if (segundosElement) {
    segundosElement.innerText = contagem.segundos.toString();
  }
}

// Atualize a contagem a cada segundo
setInterval(atualizarContagemRegressiva, 1000);


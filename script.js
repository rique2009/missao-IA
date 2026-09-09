const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Durante um procedimento de radioterapia, como a técnica de IMRT (Radioterapia Guiada por Intensidade) evita danos excessivos aos tecidos saudáveis ao redor do tumor?",
        alternativas: [
            {
                texto: "Ajustando o feixe de radiação para o formato do tumor e modulando sua intensidade de vários ângulos.",
                afirmacao: "Na primeira situação, você optou por ajustar e modular o feixe de radiação. Isso foi uma excelente decisão, pois a técnica de IMRT garante doses altas focadas no tumor com exposição mínima aos tecidos sadios."
            },
            {
                texto: "Aumentando a energia dos fótons para que atravessem o corpo sem interagir com tecidos saudáveis.",
                afirmacao: "Na primeira situação, você tentou aumentar a energia dos fótons achando que eles não interagiriam com o corpo. Esse foi um erro conceitual, pois fótons de alta energia continuam interagindo com a matéria e acabam danificando os tecidos saudáveis no trajeto."
            },
            {
                texto: "Utilizando materiais isolantes diretamente na pele para refletir o feixe de radiação excessivo.",
                afirmacao: "Na primeira situação, você sugeriu usar isolantes na pele. Essa medida foi ineficiente, já que radiações de alta energia atravessam esses materiais e podem criar espalhamentos indesejados."
            }
        ]
    },
    {
        enunciado: "2. Em física nuclear, o que caracteriza o fenômeno de 'Decaimento Beta Menos' (β-) em um núcleo instável?",
        alternativas: [
            {
                texto: "Um próton se transforma em um nêutron, liberando um pósitron e um neutrino.",
                afirmacao: "Em seguida, ao analisar o decaimento nuclear, você confundiu os processos e descreveu a conversão de próton em nêutron, que na verdade pertence ao decaimento Beta Mais (β+)."
            },
            {
                texto: "Um nêutron se transforma em um próton, emitindo um elétron de alta velocidade e um antineutrino.",
                afirmacao: "Em seguida, ao analisar o decaimento nuclear, você identificou corretamente que um nêutron em excesso se transforma em próton, estabilizando o núcleo e emitindo um elétron de alta velocidade (partícula β-)."
            },
            {
                texto: "O núcleo libera dois prótons e dois nêutrons juntos sob a forma de radiação pura.",
                afirmacao: "Em seguida, ao analisar o decaimento nuclear, você errou a identificação ao descrever a liberação de dois prótons e dois nêutrons, o que caracteriza uma partícula Alfa (α) e não Beta."
            }
        ]
    },
    {
        enunciado: "3. Por que a blindagem de Radiação Beta utilizando materiais muito densos como o Chumbo pode gerar um risco secundário inesperado?",
        alternativas: [
            {
                texto: "O chumbo absorve o elétron e se torna permanentemente radioativo por indução.",
                afirmacao: "Diante do desafio da blindagem, você supôs que o chumbo ficaria radioativo por indução, o que é incorreto para emissões Beta comuns."
            },
            {
                texto: "Os elétrons desaceleram bruscamente ao colidir com o chumbo, gerando Radiação de Frenagem (Bremsstrahlung) em forma de Raio-X.",
                afirmacao: "Diante do desafio da blindagem, você acertou em cheio ao considerar a Radiação de Frenagem (Bremsstrahlung), demonstrando saber que elétrons rápidos em contato com chumbo geram Raios-X secundários perigosos."
            },
            {
                texto: "A radiação Beta derrete a estrutura molecular do chumbo devido ao calor extremo.",
                afirmacao: "Diante do desafio da blindagem, você acreditou que o calor derreteria o chumbo, mas a energia térmica depositada por essa radiação não é suficiente para isso."
            }
        ]
    },
    {
        enunciado: "4. Qual é o conceito fundamental da grandeza física chamada 'Dose Equivalente' (medida em Sieverts)?",
        alternativas: [
            {
                texto: "Mede puramente a quantidade total de energia depositada pela radiação em Joules por quilo, sem considerar a biologia.",
                afirmacao: "Por fim, ao avaliar as grandezas físicas, você definiu apenas a energia pura depositada, o que corresponde à 'Dose Absorvida' (Gray) e não à Dose Equivalente."
            },
            {
                texto: "Avalia a taxa em que os átomos de uma amostra radioativa sofrem desintegração por segundo.",
                afirmacao: "Por fim, ao avaliar as grandezas físicas, você confundiu os conceitos e descreveu a 'Atividade Radioativa' (Becquerel) em vez da Dose Equivalente."
            },
            {
                texto: "Pondera a dose de energia absorvida pelo tipo de radiação, medindo o dano biológico relativo causado no tecido.",
                afirmacao: "Por fim, ao avaliar as grandezas físicas, você definiu com precisão a Dose Equivalente, mostrando que compreende como o tipo de radiação pondera o dano biológico causado nos tecidos vivos."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    // Concatena cada escolha em um parágrafo contínuo
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Relatório Final do Especialista:";
    // Exibe todo o texto explicativo em um único bloco de história
    textoResultado.innerHTML = "<div class='item-resultado'><p>" + historiaFinal + "</p></div>";
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
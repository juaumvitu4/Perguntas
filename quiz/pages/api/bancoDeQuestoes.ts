import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Tem impedimento em cobranças de lateral?', [
        RespostaModel.errada('Sim'),        
        RespostaModel.certa('Não')
    ]),
    new QuestaoModel(202, 'Durante uma partida de futebol quandos KM um jogador percorre?', [
        RespostaModel.errada('8Km a 9Km'),
        RespostaModel.errada('20Km a 22km'),
        RespostaModel.errada('5km a 7km'),
        RespostaModel.certa('10Km a 13Km'),
    ]),
    new QuestaoModel(203, 'Depois de cabeceada, a bola viaja a uma velocidade de?', [
        RespostaModel.errada('15 Km/h a 20 Km/h'),
        RespostaModel.errada('22 Km/h a 29 Km/h'),
        RespostaModel.errada('35 Km/h a 39 Km/h'),
        RespostaModel.certa('50 Km/h a 60 Km/h'),
    ]),
    new QuestaoModel(204, 'Quantos jogadores podem ser substituídos de cada time durante uma partida de futebol?', [
        RespostaModel.errada('6'),
        RespostaModel.errada('8'),
        RespostaModel.errada('4'),
        RespostaModel.certa('3'),
    ]),
    new QuestaoModel(205, 'Maior artilheiro em Copas do Mundo?', [
        RespostaModel.errada('Ronaldo'),
        RespostaModel.errada('Cristiano Ronaldo'),
        RespostaModel.errada('Messi'),
        RespostaModel.certa('Miroslav Klose'),
    ]),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),        
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ]),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Curupira'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.certa('Saci-pererê'),
    ]),
    new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
]

export default questoes
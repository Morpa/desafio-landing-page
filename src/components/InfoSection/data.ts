import empathyImg from 'assets/images/empathy.png'
import communicationImg from 'assets/images/communication.png'
import talkImg from 'assets/images/talk.png'
import earImg from 'assets/images/ear.png'
import noverbalImg from 'assets/images/noverbal.png'

export const Empathy = {
  id: 'empathy',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Empatia',
  headline:
    'Para interagir bem com os outros, você deve ser capaz de entender como eles estão se sentindo',
  description:
    'A empatia é especialmente crítica ao lidar com clientes que vêm até você com perguntas ou problemas. Você precisa expressar uma preocupação genuína com os problemas deles, além de ajudar a resolvê-los.',
  imgStart: false,
  img: empathyImg,
  alt: 'Duas pessoas conversando',
  dark: true,
  primary: true,
  darkText: false
}

export const Cooperation = {
  id: 'cooperation',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Cooperação',
  headline:
    'A cooperação é especialmente importante quando você trabalha em equipe',
  description:
    'Fazer parceria com outras pessoas para alcançar um objetivo comum. No entanto, mesmo que você não trabalhe em equipe, a cooperação ainda é necessária nas ocasiões em que é solicitado a trabalhar ao lado de colegas para ajudar a atingir os objetivos de sua organização.',
  imgStart: true,
  img: talkImg,
  alt: 'Um grupo de pessoas conversando',
  dark: false,
  primary: false,
  darkText: true
}

export const Communication = {
  id: 'communication',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Comunicação verbal e escrita',
  headline:
    'Capacidade de se expressar usando uma linguagem clara que os outros possam entender',
  description:
    'Você precisará de sólidas habilidades de comunicação verbal sempre que falar com outras pessoas pessoalmente ou ao telefone. A comunicação escrita entra em jogo sempre que você escreve um e-mail, texto, carta, relatório ou apresentação - aqui, gramática, ortografia e formato apropriados são necessários.',
  imgStart: false,
  img: communicationImg,
  alt: 'Uma pessoa falando',
  dark: true,
  primary: true,
  darkText: false
}

export const Ear = {
  id: 'ear',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Ouvir',
  headline:
    'Outra importante habilidade de comunicação que o ajuda a interagir bem com os outros é ouvir',
  description:
    'Você precisa ser capaz de ouvir cuidadosamente o que seu empregador lhe diz para fazer, o que seus colegas dizem em uma reunião e o que seus funcionários pedem de você. Você deve ouvir as preocupações dos clientes e expressar-lhes que as compreendeu. As pessoas respondem bem aos outros quando sentem que estão sendo ouvidas.',
  imgStart: true,
  img: earImg,
  alt: 'Uma menina ouvindo sua avó',
  dark: false,
  primary: false,
  darkText: true
}

export const NoVerbal = {
  id: 'noverbal',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Comunicação não verbal',
  headline: 'A comunicação não verbal também é importante',
  description:
    'Por que é importante? Suas habilidades de comunicação não verbal podem criar uma impressão positiva (ou negativa). Braços cruzados podem parecer defensivos. A má postura pode parecer pouco profissional. Olhar para baixo ou evitar o contato visual pode impedir que você seja visto como confiante. ',
  imgStart: false,
  img: noverbalImg,
  alt: 'Uma pessoa falando',
  dark: true,
  primary: true,
  darkText: false
}

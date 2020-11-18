import earImg from 'assets/images/ear.png'
import bodyImg from 'assets/images/body.png'
import talkImg from 'assets/images/talk.png'
import mobilePayImg from 'assets/images/undraw_Mobile_pay_re_sjb8.svg'
import teamImg from 'assets/images/undraw_team_spirit_hrr4.svg'
import medicalCareImg from 'assets/images/undraw_medical_care_movn.svg'

export const Ear = {
  id: 'ear',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Ouvindo',
  headline:
    'Ser um bom ouvinte é uma das melhores maneiras de ser um bom comunicador',
  description:
    'Ninguém gosta de se comunicar com alguém que se preocupa apenas em investir seus centavos e não se dá ao trabalho de ouvir a outra pessoa. Se você não for um bom ouvinte, será difícil compreender o que lhe pedem para fazer.',
  imgStart: false,
  img: earImg,
  alt: 'A imagem é de uma menina ouvindo sua avó',
  dark: true,
  primary: true,
  darkText: false
}

export const BodyLanguage = {
  id: 'body-language',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Linguagem Corporal',
  headline:
    'Sua linguagem corporal dá cor à mensagem que você está tentando transmitir',
  description:
    'Frequentemente, pistas não-verbais transmitem como uma pessoa está realmente se sentindo. Por exemplo, se a pessoa não está olhando nos seus olhos, ela pode se sentir desconfortável ou esconder a verdade.',
  imgStart: true,
  img: bodyImg,
  alt: 'Duas pessoas sentadas em poltronas conversando',
  dark: false,
  primary: false,
  darkText: true
}

export const ClarityConciseness = {
  id: 'clarity-conciseness',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Clareza e concisão',
  headline: 'Uma boa comunicação verbal significa dizer apenas o suficiente',
  description:
    'Não fale muito ou pouco. Tente transmitir sua mensagem com o mínimo de palavras possível. Diga o que deseja de forma clara e direta, quer esteja falando com alguém pessoalmente, por telefone ou por e-mail.',
  imgStart: false,
  img: talkImg,
  alt: 'A imagem é de uma menina ouvindo sua avó',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  imgStart: false,
  img: teamImg,
  alt: 'Team',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjFour = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  imgStart: true,
  img: medicalCareImg,
  alt: 'Medical',
  dark: false,
  primary: false,
  darkText: true
}

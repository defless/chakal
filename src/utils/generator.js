import { customs, sentences, qualifiers, emojis } from './ressources';

export default () => {
  let text = '';
  const types = ['custom', 'sentence'];
  const random = (array) => array[Math.floor(Math.random() * array.length)];

  const generate = (type) => {
    switch (type) {
      case 'sentence':
        return random(sentences);
      case 'custom':
        return random(customs);
      default:
        return random(sentences);
    }
  }

  const usedElements= [];
  while (text.length < 300) {
    const type = random(types);
    const element = generate(type);
    const emojiBalance = Math.floor(Math.random() * 2);
    if (!usedElements.includes(element)) {
      if (emojiBalance === 1) {
        text += `${random(emojis).repeat(Math.floor(Math.random() * 3)+1)} `;
      } else {
        if (type === 'custom') {
          text += `${element(random(qualifiers))} `;
          usedElements.push(element);
        } else {
          text += `${element} ${random(emojis)} `;
          usedElements.push(element);
        }
      }
    }
  };

  return text;
};
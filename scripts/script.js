const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
}

let length = +prompt('Довжина ключа?\nБудь ласка цифрами бо нема перевірки на число :( ');

alert(`Ваш ключ ${generateKey(length, characters)}`);

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direction = true) {
		this.direction = direction;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let j = 0;

		for (let i = 0; i < message.length; i++) {
			if (/[A-Z]/.test(message[i])) {
				result += String.fromCharCode(
					((message.charCodeAt(i) - 65 + key.charCodeAt(j % key.length) - 65) %
						26) +
						65
				);
				j++;
			} else {
				result += message[i];
			}
		}

		return this.direction ? result : result.split('').reverse().join('');
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error('Incorrect arguments!');
		}

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let j = 0;

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (/[A-Z]/.test(encryptedMessage[i])) {
				result += String.fromCharCode(
					((encryptedMessage.charCodeAt(i) +
						26 -
						key.charCodeAt(j % key.length)) %
						26) +
						65
				);
				j++;
			} else {
				result += encryptedMessage[i];
			}
		}

		return this.direction ? result : result.split('').reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine,
};

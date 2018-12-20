let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage[7] = 'right ';
console.log(secretMessage[7]);
secretMessage.unshift('Programming');
console.log(secretMessage.length);
secretMessage.splice(6, 5, 'known');
console.log(secretMessage.length);
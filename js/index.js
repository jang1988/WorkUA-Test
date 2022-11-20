let userData = [];

let data = JSON.stringify(localStorage);
console.log('data: ', data);

const fileSaver = document.querySelector('.form__btn');

const options = {
  suggestedName: 'leads.txt',
  types: [
    {
      description: 'Text',
      accept: {
        'text/plain': '.txt',
      },
    },
  ],
  excludeAcceptAllOption: true,
};

fileSaver.addEventListener('click', async () => {
  const fileHandle = await window.showSaveFilePicker(options);
  const writableStream = await fileHandle.createWritable();
  await writableStream.write(data);
  await writableStream.close();
});

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  let userName = document.querySelector('[name="usrnm"]').value;
  let userEmail = document.querySelector('[name="email"]').value;
  let userTel = document.querySelector('[name="phone"]').value;

  userData = [userName, userEmail, userTel];
  stringUserData = JSON.stringify(userData);

  saveAS(userTel);
  function saveAS(tel) {
    localStorage.setItem(`${tel}`, stringUserData);
  }
});

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task is completed');
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log('promise consumed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Two');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Promise consumed');
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({userName: 'Ankush Sharma', email: 'Sharmaanku.ji@gmail.com'});
  }, 1000);
});

promiseThree.then(user => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  let Error = true;
  setTimeout(() => {
    if (!Error) {
      resolve({userName: 'Vishav Sharma', email: 'Sharmavishu.ji@gmail.com'});
    } else {
      reject('Something went wrong');
    }
  }, 1000);
});

promiseFour
  .then(user => {
    console.log(user);
    return user.userName;
  })
  .then(userName => {
    console.log(userName);
  })
  .catch(Error => {
    console.log(Error);
  })
  .finally(() => console.log('Promise is either resolved or rejected'));

const promiseFive = new Promise((resolve, reject) => {
  let Error = true;
  setTimeout(() => {
    if (!Error) {
      resolve({userName: 'Pooja Sharma', email: 'SharmaPooja.ji@gmail.com'});
    } else {
      reject('Something went wrong');
    }
  }, 1000);
});

async function promiseConsumedFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (Error) {
    console.log(Error);
  }
}

promiseConsumedFive();

async function getAllUsers() {
  try {
    const response = await fetch(
      'https://api.github.com/users/hiteshchoudhary',
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then()
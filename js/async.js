const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved the promise");
  } else {
    reject("No! rejected the promise");
  }
});
console.log(myPromise);
myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});
myPromise.then((value) => {
  console.log(value);
});

const getAllUsersEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  postToWebPage(userEmailArray);
};
const postToWebPage = (data) => {
  console.log(data);
};
getAllUsersEmails();
const getDataFromForm = () => {
  const requestObg = {
    firstName: "Bruce",
    lastName: "Lee",
    catrgories: ["nerby"],
  };
  return requestObg;
};
const buildRequestUrl = (requestData) => {
  return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.catrgories}`;
};
const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};
const postJokeToPage = (joke) => {
  console.log(joke);
};
const proccessJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished");
};
proccessJokeRequest();

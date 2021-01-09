const fetch = require('node-fetch');
fetch(
  //'https://jsonplaceholder.typicode.com/posts',
  'https://linkeddata.tern.org.au/viewer/tern/id/http://linked.data.gov.au/def/tern-cv/3762baf2-843f-4883-bb85-89ef97223f24?_format=application/ld+json',
  {
    method: 'GET',
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json',
    },
  }
)
  .then((response) => response.json())
  .then((myJson) => {
    console.log(myJson);
  })
  .catch(function (error) {
    console.log(error);
  });

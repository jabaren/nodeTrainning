var dns = require('dns');

dns.resolve4('www.pecollege.net', (err, addresses) => {

  if (err) {
    console.log(err);
  }

  console.log('addresses: ' + JSON.stringify(addresses));

});

dns.lookup('www.pecollege.net', (err, address, family) => {

  if (err) {
    console.log(err);
  }

  console.log('addresses: ' + JSON.stringify(address));
  console.log('family: ' + JSON.stringify(family));

});
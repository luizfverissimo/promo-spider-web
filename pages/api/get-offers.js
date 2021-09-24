async function getOffers(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    return;
  }

  const myHeaders = new Headers();

  const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  fetch('https://the-spider-promo.glitch.me', myInit);

  res.statusCode = 200;
  res.json({message: 'Ping enviado!'})
}

export default getOffers;

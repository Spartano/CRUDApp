module.exports = {

//show all events
showEvents: (req, res) => {

  const events = [
    {name: 'basketbal', slug: 'basketball', description:'Throwing into basket'},
    {name: 'swimming', slug: 'swimming', description:'Swim into pool'},
    {name: 'weightlifting', slug: 'weightlifting', description:'Pull into muscle'}
  ];

  res.render('pages/events', {events : events});

},

showSingle: (req, res) =>{
  const event = {name: 'basketbal', slug: 'basketball', description:'Throwing into basket'};
  res.render('pages/single', {event : event})
}

};

if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });
}

if (cMainMenu.find().count() === 0) {
  cMainMenu.insert({
    title: 'Реєстрація ТМ',
    isEnabled:true,
    helper: 'Перехід до реєстрації торгівельної марки',
    url: '/registerTM'
  });
//customerdetailsapplication
  cMainMenu.insert({
    title: 'Dev:Анкета кліента',
    isEnabled:true,
    helper: 'Dev детальна анкета кліента',
    url: '/customerdetailsapplication'
  });
  
}
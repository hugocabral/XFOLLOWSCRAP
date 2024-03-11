import { getHTML, getTwitterFollowers } from './lib/scraper';

const handles = require('./config/twitter-people.json');

async function go() {
  handles.forEach(async function(person) {
    const html = await getHTML(`https://twitter.com/${person.username}`);
    const twCount = await getTwitterFollowers(html);

    console.log(`${person.name} has ${twCount} followers.`);
  });
}

go();

import React from 'react';

const stories = () => {
  let allStories = [
    {
      title: 'A Day At The Zoo!',
      story: `Today I went to the zoo. I saw a[n] (adjective) (Noun) jumping up and down in its tree. He (verb, past tense) (adverb) through the large tunnel that led to its (adjective) (noun). I got some peanuts and passed them through the cage to a gigantic gray (noun) towering above my head. Feeding that animal made me hungry. I went to get a (adjective) scoop of ice cream. It filled my stomach. Afterwards I had to (verb)  (adverb) to catch our bus. When I got home I (verb, past tense) my mom for a (adjective) day at the zoo.`,
    },
    {
      title: 'The Fun Park!',
      story: `Today, my fabulous camp group went to a [an] (adjective) amusement park. It was a fun park with lots of cool  (plural noun) and enjoyable play structures. When we got there, my kind counselor shouted loudly, "Everybody off the (noun)." We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I couldn't figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I  (adverb) ran over to get in the long line that had about (number) people in it. When I finally got on the roller coaster I was  (past tense verb). In fact I was so nervous my two knees were knocking together. This was the  (adjective) ride I had ever been on! In about two minutes I heard the crank and grinding of the gears. That's when the ride began! When I got to the bottom, I was a little  (past tense verb) but I was proud of myself. The rest of the day went (adverb). It was a[n] (adjective) day at the fun park.`,
    },
    {
      title: 'At The Arcade!',
      story: `When I go to the arcade with my (plural noun) there are lots of games to play. I spend lots of time there with my friends. In the game X-Men you can be different  (plural noun). The point of the game is to (verb) every robot. You also need to save people. Then you can go to the next level.  In the game Star Wars you are Luke Skywalker and you try to destroy every (noun). In a car racing/motorcycle racing game you need to beat every computerized vehicle that you are (verb) against. There are a whole lot of other cool games. When you play some games you win  (plural noun) for certain scores. Once you're done you can cash in your tickets to get a big (noun). You can save your  (plural noun) for another time. When I went to this arcade I didn't believe how much fun it would be. So far I have had a lot of fun every time I've been to this great arcade!`,
    },
    {
      title: 'The First Day of School!',
      story: ` One very nice morning near the end of summer, my mother woke me up at 4:00 A.M. and said, "Wake up and smell the grass, sleepy head! Today is your first day of school and you can't be late." I groaned in my bed for twenty seconds, but eventually I got dressed. I wore a blue and white striped, long sleeve (noun) with a collar on it, a red tie, dark gray pants, white socks, black shoes, and a[n] (adjective) hat. In ten minutes I made lunch and ate my breakfast. (number) minutes later, the bus came. A few minutes later, I was at school. In school, I met two really (adjective) kids. All of us became friends very fast. That day we had Science, and luckily my friends and I were at the same (noun) .My friends' names are (proper noun) and (proper noun). In Math we weren't together, and that really bugged me. We learned what (plural noun) were, and when to use them. At snack and recess, we played a game together. It was extremely fun. At P. E., we were (-ing verb) off of the ropes onto (plural noun). I thought it was a very (adjective) idea. In swimming class, we needed to swim extremely  (adverb), or else we would have to swim longer.  Before I knew it, school was over. I grabbed all my belongings and put them into my backpack. In two minutes, the bus came. As I stepped into the bus I shouted, "Goodbye, adios amigos, and shalom," to my friends. Then I went into the bus. In a flash, I was back home. This day was an extremely exciting day!`,
    },
    {
      title: 'In The Jungle!',
      story: `I walk through the color jungle. I take out my (adjective) canteen. There's a (adjective) parrot with a (adjective) (noun) in his mouth right there in front of me in the (adjective) trees! I gaze at his (adjective) (noun). A sudden sound awakes me from my daydream! A panther's (verb) in front of my head! I (verb) his (adjective) breath. I remember I have a packet of (noun) that makes go into a deep slumber! I (verb)it away from me in front of the (noun).Yes he's eating it! I (verb) away through the (adjective) jungle. I meet my parents at the tent. Phew! It’s been an exciting day in the jungle.`,
    },
    {
      title: 'Make Me A Video Game!',
      story: `I, the (adjective) and (adjective) (a first name) has (past tense verb) (a first name)'s (adjective) sister and plans to steal her (adjective) (plural noun)! What are a (large animal) and backpacking (small animal) to do? Before you can help (a girl's name), you'll have to collect the (adjective) (plural noun) and (adjective) (plural noun) that open up the (number 1-50) worlds connected to a (first name's) lair. There are (number) (plural noun) and (number) (plural noun) in the game, along with hundreds of other goodies for you to find.`,
    },

    {
      title: 'The Great New Toy!',
      story: `There is a new toy on the market that has everyone saying (exclamation)! It is called the (sound) (adjective) (noun) box, and will be in stores in (month). The (sound) (adjective) (noun) box is a new gadget that lets you do just about anything! It (verb)s, it (verb)s, and it even serves (a beverage)! It is easy to operate and requires no instructions! You can also have it custom made any size up to (number) inches or a  (color) to glow in the dark at no extra charge! The original product is pocket-sized and (color). There are (number) jacks on the product for 6V DC power and for upgrades and add-ons. You can add head-phones, (plural noun) monitors, (plural noun), and more! It’s possible to use them all at the same time! `,
    },
    {
      title: 'My Trip To Disney World!',
      story: `Last month, I went to Disney World with  (friend's name) . We traveled for (number hours) by (vehicle). Finally, we arrived and it was very (adjective). There were (adjective) people (-ing verb) everywhere. There were also people dressed up in (animal) costumes.  I wish it had been more (adjective), but we (past tense verb) anyway. We also went on a[n] (adjective) ride called Magic (noun).  (Friends name) nearly fell off a ride and had to be (past tense verb). Later, we went to the hotel and (past tense verb). Next year, I want to go to (place), where we can (verb). `,
    },
    {
      title: 'The Monkey King!',
      story: `The day I saw the Monkey King (verb) was one of the most interesting days of the year. After he did that, the king played chess on his brother's (noun) and then combed his  (adjective) hair with a comb made out of old fish bones. Later that same day, I saw the Monkey King dance  (adverb) in front of an audience of kangaroos and wombats`,
    },
  ];

  return allStories;
};

export { stories };

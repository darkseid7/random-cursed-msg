const messages = [
    "Whoever reads this will be cursed with bad luck for seven years.",
    "May your every wish be granted in the most terrible way possible.",
    "You will never find peace.",
    "May your nightmares become your reality.",
    "You will suffer as much as you have made others suffer.",
    "May your soul never find rest.",
    "May your existence be a living nightmare.",
    "May your every breath be a struggle.",
    "You will die alone and unloved.",
    "May your life be filled with sorrow and regret.",
    "May your fate be sealed with darkness and despair.",
    "You will never find true happiness.",
    "THE GAME"
  ];
  
  const cursedMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    cursedMessage
  };
const tacoTuesday = (string) => {
  const date = new Date(string);
  if (string.includes("taco") && string.includes("tuesday"))
    return "It's taco🌮🌮🌮 tueeeesday!!!";
  if (date == "Invalid Date") return "...???";
  if (date.getDay() !== 2) return "No Taco for you today";
  return "It's taco🌮🌮🌮 tueeeesday!!!";
};

module.exports = { tacoTuesday };

function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let counter = [];
	for (var i = 0; i < musicians.length; i++) {
		counter[i] = `${musicians[i]} plays ${instruments[i]}`;
	};
  return counter;
};
theBeatlesPlay();

function johnLennonFacts() {
  let facts = arguments[0];
  let enthusiasticFacts = [];
  let i = 0;
  while (i < facts.length) {
    enthusiasticFacts[i] = `${facts[i]}!!!`;
    i++;
  };
  return enthusiasticFacts;
};
johnLennonFacts();

function iLoveTheBeatles() {

};
iLoveTheBeatles();

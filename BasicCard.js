function BasicCard(front,back) {
	this.cards = [];
	this.front = front;
	this.back = back;

	this.addCard = function(question, answer) {
		this.cards.push(new BasicCard(front, back));
	}
}

module.exports = BasicCard;
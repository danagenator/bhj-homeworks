let hit = 0;
let miss = 0;

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
	const hole = getHole(i);

	hole.onclick = () => {
		if (hole.classList.contains("hole_has-mole")) {
			hit++;
		} else {
			miss++;
		}
		updateGame();
	};
}

function updateGame() {
	const lost = document.getElementById("lost");
	const dead = document.getElementById("dead");
	lost.textContent = miss;
	dead.textContent = hit;

	if (hit >= 10) {
		alert("Вы убили 10 кротов. Победа!");
		resetGame();
	} else if (miss >= 5) {
		alert("5 промахов.Вы проиграли!");
		resetGame();
	}
}

function resetGame() {
	hit = 0;
	miss = 0;
	updateGame();
}
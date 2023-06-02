$.getJSON("./data.json", data => {

    let averageArr = [];
    for (let i = 0; i < data.length; i++) {
        averageArr.push(parseInt(`${data[i].score}`));
        const listContainer = document.querySelector('.list-container');
        const div = document.createElement ('div');
        listContainer.appendChild (div);
        div.classList.add(`list-${data[i].category}`);
        div.innerHTML =`
            <div>
                <img src="${data[i].icon}">
                <span id="${data[i].category}"> ${data[i].category}</span>
            </div>
            <div class="personal-score">
                <span>${data[i].score}</span> / 100
            </div>`
        };

        let sum = averageArr.reduce((a, b) => a + b, 0);
        let average = Math.floor(sum/averageArr.length);
        let score = document.querySelector('.score');
        score.innerHTML = average;
    }
);
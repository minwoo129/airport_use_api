document.getElementById('airport-form').addEventListener('submit', async(e) => {
    const country = e.target.country.value;
    const korName = e.target.korName.value;
    const engName = e.target.engName.value;
    const iataCode = e.target.iataCode.value;
    const icaoCode = e.target.icaoCode.value;
    const terminalCnt = e.target.terminalCnt.value;

    console.log('===============================');
    console.log('e: ', e.target);

    if(!country) return alert('나라를 입력하세요!');
    if(!korName) return alert('한국이름을 입력하세요!');
    if(!engName) return alert('영문이름을 입력하세요!');
    if(!iataCode) return alert('공항코드1을 입력하세요!');
    if(!icaoCode) return alert('공항코드2를 입력하세요!');

    try {
        await axios.post('/airports', { country, korName, engName, iataCode, icaoCode, terminalCnt });
        getAirports();        
    } catch (err) {
        console.error(err);
    }
});

async function getAirports() {
    try {
        const res = await axios.get('/airports');
        const airports = res.data;
        const tbody = document.querySelector('#airport-list tbody');
        tbody.innerHTML = '';
        airports.map((airport) => {
            const row = document.createElement('tr');
            row.addEventListener('click', () => {

            });
            let td = document.createElement('td');
            td.textContent = airport.id;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airport.country;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airport.korName;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airport.engName;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airport.iataCode;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airport.icaoCode;
            row.appendChild(td);
            tbody.appendChild(row);
        })
    } catch (e) {
        console.error(e);
    }
}

document.getElementById('airportTerminal-form').addEventListener('submit', async(e) => {
    console.log('e: ', e);
})

document.getElementById('airline-form').addEventListener('submit', async(e) => {
    const korName = e.target.korName.value;
    const engName = e.target.engName.value;
    const iataCode = e.target.iataCode.value;
    const icaoCode = e.target.icaoCode.value;
    const activeStatus = document.getElementById('activeStatus').value;

    try {
        await axios.post('/airlines', { korName, engName, iataCode, icaoCode, activeStatus });
        //getAirlines();
    } catch (error) {
        console.error(error)
    }
});

async function getAirlines() {
    try {
        const res = await axios.get('/airlines');
        const airlines = res.data;
        const tbody = document.querySelector('#airline-list tbody');
        tbody.innerHTML = '';
        airlines.map((item) => {
            const row = document.createElement('tr');
            row.addEventListener('click', () => {

            });
            let td = document.createElement('td');
            td.textContent = airline.id;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airline.korName;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airline.engName;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airline.iataCode;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airline.icaoCode;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = airline.activeStatus == 'active' ? '운영 중' : '운영 중단';
            row.appendChild(td);
            tbody.appendChild(row);
        })
    } catch (err) {
        console.error(err);
    }
}
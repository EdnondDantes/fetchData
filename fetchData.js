const tags = [
    { id: 721015002303179300, name: 'TrpE2m%$)e>[+3I+&po^P~/3|:azjz!M,4>2)#6<z8q9+zI5zfI9G' },
    { id: 1591358740023791900, name: '?eg_#M4wM/%+&5`t4gI[' },
    { id: 3573548294147266000, name: ':lIL<pA,4GRa1Ww|=?`<op%#bJnh7W;).vCENv' }
];

const selectedTag = tags[1]; 

const url = `https://petstore3.swagger.io/api/v3/pet/findByTags?tags=${encodeURIComponent(selectedTag.name)}`;

async function fetchData() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchData();

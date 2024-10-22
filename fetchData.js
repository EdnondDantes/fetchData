const url = 'https://api.codetabs.com/v1/proxy?quest=https://editor.swagger.io';

async function fetchData() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.text(); 
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchData();

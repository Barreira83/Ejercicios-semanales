
export async function getData(url) {
    const response= await fetch(url);
    const data= await response.json();
    return data;
}

export const suffleArray= (a)=> a.sort(()=> Math.random()-0.5);

export const randomItem= (a)=> a[Math.floor(Math.random()* a.length)];
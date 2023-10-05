const btn = document.getElementById('btn');
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');

document.addEventListener('DOMContentLoaded', async () => {
    replaceText(await generateAdvice())
})

btn.addEventListener('click', async (e) => {
    e.preventDefault() 
    replaceText(await generateAdvice())
});


const generateAdvice = async () => {
    const data = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());
    const res = await data.json()
    return res
}

function replaceText(newAdvice){
    adviceText.innerHTML = newAdvice.slip.advice;
    adviceId.innerHTML = `Advice #${newAdvice.slip.id}`
}


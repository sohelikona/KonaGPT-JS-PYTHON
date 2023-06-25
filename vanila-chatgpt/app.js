// const API_KEY = "kgniofsdjhfgiwejmfoiedshfnosdnmovid"

// async function fetchData() {
//    const response = await fetch("https://api.openai.com/v1/chat/completion", {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             model: "gpt-4",
//             messaages: [{
//                 role:user,
//                 content: "Hello!"
//             }]
//         })
//     })
//     const data = await response.json()
//     console.log(data)
// }

// fetchData()




const API_KEY = "YOUR_API_KEY"
const submitBtn = document.querySelector("#submit")
const outPut = document.querySelector("#output")
const input = document.querySelector('input')
const history = document.querySelector('.history')
const button = document.querySelector('button')


function changeInput(value) {
    const input = document.querySelector('input')
    input.value = value

}


async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: input.value}]
        }) 

    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPut.textContent = data.choices[0].message.content
        if (data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = input.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            history.append(pElement)
        }
    } catch (error) {
        console.log(error)
    }
}


submitBtn.addEventListener("click", getMessage)

function clearInput() {
    input.value = " "
}


button.addEventListener('click', clearInput)
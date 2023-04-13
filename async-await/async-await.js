console.log('=======================================')
console.log('//////////   Async/Await   ////////////')
console.log('=======================================')

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data received")
//     }, 3000);
// })

// async function getData() {
//     let response = await promise;
//     console.log(response);
// }

// getData();

let result1 = document.getElementById('result1');

let dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
}

let buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dell)
    }, 3000);
})

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())


//Ex-01:With Promise

function fetch1() {
    result1.innerText = "Fetching Data...";
    buyLaptop.then(res => {
        console.log(res);
        result1.innerText = JSON.stringify(res);
    })
}

//Ex-02:With Async/Await

async function fetch2() {
    result2.innerText = "Fetching Data...";
    let data = await buyLaptop;
    result2.innerText = JSON.stringify(data);
}

//Ex-03:With Fetch APi

async function fetch3() {
    result3.innerText = "Fetching Data...";
    https://jsonplaceholder.typicode.com/posts

    // ..Promise
    buyLaptop2.then(res => {
        result3.innerText =res;
    })
}
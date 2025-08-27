
const transactionData = [];
let copy = 0;
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

getElement("service-container").addEventListener('click', function (e) {
    if (e.target.className.includes("call-btn")) {
        const callBtn = e.target;


        const btnTitle = callBtn.parentNode.parentNode.children[1].children[0].innerText;

        const btnNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;



        const data = new Date().toLocaleTimeString()


        let totalCoinElement = getElement("total-coin");
        let totalCoin = Number(totalCoinElement.innerText)
        if (totalCoin >= 20) {
            totalCoin -= 20;
            totalCoinElement.innerText = totalCoin;

            const historyContainer = getElement("history-container")
            const newCart = document.createElement('div')
            newCart.innerHTML = `<div class="flex gap-2 justify-between items-center p-4 rounded-[8px] bg-gray-200">
                            <div>
                                <h2 class="text-sm font-semibold">${btnTitle}</h2>
                                <span>${btnNumber}</span>
                            </div>
                            <span>${data}</span>
                        </div>
        
        `
            historyContainer.append(newCart)



            alert(`calling ${btnTitle} ${btnNumber}`);
            navigator.clipboard.writeText(btnNumber);

        }
        else {
            alert(`❌আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে 20 কয়েন লাগবে
`);
        }


    }



})

const heartBtns = document.getElementsByClassName("heart-btn")
for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function () {
        const totalHeart = getElement("total-heart").innerText;
        const currentHeart = Number(totalHeart) + 1;
        getElement("total-heart").innerText = currentHeart
    })

}

getElement("clear-history").addEventListener("click", function () {
    const historyContainer = getElement("history-container");
    historyContainer.innerHTML = "";
    transactionData.length = 0;
});


const copyBtns = document.getElementsByClassName("copy-btn")
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function () {
        alert(`Number copy 999`)


        const totalCopy = getElement("total-copy").innerText;
        const currentCopy = Number(totalCopy) + 1;
        getElement("total-copy").innerText = currentCopy;
          

    })
}
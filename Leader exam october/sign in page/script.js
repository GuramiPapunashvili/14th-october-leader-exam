let studentInfo = [
    {
        "სახელი და გვარი" : "ანდრია მაღლაფერიძე",
        "მშობლის სახელი" : "ქრი სტი",
        "FB-ს პროფილის ლინკი" : "https://www.facebook.com/messages/e2ee/t/7391717664273539",
        "ბავშვის fb" : "https://www.facebook.com/messages/t/100051027673289",
        "ასაკი" : 11
    },
    {
        "სახელი და გვარი" : "ანდრია ჭანკვეტაძე",
        "მშობლის სახელი" : "ლულა ლულა",
        "FB-ს პროფილის ლინკი" : "https://www.facebook.com/messages/e2ee/t/7131769023587555",
        "ბავშვის fb" : "https://www.facebook.com/messages/t/100000389256542",
        "ასაკი" : 12
    },
    {
        "სახელი და გვარი" : "გიორგი გვრიტიშვილი",
        "მშობლის სახელი" : "ნინო გაბრიელაშვილი",
        "FB-ს პროფილის ლინკი" : "https://www.facebook.com/messages/e2ee/t/7892752667401650",
        "ბავშვის fb" : "https://www.facebook.com/messages/e2ee/t/7668496936527651",
        "ასაკი" : 12
    },
    {
        "სახელი და გვარი" : "დაჩი გიორგაძე",
        "მშობლის სახელი" : "ზაალი გიორგაძე",
        "FB-ს პროფილის ლინკი" : "https://www.facebook.com/messages/e2ee/t/24963289869986450	",
        "ბავშვის fb" : "https://www.facebook.com/messages/t/100009562337724",
        "ასაკი" : 13
    }

]



let table = document.getElementById("TableForModerators")

document.getElementById("submit").addEventListener('click', (e) =>{
    e.preventDefault()
    let roles = document.getElementById("role").value;
    console.log(roles)
    document.getElementById("SignUp").style.display = 'none';

    if (roles == "moderator"){
        document.getElementById("TableForModerators").style.display = 'block';
        document.getElementById("addStudent").style.display = "block"
    } else if (roles == "viewer"){
        document.getElementById("TableForViewers").style.display = "block"
    }
})

document.getElementById("addStudent").addEventListener("click",(e)=>{
    e.preventDefault()

    let tr = document.createElement("tr")
    table.appendChild(tr)
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
})

console.log(studentInfo)
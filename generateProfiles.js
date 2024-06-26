const fs = require('fs');

const members = [
    {
        fullName: "Md Redwanul Islam Rashik",
        nickname: "Rashik",
        username: "ProfessoR",
        dob: "10/27/1999",
        phone: "+8801794550178",
        email: "rkrashik@gmail.com",
        address: "House no: 317, Rd no: 12, Block C, Bashundhara RA, Dhaka",
        discord: "rkrashik",
        facebook: "https://www.facebook.com/redwanul",
        streaming: "N/A",
        image: "Rashik.jpg",
        profilePage: "rashik.html"
    },
    {
        fullName: "Tauhid Alam Nafiz",
        nickname: "Nafiz",
        username: "Magneto",
        dob: "5/14/1999",
        phone: "+8801869700891",
        email: "taouhidalam@gmail.com",
        address: "2/A - 4/22 , সায়েরা নীড়, Masjid Market, Mirpur 2, Dhaka",
        discord: "captainlevi5415",
        facebook: "https://www.facebook.com/Sorcerer.Nafiz?mibextid=JRoKGi",
        streaming: "N/A",
        image: "Nafiz.jpeg",
        profilePage: "nafiz.html"
    },
    {
        fullName: "Zarif Yeamin",
        nickname: "Zarif",
        username: "Pandaaa",
        dob: "12/30/1999",
        phone: "+8801795229394",
        email: "zarifyeamin01@gmail.com",
        address: "Dhaka Commerce College road, Udoyon Roktokorobi, Mirpur2, Dhaka",
        discord: "1W Pandaaa. #5493",
        facebook: "https://www.facebook.com/zarif.yeamin.7?mibextid=kFxxJD",
        streaming: "https://www.facebook.com/ZaarifYeamin?mibextid=kFxxJD",
        image: "Zarif.jpg",
        profilePage: "zarif.html"
    },
    {
        fullName: "Fahim Ahmmed Joy",
        nickname: "Fahim",
        username: "0PTeSLa",
        dob: "8/8/2002",
        phone: "+8801716492104",
        email: "ahmmedfahim424@gmail.com",
        address: "45/3 New Bilshimla, Rajshahi",
        discord: "Fahim#3090",
        facebook: "https://www.facebook.com/fahimahmmed.joy.1?mibextid=LQQJ4d",
        streaming: "https://youtube.com/@fahimahmmed412?si=sHBWoMw1gPQj7GEi",
        image: "Fahim.jpg",
        profilePage: "fahim.html"
    },
    {
        fullName: "Mehedi Ibne Sharif",
        nickname: "Mehedi",
        username: "Mavericks",
        dob: "10/15/1999",
        phone: "+8801772677770",
        email: "mehediibnesharif@gmail.com",
        address: "House 45, Road 31, Block D, Mirpur-12, Dhaka-1216",
        discord: "CAPTAIN么PRICE",
        facebook: "https://www.facebook.com/mehediibne.sharif",
        streaming: "https://www.facebook.com/profile.php?id=100083228887601",
        image: "Mehedi.jpg",
        profilePage: "mehedi.html"
    },
    {
        fullName: "Md. Nahid Hossain Rupom",
        nickname: "Rupom",
        username: "Raygun",
        dob: "3/24/2001",
        phone: "+8801759586134",
        email: "rupom007raj@gmail.com",
        address: "Nawdapara 13/17, Sapura, Shahmakhdum, Rajshahi",
        discord: "nahid_rupom",
        facebook: "https://www.facebook.com/drummer.rupom",
        streaming: "N/A",
        image: "Rupom.jpg",
        profilePage: "rupom.html"
    },
    {
        fullName: "A S M Moshiur Rahman",
        nickname: "Moshiur",
        username: "Moshi",
        dob: "12/9/2000",
        phone: "+8801316984804",
        email: "moshuirrahman722@gmail.com",
        address: "260, Boro Moghbazar, Bata Goli",
        discord: "1wmoshi",
        facebook: "https://www.facebook.com/moshi.ur.rahman404",
        streaming: "https://www.twitch.tv/averagejonas",
        image: "Moshiur.jpg",
        profilePage: "moshi.html"
    },
    {
        fullName: "MD RADOWAN KOBIR",
        nickname: "Naim",
        username: "RAD",
        dob: "3/8/2005",
        phone: "+880164043183",
        email: "Radowankobir@gmail.com",
        address: "Soyadhangora (Uttor Para), Sirajgonj Sadar, Sirajgonj, Bangladesh",
        discord: "rad_kor",
        facebook: "https://www.facebook.com/rad.kobir.73",
        streaming: "https://www.youtube.com/@radowankobir5279",
        image: "Radowan.jpg",
        profilePage: "rad.html"
    }
];

members.forEach(member => {
    const { fullName, nickname, username, dob, phone, email, address, discord, facebook, streaming, image, profilePage } = member;

    const profileHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - ${fullName}</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <div class="logo">
                <img src="Logo.png" alt="One World Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" id="membersButton">🌍 𝗠𝗲𝗺𝗯𝗲𝗿𝘀</a></li>
                    <ul id="membersList" class="dropdown">
                        <li><a href="#">Member 1</a></li>
                        <li><a href="#">Member 2</a></li>
                        <!-- Add more members as needed -->
                    </ul>
                    <li><a href="#" id="rolesButton">🌍 𝗥𝗼𝗹𝗲𝘀</a></li>
                    <ul id="rolesList" class="dropdown">
                        <li><a href="#">𝗔𝗱𝗺𝗶𝗻</a></li>
                        <li><a href="#">𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿</a></li>
                        <li><a href="#">𝗥𝗼𝘆𝗮𝗹</a></li>
                    </ul>
                    <li><a href="#" id="oneWorldButton">🌍𝐧𝐞 𝐖𝐨𝐫𝐥𝐝</a></li>
                    <ul id="oneWorldList" class="dropdown">
                        <li><a href="https://discord.gg/MNAyHP2N" target="_blank">Discord</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100063492251405" target="_blank">Facebook</a></li>
                        <li><a href="https://www.youtube.com/channel/UCSZX2qqWsnf89p2_oODXMBQ" target="_blank">YouTube</a></li>
                    </ul>
                </ul>
            </nav>
        </aside>
        <main class="main-content">
            <div class="profile-detail">
                <img src="${image}" alt="${fullName}">
                <h1>${fullName}</h1>
                <p>Nickname: ${nickname}</p>
                <p><span class="emoji">🎮</span> ${username}</p>

                <p><span class="emoji">🎂</span> ${dob}</p>
                <p><span class="emoji">🏡</span> ${address}</p>

                <p><span class="emoji">✉️</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="emoji">📞</span> <a href="tel:${phone}">${phone}</a></p>
                <p><span class="emoji">💬</span> ${discord}</p>
                <p><span class="emoji">📘</span> <a href="${facebook}" target="_blank">Facebook Profile</a></p>
                
                ${streaming !== "N/A" ? `<p><span class="emoji">📹</span> <a href="${streaming}" target="_blank">Streaming Channel</a></p>` : ""}
            </div>
        </main>
    </div>
</body>
</html>
`;

    fs.writeFileSync(profilePage, profileHtml);
});

const items = [
    {
        name : "Tima Cricket Kit Bag Canvas Kit Bag, 70cm x 33 cm x 19cm (Blue/Black) Kit Bag  (Blue, Kit Bag)",
        price : "₹1,399",
        discount : "40",
        reating : "3",
        highlights : ["Bag Capacity: 43.89 L","Cricket Bag","Style: Kit Bag","Material: Nylon Braided Polyester with high quality zips. Padded adjustable Shoulder Straps & Hanger."],
        description : "cricket kit bag for individuals. Cricket kit bag for individuals, spacious, solid and durable, weight capacity 43.89 Lt.",
        imgName : "cricketKitBag.jpeg"
    },
    {
        name : "Tima Cricket Windball Training Cricket Ball (Pack of 6) Cricket Tennis Ball  (Pack of 6, Multicolor)",
        price : "₹999",
        discount : "40",
        reating : "4",
        highlights : ["Cricket Tennis Ball","Water Resistant","Outer Material: Made from a complex mixture of polyester and rubber compound these imparts excellent finish strength and resistant to wear & tear due to rough usage.","Core Material: Wind","Weight: 75-85 g"],
        description : "It is an soft touch cricket ball for gully cricket, game of catch and throw, this pack of 6 soft cricket balls from tima international to make your game enjoyable and exciting. Rubber each of these balls is made from the finest quality rubber, these colourful balls are great for your daily games with friends catch and throw, backyard cricket or any other game of your fun.",
        imgName : "cricketBall.jpeg"
    },
    {
        name : "CEAT HITMEN HIMACHAL WILLOW BAT 140 Poplar Willow Cricket Bat  (0.950 kg)",
        price : "₹1,099",
        discount : "45",
        reating : "5",
        highlights : ["Age Group 15+ Yrs","Blade Made of Poplar Willow","Advanced Playing Level","Bat Grade: Grade 2","Sport Type: Cricket","With Cover","Weight Range 0.950 kg"],
        description : "HIMACHAL WILLOW CRICKET BAT FULL SIZE THICK BLADE STRONG GOOD 1 BALL AND PLUS COVER BAT",
        imgName : "cricketBat.jpeg"
    },
    {
        name : "Sun Fly Club Cricket Leather Ball  (Pack of 2, Multicolor)",
        price : "₹999",
        discount : "35",
        reating : "4",
        highlights : ["Cricket Leather Ball","Water Resistant","Outer Material: Genuine Leather","Weight: 156 g"],
        description : "The Sunfly Club is a high quality Two-piece cricket ball made from high quality alum Hide Water Proofed leather The Club is ideally suited for club and school matches Water-proofed tested and certified Good quality centre construction encased with layers of top quality Portuguese cork wound with 100 percent wool Naturally seasoned inner core Box content :2 balls",
        imgName : "cricketLeatherBall.jpeg"
    },
    {
        name : "IBEX Champ Wicket Keeping Gloves Combo With Inner Gloves (Multicolor) Wicket Keeping Gloves  (Multicolor)",
        price : "₹1,299",
        discount : "60",
        reating : "4",
        highlights : ["Left & Right Gloves","For Men, Boys, Men & Women","For Cricket","Weight: 200 g","Material: PU Foam"],
        description : "This pair is made from high quality material with a natural cup and palm design This pair is made from high quality material with a natural cup and palm design Suitable for play at the club and county level Smart new design and PVC cuffs",
        imgName : "wicketKeepingGlove.jpeg"
    },
    {
        name : "FS Guard Sn.10 Abdominal Guard  (Yellow)",
        price : "₹599",
        discount : "70",
        reating : "3",
        highlights : ["Type: Abdominal Guard","Ideal For: Men","For: Cricket","XL Size","XL Size","Left & Right Orientation"],
        description : "",
        imgName : "abdomanGaurd.jpeg"
    },
    {
        name : "SG Club XS (27 - 29 cm) Batting Pad  (White, Right Handed)",
        price : "₹1,399",
        discount : "10",
        reating : "3.8",
        highlights : ["Type: Batting Pad", "Color: White","Inner Material: Cashmilon","Face Material: Polyvinyl Chloride","Weight: 750 g"],
        description : "",
        imgName : "battingPad.jpeg"
    },
    {
        name : "MANCO mEnwalkr ENDOS Thigh Guards Cricket Thigh Guard ",
        price : "₹2,199",
        discount : "65",
        reating : "4",
        highlights : ["Type: Cricket Thigh Guard","Ideal For: Men, Boys, Senior","For: Cricket","Standard Size","NA Orientation"],
        description : "Extremely light weight,Flexible snug fit design for all thigh sizes 3D molded composite material for superior protection Hinged design for a better fit and eases running",
        imgName : "thighGuard.jpeg"
    },
];



window.onload = () => {
    localStorage.setItem("localItems", JSON.stringify(items));
};

updateUserDetails = () =>{
    var name = document.querySelector("input#name").value;
    var email = document.querySelector("input#email").value;
    var mobileNumber = document.querySelector("input#mobileNumber").value;

    var userDetails = [name, email, mobileNumber];
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    //**************************TO get array from Local Storage ********************************
    //var storedNames = JSON.parse(localStorage.getItem("names"));   
}
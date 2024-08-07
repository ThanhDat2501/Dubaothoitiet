const imgs = {
    Sunset: "https://gcdnb.pbrd.co/images/ZW45IYZWZy6n.png",
    Rain: "https://gcdnb.pbrd.co/images/nZ26RX7qMh1q.png?o=1",
    Windy: "https://gcdnb.pbrd.co/images/zX3rfGlL5XSi.png?o=1",
    Sun: "https://gcdnb.pbrd.co/images/9PieLGcqwYSA.png?o=1"
}

const container = [
    {
        
        id: "hourPrediction",
        run_ret: varHere => `
                    <div class="holder">
                        <p>${varHere[0]}</p>
                        <img style="width: 40px; height: auto" src=${imgs[varHere[1]] || "https://tr.rbxcdn.com/bb053449c1a0ec5936dcf7837f8ab5c8/420/420/Hat/Webp"}>
                        <p ${
                            typeof varHere[2] ==='string' ? "style=\"color: #FFCD4A\"" : ""}>${
                            typeof varHere[2] ==='string' ? varHere[2] : varHere[2] + '°'
                        }</p>
                    </div>
                `,
        child_args: [
            ["Now", "Sunset", 30],
            ["7PM", "Sunset", "Sunset"],
            ["8PM", "Sunset", 30],
            ["9PM", "Sunset", 30],
            ["10PM", "Sunset", 30],
            ["11PM", "Sunset", 30],
            ["12PM", "Sunset", 30],
            ["1AM", "Sunset", 30],
            ["2AM", "Sunset", 30],
            ["3AM", "Sunset", 30],
        ]
    },
    {
        id: "duBaoNgay",
        run_ret: varHere => `
            <div class="col d-inline-flex flex-column justify-content-center align-items-center">
          <p>${varHere[0]}</p>
          <img style="width: 60px; height: auto" src=${imgs[varHere[1]]}>
          <div class="d-flex">
            <p style="padding-right: 10px;">H: ${varHere[2]}</p>
            <p>L: ${varHere[3]}</p>
          </div>
        </div>
        `,
        child_args: [
            ["Monday", "Sunset", "35", "28"],
            ["Tuesday", "Rain", "35", "28"],
            ["Wednesday", "Sunset", "35", "28"],
            ["Thursday", "Windy", "35", "28"],
            ["Friday", "Sun", "35", "28"],
            ["Saturday", "Sun", "35", "28"],
            ["Sunday", "Sun", "35", "28"],
            ["Monday", "Sunset", "35", "28"],
            ["Tuesday", "Sunset", "35", "28"],
        ]
    },
    {
        id: "thongTinPhu",
        run_ret: varHere => {

        },
        child_args: []
    },
]

for (let a = 0; a < container.length; a++){

    let cc = container[a] /*
    {
        
        id: "hourPrediction",
        run_ret: varHere => `
                    <div class="holder col-2">
                        <p>${varHere[0]}</p>
                        <img src=${imgs[varHere[1]] || "https://tr.rbxcdn.com/bb053449c1a0ec5936dcf7837f8ab5c8/420/420/Hat/Webp"}>
                        <p${
                            (varHere[2].search("Degrees") == -1)? "style= \"color: orangered\"": ""}>${
                            varHere[2]
                        }</p>
                    </div>
                `,
        child_args: [
            ["Now", "Sunset", "35"],
            ["7PM", "Sunset", "Sunset"],
            ["8PM", "Sunset", "32"],
            ["9PM", "Sunset", "30"],
            ["10PM", "Sunset", "28"],
            ["11PM", "Sunset", "28"],
            ["12PM", "Sunset", "28"],
            ["1AM", "Sunset", "26"],
            ["2AM", "Sunset", "26"],
            ["3AM", "Sunset", "32768"],
        ]
    },
    */
   let child_args = cc.child_args
   let res = ""
   for (let b = 0; b < child_args.length; b++){
        res = res + cc.run_ret(child_args[b])
   }

   document.getElementById(cc.id).innerHTML = res

}
let date = new Date()
var r
let fetched = fetch(
  "https://api3.vnexpress.net/api/crawler?type=get_data&key=weather_dot_com&province=H%C3%A0%20N%E1%BB%99i&app_id=d9b81e"
).then(
  res => res.json()
).then(res => { r = res; console.log(r); return r})

console.log(r)

const Logo_IDs = {
    Thunderstorm: "You should "
}

const styles = [
    {
        Style: args => {`
                <div class="row align-items-center">
                  <div class="col">
                    <img src=${Logo_IDs[args["Sky"]] ? Logo_IDs[args["Sky"]]: ""} />
                  </div>
                  <div class="col thongTinChung_section1_temp">
                    <h1 id="temperature">${args["Temperature"] | "UNKNOWN"}</h1>
                  </div>
                  <div class="col thongTinChung_section2_items">
                    <div style="height: 72px">

                      <div class="row" id="index_stuff_idk">
                        <span>UV Index: Low</span>
                        <span>Humidity: 85% </span>
                        <span>Wind: 9 km / h</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            `
        },
        Arguments: ["Temperature", "Sky", "Other_Properties"]
    }
]

const Kindergarten = {
    hourPrediction: {
        req: ["next_24h"],
        onceProvided: listus => {

            console.log(listus)
            let Finality = ""
            let z = listus[0]
            for (let i = 0; i < z.length; i++){

                
                let Entry = z[i]
                /*
                        {
                                "time": "19:00",
                                "temperature": "28° ",
                                "cloud_status": "Thunderstorm",
                                "phrase": "Mưa giông",
                                "rain": "65%",
                                "temperature_feels_like": "35° ",
                                "wind": "TB  7  km/giờ ",
                                "humidity": "88%",
                                "uv": "0 / 11",
                                "cloud_cover": "95%",
                                "accumulation": "0  mm "
                        },
                */

                Finality = Finality + `
                    <div class="holder col-2">
                        <p>${i !== 0?  Entry.time: "Now!"}</p>
                        <img src=${Logo_IDs[Entry.cloud_status] || "https://tr.rbxcdn.com/bb053449c1a0ec5936dcf7837f8ab5c8/420/420/Hat/Webp"}>
                        <p>${Entry["temperature"] || "Unknown temperature"}</p>

                    </div>
                `
                

            }
            
            return Finality
        }
    },
    duBaoNgay: {
        req: ["next_10days"],
        onceProvided: listus => {

            let Finality = ""
            let z = listus[0]
            for (let i = 0; i < z.length; i++){

                
                let Entry = z[i]
                /*
                        {
        "date": "Hôm nay",
        "day": {
          "temperature": "30° ",
          "cloud_status": "Thunderstorm",
          "rain": "100%",
          "wind": "ĐĐN  11  km/giờ ",
          "phrase": "Mưa giông. thỉnh thoảng mưa nặng hạng và mưa xối xả như trút nước. cao 30 độ c. gió đđn ở tốc độ 10 đến 15 km/giờ. khả năng có mưa 100%.",
          "humidity": "82%",
          "uv": "8 / 11",
          "sunrise": "5:29",
          "sunset": "18:36"
        },
        "night": {
          "temperature": "26° ",
          "cloud_status": "Thunderstorm",
          "rain": "74%",
          "wind": "ĐĐN  12  km/giờ ",
          "phrase": "Mưa giông. thấp 26 độ c. gió đđn ở tốc độ 10 đến 15 km/giờ. khả năng có mưa 70%.",
          "humidity": "82%",
          "uv": "8 / 11",
          "sunrise": "5:29",
          "sunset": "18:36"
        }
      },
                */

                Finality = Finality + `
                    <div class="holder col-2">
                        <p>${Entry.date}</p>
                        <img src=${Logo_IDs[Entry.cloud_status] || "https://tr.rbxcdn.com/bb053449c1a0ec5936dcf7837f8ab5c8/420/420/Hat/Webp"}>
                        <p>${Entry["temperature"] || "Unknown temperature"}</p>

                    </div>
                `
                

            }
            
            return Finality
        }
    },
    thongTinPhu: {

    }
}

let keyed_1 = Object.keys(Kindergarten)

for (let countUp = 0; countUp < keyed_1.length; countUp++){

    let Key = keyed_1[countUp]
    let yield = Kindergarten[Key]

    const req = yield.req

    let args = []

    for (let lm = 0; lm < req.length; lm++){

        args[args.length] = fetched[req[lm]]
    }

    console.log("args: ", args)
    let result = yield.onceProvided(args)

    document.getElementById(Key).innerHTML = document.getElementById(Key).innerHTML + result

    console.log("check pass")

}
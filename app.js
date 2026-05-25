const city = "西安";

const days = [
  {
    id: "day-1",
    label: "Day1",
    date: "6.3",
    title: "抵达西安，钟鼓楼夜景",
    cost: "住宿定位",
    events: [
      {
        time: "7:00-14:22",
        title: "高铁抵达西安北站",
        desc: "从西安北站坐 2 号线到永宁门 B 西南口，步行约 17 分钟到民宿。",
        places: ["西安北站", "永宁门", "合能朱阙1号楼2单元3301室"],
      },
      {
        time: "16:30-20:30",
        title: "钟鼓楼夜景",
        desc: "从西后地坐 618/K618/32/218 到钟楼西。不开楼，开元商城门口拍照；19:30 左右看亮灯，结束后早点休息。",
        places: ["钟楼西", "西安钟楼", "西安鼓楼", "开元商城钟楼店"],
      },
    ],
    foods: [
      {
        name: "洒金桥扫街：刘信小炒泡馍 / 马二酸汤水饺 / 志亮蒸饺",
        desc: "适合 Day1 晚上钟鼓楼后吃。洒金桥比主街回民街更适合找泡馍、小炒、酸汤水饺、蒸饺这类本地口味，预算 35-80 元/人。",
        reason: "推荐原因：离钟鼓楼动线近，第一晚不用折腾；品类集中，能一次试到泡馍、小炒和清真小吃。",
        pitfall: "注意坑点：泡馍和小炒分量重，别每家都点主食；队伍特别长的店先看是否还有座位和是否支持打包；口味偏咸偏油，第一晚别吃太撑。",
        keywords: ["洒金桥 刘信牛羊肉小炒泡馍", "洒金桥 马二酸汤水饺", "洒金桥 志亮蒸饺"],
      },
      {
        name: "回坊补充：西羊市 / 大皮院 / 北广济街",
        desc: "如果只想拍完钟鼓楼顺手吃，回坊更方便。优先搜水盆羊肉、腊牛肉夹馍、甑糕、酸梅汤。",
        reason: "推荐原因：回坊不只有北院门主街，西羊市、大皮院和北广济街选择更多，离钟鼓楼也近。",
        pitfall: "注意坑点：主街旅游属性强，别被门口吆喝和超大招牌牵着走；烤串、石榴汁、伴手礼先问清单价。",
        keywords: ["西羊市 水盆羊肉", "大皮院 小吃", "北广济街 腊牛肉夹馍"],
      },
    ],
  },
  {
    id: "day-2",
    label: "Day2",
    date: "6.4",
    title: "陕历博，大雁塔，大唐不夜城",
    cost: "大雁塔门票约 10 元",
    events: [
      {
        time: "8:30-10:30",
        title: "陕西历史博物馆",
        desc: "8:30 开园，提前 5 日放票，每天下午 17:00 放票；早上 8 点前出门，打车约 15 分钟。",
        places: ["陕西历史博物馆"],
      },
      {
        time: "11:00-15:00",
        title: "中饭＋休息",
        desc: "上午博物馆后不要硬赶，吃饭后回住处或附近咖啡店缓一下。",
        places: ["陕西历史博物馆"],
      },
      {
        time: "15:00-16:30",
        title: "大雁塔",
        desc: "从小区门口坐 224 路到雁塔西路东口下车，到大雁塔；北广场音乐喷泉 16:00。",
        places: ["雁塔西路东口", "大雁塔", "大雁塔北广场音乐喷泉"],
      },
      {
        time: "18:00-21:00",
        title: "大唐不夜城",
        desc: "18:30 出发；北广场东侧不倒翁小姐姐互动约 19:30。",
        places: ["大唐不夜城", "大唐不夜城不倒翁"],
      },
    ],
    foods: [
      {
        name: "陕历博午餐：子午路张记肉夹馍（翠华路店）",
        desc: "适合陕历博出来后的快速午餐：肉夹馍、丸子汤、凉皮。预算 25-50 元/人。",
        reason: "推荐原因：位置贴合陕历博到大雁塔的动线，吃完不用绕路；肉夹馍和汤类适合短时间补能量。",
        pitfall: "注意坑点：饭点可能排队，座位紧张；肉夹馍很扎实，下午还要走大雁塔和不夜城，不建议点太多。",
        keywords: ["子午路张记肉夹馍 翠华路店", "翠华路 肉夹馍", "陕西历史博物馆 附近 凉皮"],
      },
      {
        name: "晚餐坐下吃：长安大牌档 / 赛格商圈陕菜",
        desc: "大雁塔和不夜城晚上人多，建议 16:30-17:30 提前吃正餐，搜长安大牌档、陕菜、葫芦鸡、油泼面。预算 70-140 元/人。",
        reason: "推荐原因：这天晚上主要是看喷泉和不夜城表演，商场/连锁陕菜稳定性更好，也方便避暑和休息。",
        pitfall: "注意坑点：不夜城步行街里边走边吃容易排队且价格偏高；热门陕菜饭点等位久，能提前取号就提前。",
        keywords: ["长安大牌档 赛格", "大雁塔 陕菜", "大唐不夜城 附近 葫芦鸡"],
      },
    ],
  },
  {
    id: "day-3",
    label: "Day3",
    date: "6.5",
    title: "兵马俑，华清宫，长恨歌",
    cost: "兵马俑约 120 元；华清宫约 120 元",
    events: [
      {
        time: "8:30-11:00",
        title: "秦始皇兵马俑/丽山园",
        desc: "秦始皇帝陵博物院提前 7 日购票。7:00 出门，打车约 50 分钟。",
        places: ["秦始皇帝陵博物院", "秦始皇兵马俑博物馆", "丽山园"],
      },
      {
        time: "12:00-15:00",
        title: "午饭外卖＋午休",
        desc: "这天体力消耗大，建议提前点外卖或在临潼找面食后休息。",
        places: ["临潼区"],
      },
      {
        time: "15:00-19:00",
        title: "华清宫/骊山",
        desc: "打车约 50 分钟到华清宫、骊山，晚饭随便吃点，给演出留时间。",
        places: ["华清宫", "骊山"],
      },
      {
        time: "19:40-20:50",
        title: "《长恨歌》",
        desc: "华清宫景区演出，工作日建议提前 3 天预约。",
        places: ["长恨歌演出", "华清宫九龙湖"],
      },
    ],
    foods: [
      {
        name: "景区日午餐：临潼面食 / 简餐优先",
        desc: "兵马俑后建议吃油泼面、biangbiang 面、臊子面或简单套餐，预算 30-70 元/人。",
        reason: "推荐原因：这天交通和景区消耗最大，午餐目标是快、热、稳，不适合排长队或吃大餐。",
        pitfall: "注意坑点：兵马俑出口和旅游车动线附近容易遇到高价套餐、模糊菜单和推销；进店前看菜单价格，别接受陌生人带路。",
        keywords: ["临潼 油泼面", "兵马俑 附近 面", "临潼 biangbiang面"],
      },
      {
        name: "长恨歌前：华清宫附近轻食",
        desc: "演出前优先凉皮、小面、肉夹馍、便利店补给，别安排复杂正餐。",
        reason: "推荐原因：长恨歌有固定入场时间，轻食更容易控时，也不影响晚上看演出。",
        pitfall: "注意坑点：演出前后打车紧张，吃饭地点不要离华清宫太远；提前买水，但进场规则以现场为准。",
        keywords: ["华清宫 附近 凉皮", "华清宫 附近 肉夹馍", "临潼 快餐"],
      },
    ],
  },
  {
    id: "day-4",
    label: "Day4",
    date: "6.6",
    title: "西安城墙，考古博物馆，回民街",
    cost: "预约为主",
    events: [
      {
        time: "9:00-11:00",
        title: "西安城墙",
        desc: "从南门永宁门上城墙，风景和交通都更顺。",
        places: ["西安城墙南门", "永宁门"],
      },
      {
        time: "15:00-17:00",
        title: "考古博物馆",
        desc: "下午去中国考古博物馆，提前 3 天预约，每天早上 9 点。",
        places: ["陕西考古博物馆", "中国考古博物馆 西安"],
      },
      {
        time: "17:30-20:00",
        title: "回民街",
        desc: "晚上回民街收尾，适合补拍夜景和买伴手礼。",
        places: ["回民街", "西羊市", "洒金桥"],
      },
    ],
    foods: [
      {
        name: "南门午餐：醉长安 / 湘子庙街陕菜",
        desc: "城墙南门下来后适合找一顿坐下来的陕菜，点葫芦鸡、温拌腰丝、锅盔辣子、油泼面。预算 80-150 元/人。",
        reason: "推荐原因：南门和湘子庙街离民宿和城墙都近，上午爬城墙后需要坐下休息，陕菜比扫街更舒服。",
        pitfall: "注意坑点：热门店饭点排队明显；葫芦鸡、泡馍、面食都占肚子，下午还去博物馆，按人数少点一两个硬菜。",
        keywords: ["醉长安 湘子庙", "南门 陕菜", "湘子庙街 美食"],
      },
      {
        name: "最后一晚：回坊查漏补缺",
        desc: "挑前几天没吃到的：水盆羊肉、胡辣汤、甑糕、镜糕、酸梅汤、腊牛肉夹馍。",
        reason: "推荐原因：最后一晚适合自由扫街，也方便买伴手礼；从民宿回去相对顺。",
        pitfall: "注意坑点：伴手礼不要买太早，夏天肉类和糕点注意保存；明码标价再下单，网红饮品不要期待过高。",
        keywords: ["回坊 水盆羊肉", "洒金桥 甑糕", "西羊市 腊牛肉夹馍"],
      },
    ],
  },
  {
    id: "day-5",
    label: "Day5",
    date: "6.7",
    title: "返程",
    cost: "机动",
    events: [
      {
        time: "按车次",
        title: "返程",
        desc: "预留打包、退房、去车站时间。若上午有空，可就近补买伴手礼。",
        places: ["西安北站", "西安站", "西安咸阳国际机场"],
      },
    ],
    foods: [
      {
        name: "返程补给：肉夹馍/凉皮不建议长时间带，伴手礼选真空类",
        desc: "可搜真空腊牛肉、绿豆糕、点心礼盒、冰峰。车站内以稳妥补给为主。",
        reason: "推荐原因：返程日不适合再安排重口大餐，买可携带、好保存的更实用。",
        pitfall: "注意坑点：凉皮、肉夹馍现吃最好，长时间携带口感下降；飞机/高铁对液体和异味食品可能有限制。",
        keywords: ["西安 伴手礼 真空腊牛肉", "西安北站 美食", "西安 绿豆糕 伴手礼"],
      },
    ],
  },
];

function amapSearch(keyword) {
  return `https://uri.amap.com/search?keyword=${encodeURIComponent(keyword)}&city=${encodeURIComponent(city)}&src=mvp-xian-route`;
}

function dianping(keyword) {
  return `https://m.dianping.com/search/keyword/17/0_${encodeURIComponent(keyword)}`;
}

function meituan(keyword) {
  return `https://i.meituan.com/s/${encodeURIComponent(`${city} ${keyword}`)}`;
}

function button(label, href, className) {
  return `<a class="link-button ${className}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}

function renderTabs() {
  const tabs = document.querySelector("#dayTabs");
  tabs.innerHTML = days
    .map((day, index) => `<a class="chip ${index === 0 ? "active" : ""}" href="#${day.id}">${day.label} ${day.date}</a>`)
    .join("");
}

function renderDays() {
  const root = document.querySelector("#days");
  root.innerHTML = days
    .map(
      (day, index) => `
        <article class="day-card" id="${day.id}">
          <header class="day-head">
            <div class="day-title">
              <span>${day.label} · ${day.date}</span>
              <h2>${day.title}</h2>
            </div>
            <div class="cost-badge">${day.cost}</div>
          </header>
          <div class="timeline">
            ${day.events
              .map(
                (event) => `
                  <section class="event">
                    <div class="time">${event.time}</div>
                    <div>
                      <h3>${event.title}</h3>
                      <p>${event.desc}</p>
                      <div class="button-row">
                        ${event.places
                          .map((place) =>
                            button(`高德: ${place}`, amapSearch(place), "map"),
                          )
                          .join("")}
                      </div>
                    </div>
                  </section>
                `,
              )
              .join("")}
          </div>
          <section class="food-section">
            <h3>推荐餐厅/小吃</h3>
            <div class="food-list">
              ${day.foods
                .map(
                  (food) => `
                    <div class="food-item">
                      <strong>${food.name}</strong>
                      <span>${food.desc}</span>
                      <span class="food-reason">${food.reason}</span>
                      <span class="food-pitfall">${food.pitfall}</span>
                      <div class="food-links">
                        ${food.keywords
                          .map((keyword) =>
                            [
                              button(`大众点评: ${keyword}`, dianping(keyword), "food"),
                              button("美团搜索", meituan(keyword), "food"),
                            ].join(""),
                          )
                          .join("")}
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>
        </article>
      `,
    )
    .join("");
}

function updateActiveTab() {
  const tabs = [...document.querySelectorAll(".chip")];
  const cards = days.map((day) => document.getElementById(day.id));
  let current = cards[0];
  for (const card of cards) {
    if (card.getBoundingClientRect().top < 150) {
      current = card;
    }
  }
  tabs.forEach((tab) => tab.classList.toggle("active", tab.getAttribute("href") === `#${current.id}`));
}

function setTodayShortcut() {
  const start = new Date("2026-06-03T00:00:00+08:00");
  const now = new Date();
  const diff = Math.floor((now - start) / 86400000);
  const index = Math.min(Math.max(diff, 0), days.length - 1);
  document.querySelector("#openToday").setAttribute("href", `#${days[index].id}`);
}

renderTabs();
renderDays();
setTodayShortcut();
updateActiveTab();
window.addEventListener("scroll", updateActiveTab, { passive: true });

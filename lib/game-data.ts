// ====== 类型定义 ======
export type Category = "家常菜" | "快手菜" | "硬菜" | "汤羹" | "素食" | "饮品" | "主食"
export type IngredientCategory = "蔬菜水果" | "肉类" | "调味料" | "蛋奶" | "主食" | "其他"

export interface Ingredient {
  name: string
  emoji: string
  amount: string
  category: IngredientCategory
}

export interface PrepStep {
  text: string
  tip?: string
}

export interface CookStep {
  text: string
  heat?: string // 火候
  sense?: string // 感官提示
  tip?: string
  timer?: number // 建议计时秒数
}

export interface Dish {
  id: string
  name: string
  emoji: string
  category: Category
  time: number // 分钟
  difficulty: number // 1-5
  tags: string[]
  desc: string
  tools: string[]
  ingredients: Ingredient[]
  prep: PrepStep[]
  cook: CookStep[]
}

// ====== 菜品数据 ======
export const DISHES: Dish[] = [
  {
    id: "tomato-egg",
    name: "番茄炒蛋",
    emoji: "🍅",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["下饭", "快手", "新手友好"],
    desc: "酸甜可口的国民家常菜，新手必学第一道。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅"],
    ingredients: [
      { name: "番茄", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "1小勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "2勺", category: "调味料" },
    ],
    prep: [
      { text: "番茄洗净切块", tip: "顶部划十字烫水更易去皮" },
      { text: "鸡蛋打散加少许盐搅匀", tip: "加一勺清水蛋更嫩" },
      { text: "小葱切葱花备用" },
    ],
    cook: [
      { text: "热锅下油，倒入蛋液炒至凝固盛出", heat: "🔥🔥 中火", sense: "👀 蛋液边缘鼓起", tip: "蛋别炒太老", timer: 60 },
      { text: "底油下番茄块翻炒出汁", heat: "🔥🔥 中火", sense: "👀 番茄变软出红汤", timer: 120 },
      { text: "加糖和盐，倒回鸡蛋翻炒均匀", heat: "🔥 大火", tip: "糖能中和酸味" },
      { text: "撒葱花出锅", sense: "👃 香味扑鼻" },
    ],
  },
  {
    id: "kungpao",
    name: "宫保鸡丁",
    emoji: "🍗",
    category: "硬菜",
    time: 30,
    difficulty: 3,
    tags: ["下饭", "宴客", "酸甜辣"],
    desc: "经典川菜，鸡丁嫩滑、花生酥脆、糊辣荔枝味。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅", "🥄 量勺"],
    ingredients: [
      { name: "鸡胸肉", emoji: "🍗", amount: "300g", category: "肉类" },
      { name: "花生米", emoji: "🥜", amount: "80g", category: "主食" },
      { name: "干辣椒", emoji: "🌶️", amount: "8个", category: "调味料" },
      { name: "大葱", emoji: "🧅", amount: "1根", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "陈醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "鸡胸切丁，加生抽、淀粉抓匀腌制", tip: "腌10分钟更入味" },
      { text: "调碗汁：生抽、醋、糖、淀粉、水", tip: "比例 2:1:1 经典荔枝味" },
      { text: "大葱切段，干辣椒剪段去籽" },
    ],
    cook: [
      { text: "热油滑炒鸡丁至变色盛出", heat: "🔥🔥 中火", sense: "👀 鸡丁变白", timer: 90 },
      { text: "底油爆香干辣椒和花椒", heat: "🔥 小火", sense: "👃 辣椒变深红出香", tip: "小火别炒糊", timer: 30 },
      { text: "下葱段炒香，倒入鸡丁", heat: "🔥🔥🔥 大火" },
      { text: "淋入碗汁快速翻炒收汁，撒花生", heat: "🔥🔥🔥 大火", sense: "👀 酱汁裹匀发亮" },
    ],
  },
  {
    id: "cucumber",
    name: "拍黄瓜",
    emoji: "🥒",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["凉菜", "解腻", "快手"],
    desc: "夏日开胃凉菜，清爽脆嫩，三分钟搞定。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗"],
    ingredients: [
      { name: "黄瓜", emoji: "🥒", amount: "2根", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "3瓣", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "香醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" },
    ],
    prep: [
      { text: "黄瓜拍裂切块", tip: "拍裂比刀切更入味" },
      { text: "蒜剁成蒜末" },
    ],
    cook: [
      { text: "黄瓜加盐腌5分钟挤水", sense: "👀 出水后更脆", timer: 300 },
      { text: "加蒜末、生抽、醋、香油拌匀", tip: "现拌现吃口感最好" },
    ],
  },
  {
    id: "tomato-soup",
    name: "番茄豆腐汤",
    emoji: "🍲",
    category: "汤羹",
    time: 20,
    difficulty: 2,
    tags: ["暖胃", "低脂", "汤羹"],
    desc: "酸甜暖胃的快手汤，豆腐嫩滑番茄浓郁。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅"],
    ingredients: [
      { name: "番茄", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "嫩豆腐", emoji: "🧈", amount: "1盒", category: "蛋奶" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "番茄切块，豆腐切丁" },
      { text: "鸡蛋打散" },
    ],
    cook: [
      { text: "番茄炒软出汁，加水煮开", heat: "🔥🔥 中火", sense: "👀 汤色红亮", timer: 180 },
      { text: "下豆腐丁小火煮3分钟", heat: "🔥 小火", timer: 180 },
      { text: "淋蛋液成蛋花，加盐撒葱花", sense: "👀 蛋花漂浮" },
    ],
  },
  {
    id: "stirfry-veg",
    name: "清炒时蔬",
    emoji: "🥬",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["清淡", "素食", "快手"],
    desc: "保留蔬菜本味的清爽小炒，越简单越鲜。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "青菜", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "2瓣", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "青菜洗净沥干", tip: "沥干水分炒时不溅油" },
      { text: "蒜切片" },
    ],
    cook: [
      { text: "热锅热油爆香蒜片", heat: "🔥🔥🔥 大火", sense: "👃 蒜香四溢", timer: 20 },
      { text: "下青菜大火快炒，加盐出锅", heat: "🔥🔥🔥 大火", sense: "👀 菜叶变翠绿", tip: "大火快炒锁住水分", timer: 60 },
    ],
  },
  {
    id: "braised-pork",
    name: "红烧肉",
    emoji: "🥩",
    category: "硬菜",
    time: 60,
    difficulty: 4,
    tags: ["宴客", "硬菜", "下饭"],
    desc: "肥而不腻、入口即化的经典硬菜，宴客撑场面。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅", "🍲 砂锅"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "500g", category: "肉类" },
      { name: "冰糖", emoji: "🍬", amount: "20g", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "蔬菜水果" },
      { name: "八角", emoji: "🌟", amount: "2颗", category: "调味料" },
    ],
    prep: [
      { text: "五花肉切麻将块", tip: "大小均匀受热一致" },
      { text: "冷水下锅焯水去血沫", tip: "加姜片料酒去腥" },
    ],
    cook: [
      { text: "小火炒冰糖至焦糖色", heat: "🔥 小火", sense: "👀 糖色枣红冒小泡", tip: "炒糊会发苦", timer: 120 },
      { text: "下肉块翻炒上色", heat: "🔥🔥 中火", sense: "👀 每块裹上糖色" },
      { text: "加生抽老抽香料和热水", heat: "🔥🔥 中火", tip: "水要没过肉" },
      { text: "小火慢炖40分钟后大火收汁", heat: "🔥 小火", sense: "👀 汤汁浓稠发亮", timer: 600 },
    ],
  },
  {
    id: "mapo-tofu",
    name: "麻婆豆腐",
    emoji: "🌶️",
    category: "家常菜",
    time: 25,
    difficulty: 3,
    tags: ["下饭", "麻辣", "经典川菜"],
    desc: "麻、辣、烫、香、酥、嫩、鲜、活八字真言，超级下饭。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅", "🥄 量勺"],
    ingredients: [
      { name: "嫩豆腐", emoji: "🧈", amount: "1盒", category: "蛋奶" },
      { name: "肉末", emoji: "🥩", amount: "100g", category: "肉类" },
      { name: "豆瓣酱", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "花椒粉", emoji: "🌟", amount: "1小勺", category: "调味料" },
      { name: "大蒜", emoji: "🧄", amount: "2瓣", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
    ],
    prep: [
      { text: "豆腐切方块，淡盐水浸泡", tip: "盐水浸泡不易碎" },
      { text: "蒜切末，葱切花" },
    ],
    cook: [
      { text: "炒香肉末至焦黄", heat: "🔥🔥 中火", sense: "👀 肉末出油变色", timer: 90 },
      { text: "下豆瓣酱炒出红油，加蒜末", heat: "🔥 小火", sense: "👀 红油析出", tip: "小火慢炒不糊", timer: 60 },
      { text: "加水下豆腐轻推煮3分钟", heat: "🔥🔥 中火", sense: "👀 豆腐吸味", timer: 180 },
      { text: "勾芡收汁，撒花椒粉葱花", heat: "🔥🔥 中火", sense: "👃 麻香扑鼻" },
    ],
  },
  {
    id: "scrambled-egg-leek",
    name: "韭菜炒蛋",
    emoji: "🥬",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["快手", "下饭", "新手友好"],
    desc: "韭菜清香裹着滑嫩鸡蛋，三分钟出锅的快手菜。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅"],
    ingredients: [
      { name: "韭菜", emoji: "🌿", amount: "1把", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "2勺", category: "调味料" },
    ],
    prep: [
      { text: "韭菜洗净切段", tip: "根部和叶分开切" },
      { text: "鸡蛋打散加盐" },
    ],
    cook: [
      { text: "热油炒蛋至凝固盛出", heat: "🔥🔥 中火", sense: "👀 蛋块金黄", timer: 60 },
      { text: "下韭菜梗快炒，再下叶", heat: "🔥🔥🔥 大火", sense: "👀 韭菜变软", timer: 40 },
      { text: "倒回鸡蛋加盐翻匀出锅", heat: "🔥🔥🔥 大火", sense: "👃 韭香四溢" },
    ],
  },
  {
    id: "sweet-sour-pork",
    name: "糖醋里脊",
    emoji: "🍖",
    category: "硬菜",
    time: 40,
    difficulty: 4,
    tags: ["宴客", "酸甜", "孩子爱吃"],
    desc: "外酥里嫩、酸甜开胃，老少皆宜的宴客硬菜。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅", "🥄 量勺"],
    ingredients: [
      { name: "里脊肉", emoji: "🍖", amount: "300g", category: "肉类" },
      { name: "番茄酱", emoji: "🍅", amount: "3勺", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "2勺", category: "调味料" },
      { name: "白醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "淀粉", emoji: "🍚", amount: "适量", category: "主食" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
    ],
    prep: [
      { text: "里脊切条，加盐料酒腌制", tip: "腌15分钟更入味" },
      { text: "裹蛋液和淀粉糊", tip: "糊要均匀挂住" },
      { text: "调糖醋汁：番茄酱、糖、醋、水" },
    ],
    cook: [
      { text: "油温六成下肉条炸定型", heat: "🔥🔥 中火", sense: "👀 表面微黄浮起", timer: 120 },
      { text: "升高油温复炸至金黄酥脆", heat: "🔥🔥🔥 大火", sense: "👀 颜色金黄", tip: "复炸更酥", timer: 60 },
      { text: "另起锅熬糖醋汁至浓稠", heat: "🔥🔥 中火", sense: "👀 汁起大泡", timer: 90 },
      { text: "下肉条快速翻裹出锅", heat: "🔥🔥🔥 大火", sense: "👀 酱汁裹匀发亮" },
    ],
  },
  {
    id: "corn-rib-soup",
    name: "玉米排骨汤",
    emoji: "🌽",
    category: "汤羹",
    time: 70,
    difficulty: 2,
    tags: ["滋补", "鲜甜", "老少皆宜"],
    desc: "清甜滋补的家常靓汤，玉米清甜排骨鲜香。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅"],
    ingredients: [
      { name: "排骨", emoji: "🍖", amount: "400g", category: "肉类" },
      { name: "玉米", emoji: "🌽", amount: "2根", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "排骨冷水焯水去血沫", tip: "加姜片料酒去腥" },
      { text: "玉米胡萝卜切段块" },
    ],
    cook: [
      { text: "排骨加姜片清水大火煮开", heat: "🔥🔥🔥 大火", sense: "👀 汤面浮沫撇净", timer: 300 },
      { text: "下玉米胡萝卜转小火慢炖", heat: "🔥 小火", sense: "👃 清甜香气", timer: 2400 },
      { text: "出锅前加盐调味", sense: "👀 汤色清亮" },
    ],
  },
  {
    id: "garlic-eggplant",
    name: "蒜蓉茄子",
    emoji: "🍆",
    category: "素食",
    time: 20,
    difficulty: 2,
    tags: ["素食", "下饭", "软糯"],
    desc: "软糯入味的下饭素菜，蒜香浓郁不油腻。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "茄子", emoji: "🍆", amount: "2根", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "1头", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
    ],
    prep: [
      { text: "茄子切条泡盐水防氧化", tip: "泡水后炒不吃油" },
      { text: "蒜剁末，一半爆香一半生用" },
    ],
    cook: [
      { text: "茄条挤干水分下锅煸软", heat: "🔥🔥 中火", sense: "👀 茄子塌软变色", timer: 180 },
      { text: "加蒜末翻炒出香", heat: "🔥🔥 中火", sense: "👃 蒜香浓郁", timer: 30 },
      { text: "加生抽蚝油焖2分钟收汁", heat: "🔥 小火", sense: "👀 酱色裹匀", timer: 120 },
      { text: "撒生蒜末葱花出锅", sense: "👃 双重蒜香" },
    ],
  },
  {
    id: "potato-shred",
    name: "醋溜土豆丝",
    emoji: "🥔",
    category: "快手菜",
    time: 15,
    difficulty: 2,
    tags: ["快手", "下饭", "酸辣脆"],
    desc: "爽脆酸辣的国民快手菜，刀工练习首选。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "陈醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "大蒜", emoji: "🧄", amount: "2瓣", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "土豆切细丝泡水洗淀粉", tip: "泡水后更脆不粘锅" },
      { text: "干辣椒剪段，蒜切片" },
    ],
    cook: [
      { text: "热油爆香辣椒蒜片", heat: "🔥🔥🔥 大火", sense: "👃 辣香四溢", timer: 20 },
      { text: "下土豆丝大火快炒", heat: "🔥🔥🔥 大火", sense: "👀 土豆丝半透明", tip: "全程大火保持脆度", timer: 90 },
      { text: "沿锅边淋醋加盐翻匀出锅", heat: "🔥🔥🔥 大火", sense: "👃 醋香扑鼻" },
    ],
  },
  {
    id: "steamed-egg",
    name: "蒸水蛋",
    emoji: "🥚",
    category: "家常菜",
    time: 20,
    difficulty: 2,
    tags: ["嫩滑", "营养", "老少皆宜"],
    desc: "嫩滑如布丁的蒸蛋，宝宝和老人都爱吃。",
    tools: ["🥣 大碗", "🍲 蒸锅"],
    ingredients: [
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "温水", emoji: "💧", amount: "蛋液1.5倍", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
    ],
    prep: [
      { text: "鸡蛋打散加温水搅匀", tip: "用温水蛋更嫩" },
      { text: "过筛去除气泡", tip: "过筛蒸出来才光滑" },
    ],
    cook: [
      { text: "水开后蛋液上锅盖保鲜膜", heat: "🔥🔥 中火", tip: "盖膜防止水汽滴落起蜂窝" },
      { text: "中小火蒸10分钟", heat: "🔥 小火", sense: "👀 蛋面凝固晃动有弹性", timer: 600 },
      { text: "出锅淋生抽香油撒葱花", sense: "👀 表面光滑如镜" },
    ],
  },
  {
    id: "fish-tofu-soup",
    name: "鲫鱼豆腐汤",
    emoji: "🐟",
    category: "汤羹",
    time: 40,
    difficulty: 3,
    tags: ["滋补", "奶白", "鲜美"],
    desc: "汤色奶白、鲜美滋补，下奶养身的经典靓汤。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅", "🍲 汤锅"],
    ingredients: [
      { name: "鲫鱼", emoji: "🐟", amount: "1条", category: "肉类" },
      { name: "嫩豆腐", emoji: "🧈", amount: "1盒", category: "蛋奶" },
      { name: "生姜", emoji: "🫚", amount: "4片", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "2根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "鲫鱼处理干净擦干水分", tip: "擦干才不溅油不腥" },
      { text: "豆腐切块，姜切片葱打结" },
    ],
    cook: [
      { text: "热油把鱼两面煎金黄", heat: "🔥🔥 中火", sense: "👀 鱼皮金黄不破", tip: "煎透是奶白关键", timer: 240 },
      { text: "冲入开水大火滚煮", heat: "🔥🔥🔥 大火", sense: "👀 汤色逐渐奶白", timer: 600 },
      { text: "下豆腐转中火炖10分钟", heat: "🔥🔥 中火", timer: 600 },
      { text: "加盐撒葱花出锅", sense: "👃 鲜香浓郁" },
    ],
  },
  {
    id: "cold-noodle",
    name: "凉拌面",
    emoji: "🍜",
    category: "快手菜",
    time: 15,
    difficulty: 1,
    tags: ["快手", "夏日", "开胃"],
    desc: "夏天没胃口？一碗酸辣爽口的凉拌面拯救你。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅", "🥣 大碗"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "200g", category: "主食" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "3瓣", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "陈醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "辣椒油", emoji: "🌶️", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "黄瓜切丝，蒜剁末" },
      { text: "调汁：生抽、醋、辣椒油、糖" },
    ],
    cook: [
      { text: "面条煮熟过凉水", heat: "🔥🔥🔥 大火", sense: "👀 面条爽滑不坨", tip: "过凉水更筋道", timer: 240 },
      { text: "面条加料汁拌匀", tip: "趁凉拌入味" },
      { text: "铺黄瓜丝淋辣椒油拌食", sense: "👃 酸辣开胃" },
    ],
  },
  {
    id: "dry-pot-cauliflower",
    name: "干锅花菜",
    emoji: "🥦",
    category: "家常菜",
    time: 25,
    difficulty: 3,
    tags: ["下饭", "香辣", "馆子味"],
    desc: "饭店招牌干锅，花菜吸饱肉香微辣超下饭。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "有机花菜", emoji: "🥦", amount: "1颗", category: "蔬菜水果" },
      { name: "五花肉", emoji: "🥓", amount: "150g", category: "肉类" },
      { name: "豆瓣酱", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "大蒜", emoji: "🧄", amount: "3瓣", category: "蔬菜水果" },
    ],
    prep: [
      { text: "花菜掰小朵焯水", tip: "焯水后更易熟" },
      { text: "五花肉切薄片，蒜拍碎" },
    ],
    cook: [
      { text: "煸炒五花肉出油", heat: "🔥🔥 中火", sense: "👀 肉片卷曲微焦", timer: 120 },
      { text: "下豆瓣酱辣椒蒜炒香", heat: "🔥 小火", sense: "👀 红油渗出", timer: 40 },
      { text: "下花菜大火爆炒", heat: "🔥🔥🔥 大火", sense: "👀 花菜边缘微焦", tip: "大火干香无水", timer: 180 },
      { text: "调味翻匀出锅装干锅", sense: "👃 香辣干香" },
    ],
  },
  {
    id: "white-radish-soup",
    name: "白萝卜羊肉汤",
    emoji: "🍲",
    category: "汤羹",
    time: 90,
    difficulty: 3,
    tags: ["冬补", "暖身", "驱寒"],
    desc: "冬日驱寒暖身佳品，羊肉鲜香萝卜清甜。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅"],
    ingredients: [
      { name: "羊肉", emoji: "🥩", amount: "500g", category: "肉类" },
      { name: "白萝卜", emoji: "🥬", amount: "1根", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "5片", category: "蔬菜水果" },
      { name: "白胡椒粉", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "香菜", emoji: "🌿", amount: "1把", category: "蔬菜水果" },
    ],
    prep: [
      { text: "羊肉切块冷水焯水", tip: "加姜片去膻味" },
      { text: "白萝卜切滚刀块" },
    ],
    cook: [
      { text: "羊肉加姜片清水大火煮开", heat: "🔥🔥🔥 大火", sense: "👀 撇净浮沫", timer: 300 },
      { text: "转小火炖1小时", heat: "🔥 小火", sense: "👀 羊肉软烂", timer: 3600 },
      { text: "下萝卜块炖20分钟", heat: "🔥 小火", sense: "👀 萝卜透明", timer: 1200 },
      { text: "加盐胡椒粉撒香菜出锅", sense: "👃 暖香扑鼻" },
    ],
  },
  {
    id: "egg-fried-rice",
    name: "蛋炒饭",
    emoji: "🍚",
    category: "快手菜",
    time: 15,
    difficulty: 2,
    tags: ["快手", "主食", "光盘"],
    desc: "粒粒分明的黄金蛋炒饭，剩饭也能变美味。",
    tools: ["🥣 大碗", "🍳 炒锅", "🥄 锅铲"],
    ingredients: [
      { name: "米饭", emoji: "🍚", amount: "1碗", category: "主食" },
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "胡萝卜", emoji: "🥕", amount: "半根", category: "蔬菜水果" },
      { name: "豌豆", emoji: "🟢", amount: "1把", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "2根", category: "蔬菜水果" },
    ],
    prep: [
      { text: "用隔夜冷饭打散", tip: "冷饭炒出来才粒粒分明" },
      { text: "胡萝卜切丁，葱切花，蛋打散" },
    ],
    cook: [
      { text: "炒散鸡蛋盛出", heat: "🔥🔥 中火", sense: "👀 蛋块金黄", timer: 60 },
      { text: "炒香胡萝卜豌豆丁", heat: "🔥🔥 中火", sense: "👀 蔬菜变软", timer: 90 },
      { text: "下米饭大火翻炒压散", heat: "🔥🔥🔥 大火", sense: "👀 米粒跳动分明", tip: "大火快炒锅气足", timer: 120 },
      { text: "倒回鸡蛋加盐撒葱花出锅", sense: "👃 锅气香" },
    ],
  },
  {
    id: "stir-celery-lily",
    name: "西芹炒百合",
    emoji: "🥬",
    category: "素食",
    time: 15,
    difficulty: 2,
    tags: ["素食", "清淡", "润肺"],
    desc: "清新爽脆、色泽雅致的润肺素菜，宴客也体面。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "西芹", emoji: "🥬", amount: "2根", category: "蔬菜水果" },
      { name: "鲜百合", emoji: "🌸", amount: "2个", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "半根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "西芹去筋切片焯水", tip: "焯水保持翠绿" },
      { text: "百合掰瓣洗净，胡萝卜切片" },
    ],
    cook: [
      { text: "热油下西芹胡萝卜快炒", heat: "🔥🔥🔥 大火", sense: "👀 颜色鲜亮", timer: 60 },
      { text: "下百合翻炒至透明", heat: "🔥🔥🔥 大火", sense: "👀 百合微透", tip: "百合易熟最后下", timer: 40 },
      { text: "加盐快速翻匀出锅", sense: "👀 清爽雅致" },
    ],
  },
  {
    id: "braised-chicken-wing",
    name: "可乐鸡翅",
    emoji: "🍗",
    category: "硬菜",
    time: 35,
    difficulty: 2,
    tags: ["孩子爱吃", "下饭", "甜咸"],
    desc: "零失败的网红家常菜，甜咸入味色泽红亮。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "鸡翅中", emoji: "🍗", amount: "10个", category: "肉类" },
      { name: "可乐", emoji: "🥤", amount: "1罐", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "蔬菜水果" },
      { name: "食用油", emoji: "🫗", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "鸡翅两面划刀焯水", tip: "划刀更易入味" },
      { text: "姜切片" },
    ],
    cook: [
      { text: "煎鸡翅至两面金黄", heat: "🔥🔥 中火", sense: "👀 表皮金黄出油", timer: 180 },
      { text: "倒可乐生抽姜片没过鸡翅", heat: "🔥🔥 中火", tip: "可乐代替糖和水" },
      { text: "大火煮开转小火焖20分钟", heat: "🔥 小火", sense: "👀 鸡翅上色", timer: 1200 },
      { text: "大火收汁至浓稠裹匀", heat: "🔥🔥🔥 大火", sense: "👀 酱汁发亮挂翅" },
    ],
  },
  {
    id: "winter-melon-soup",
    name: "冬瓜虾仁汤",
    emoji: "🍲",
    category: "汤羹",
    time: 25,
    difficulty: 2,
    tags: ["清淡", "低脂", "祛湿"],
    desc: "清爽不油腻的夏日靓汤，冬瓜消暑虾仁鲜甜。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅"],
    ingredients: [
      { name: "冬瓜", emoji: "🥒", amount: "300g", category: "蔬菜水果" },
      { name: "虾仁", emoji: "🦐", amount: "100g", category: "肉类" },
      { name: "生姜", emoji: "🫚", amount: "2片", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "冬瓜去皮切薄片" },
      { text: "虾仁去虾线，姜切丝" },
    ],
    cook: [
      { text: "姜丝炝锅加水煮开", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "下冬瓜片煮至透明", heat: "🔥🔥 中火", sense: "👀 冬瓜变透明", timer: 240 },
      { text: "下虾仁煮至变红", heat: "🔥🔥 中火", sense: "👀 虾仁卷曲变红", timer: 90 },
      { text: "加盐撒葱花出锅", sense: "👃 清鲜淡雅" },
    ],
  },
  {
    id: "twice-cooked-pork",
    name: "回锅肉",
    emoji: "🥓",
    category: "硬菜",
    time: 40,
    difficulty: 4,
    tags: ["下饭", "经典川菜", "香辣"],
    desc: "川菜之首，肥而不腻、灯盏窝形，香辣下饭。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅", "🍳 炒锅"],
    ingredients: [
      { name: "二刀肉", emoji: "🥓", amount: "400g", category: "肉类" },
      { name: "青蒜", emoji: "🌿", amount: "3根", category: "蔬菜水果" },
      { name: "郫县豆瓣", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "甜面酱", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "豆豉", emoji: "🫘", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "整块肉加姜葱煮至七分熟", tip: "筷子能插入即可", },
      { text: "晾凉切薄片，青蒜切马耳段" },
    ],
    cook: [
      { text: "肉片下锅煸炒出灯盏窝", heat: "🔥🔥 中火", sense: "👀 肉片卷曲吐油", tip: "煸出油才香", timer: 180 },
      { text: "下豆瓣豆豉炒出红油", heat: "🔥 小火", sense: "👀 红油浓郁", timer: 40 },
      { text: "加甜面酱炒匀", heat: "🔥🔥 中火" },
      { text: "下青蒜大火翻炒出锅", heat: "🔥🔥🔥 大火", sense: "👃 蒜香浓郁" },
    ],
  },
  {
    id: "scrambled-shrimp",
    name: "滑蛋虾仁",
    emoji: "🦐",
    category: "快手菜",
    time: 20,
    difficulty: 3,
    tags: ["快手", "嫩滑", "高蛋白"],
    desc: "粤式经典，蛋滑虾弹，鲜嫩到入口即化。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅"],
    ingredients: [
      { name: "虾仁", emoji: "🦐", amount: "200g", category: "肉类" },
      { name: "鸡蛋", emoji: "🥚", amount: "4个", category: "蛋奶" },
      { name: "牛奶", emoji: "🥛", amount: "2勺", category: "蛋奶" },
      { name: "小葱", emoji: "🌿", amount: "1根", category: "蔬菜水果" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "虾仁去线腌制上浆", tip: "加蛋清淀粉更嫩滑" },
      { text: "鸡蛋加牛奶盐打散", tip: "加牛奶蛋更滑" },
    ],
    cook: [
      { text: "虾仁滑炒至变色盛出", heat: "🔥🔥 中火", sense: "👀 虾仁变红", timer: 60 },
      { text: "倒蛋液小火轻推", heat: "🔥 小火", sense: "👀 蛋液半凝固", tip: "小火慢推才滑嫩", timer: 60 },
      { text: "倒回虾仁快速翻匀离火", heat: "🔥 小火", sense: "👀 蛋呈嫩滑状", tip: "余温焖熟保持嫩" },
    ],
  },
  {
    id: "braised-eggplant",
    name: "鱼香茄子",
    emoji: "🍆",
    category: "家常菜",
    time: 30,
    difficulty: 3,
    tags: ["下饭", "酸甜辣", "经典川菜"],
    desc: "没有鱼的鱼香味，酸甜微辣超级拌饭神器。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅", "🥄 量勺"],
    ingredients: [
      { name: "长茄子", emoji: "🍆", amount: "2根", category: "蔬菜水果" },
      { name: "肉末", emoji: "🥩", amount: "100g", category: "肉类" },
      { name: "泡椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "陈醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "茄子切条泡盐水", tip: "防氧化变黑" },
      { text: "调鱼香汁：生抽醋糖淀粉水", tip: "酸甜比例是灵魂" },
    ],
    cook: [
      { text: "茄条过油炸软盛出", heat: "🔥🔥 中火", sense: "👀 茄子塌软金黄", timer: 180 },
      { text: "炒香肉末泡椒姜蒜", heat: "🔥🔥 中火", sense: "👃 香辣味出", timer: 90 },
      { text: "下茄子淋鱼香汁翻炒", heat: "🔥🔥🔥 大火", sense: "👀 酱汁裹匀" },
      { text: "收汁撒葱花出锅", sense: "👃 酸甜香辣" },
    ],
  },
  {
    id: "millet-congee",
    name: "南瓜小米粥",
    emoji: "🎃",
    category: "汤羹",
    time: 40,
    difficulty: 1,
    tags: ["养胃", "早餐", "新手友好"],
    desc: "金黄绵密的养胃粥，香甜软糯老少咸宜。",
    tools: ["🔪 菜刀 + 砧板", "🍲 汤锅"],
    ingredients: [
      { name: "小米", emoji: "🌾", amount: "1杯", category: "主食" },
      { name: "南瓜", emoji: "🎃", amount: "200g", category: "蔬菜水果" },
      { name: "清水", emoji: "💧", amount: "适量", category: "调味料" },
    ],
    prep: [
      { text: "小米淘洗浸泡15分钟", tip: "浸泡后更易煮开花" },
      { text: "南瓜去皮切小块" },
    ],
    cook: [
      { text: "水开下小米搅拌防粘底", heat: "🔥🔥🔥 大火", sense: "👀 水再次沸腾", timer: 120 },
      { text: "下南瓜块转小火慢熬", heat: "🔥 小火", sense: "👀 南瓜软烂", tip: "勤搅拌防糊底", timer: 1500 },
      { text: "熬至浓稠米油析出", heat: "🔥 小火", sense: "👀 表面起米油层" },
    ],
  },
  {
    id: "boiled-fish",
    name: "水煮鱼",
    emoji: "🐟",
    category: "硬菜",
    time: 45,
    difficulty: 5,
    tags: ["宴客", "麻辣", "重口味"],
    desc: "麻辣鲜香、鱼片嫩滑的经典川菜，宴客镇场硬菜。",
    tools: ["🔪 菜刀 + 砧板", "🥣 大碗", "🍳 炒锅", "🍲 汤锅"],
    ingredients: [
      { name: "草鱼", emoji: "🐟", amount: "1条", category: "肉类" },
      { name: "豆芽", emoji: "🌱", amount: "1把", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "20个", category: "调味料" },
      { name: "花椒", emoji: "🌟", amount: "2勺", category: "调味料" },
      { name: "郫县豆瓣", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "鸡蛋清", emoji: "🥚", amount: "1个", category: "蛋奶" },
    ],
    prep: [
      { text: "草鱼片成薄片，鱼骨切块", tip: "斜刀片薄更嫩" },
      { text: "鱼片加蛋清淀粉盐上浆", tip: "上浆锁住水分" },
      { text: "干辣椒花椒备好" },
    ],
    cook: [
      { text: "豆芽焯熟垫碗底", heat: "🔥🔥🔥 大火", timer: 60 },
      { text: "炒豆瓣出红油加水煮鱼骨", heat: "🔥🔥 中火", sense: "👀 汤色红亮", timer: 300 },
      { text: "下鱼片汆烫至变白", heat: "🔥🔥 中火", sense: "👀 鱼片打卷变白", tip: "煮久了鱼片会老", timer: 90 },
      { text: "连汤倒入碗中，铺辣椒花椒淋热油", heat: "🔥🔥🔥 大火", sense: "👃 麻辣香气炸出" },
    ],
  },
  {
    id: "stir-greens-mushroom",
    name: "香菇青菜",
    emoji: "🍄",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["素食", "清淡", "快手"],
    desc: "鲜香软嫩的快手素菜，香菇提鲜青菜爽口。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "青菜", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "香菇", emoji: "🍄", amount: "6朵", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "2瓣", category: "蔬菜水果" },
      { name: "蚝油", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "1勺", category: "调味料" },
    ],
    prep: [
      { text: "青菜洗净对半切，香菇切片" },
      { text: "蒜切片" },
    ],
    cook: [
      { text: "爆香蒜片下香菇炒软", heat: "🔥🔥 中火", sense: "👃 菇香飘出", timer: 120 },
      { text: "下青菜大火快炒", heat: "🔥🔥🔥 大火", sense: "👀 菜叶翠绿", timer: 60 },
      { text: "加蚝油盐翻匀出锅", heat: "🔥🔥🔥 大火", sense: "👀 油亮鲜香" },
    ],
  },
  {
    id: "dish-5",
    name: "西红柿蛋汤",
    emoji: "🍲",
    category: "汤羹",
    time: 15,
    difficulty: 1,
    tags: ["新手友好","汤品","暖胃"],
    desc: "酸甜暖胃，做任何菜的完美搭档",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "番茄", emoji: "🍅", amount: "1个", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" },
      { name: "白胡椒粉", emoji: "🌶️", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "番茄去皮切小块", tip: "顶部划十字，开水烫30秒就能轻松去皮" },
      { text: "鸡蛋打散备用", tip: "加一滴水蛋花更嫩" },
      { text: "葱切葱花" }
    ],
    cook: [
      { text: "锅中少许油，放入番茄块翻炒", heat: "🔥🔥 中火", sense: "👀 看到汤汁渗出", tip: "炒到番茄软烂出汁", timer: 120 },
      { text: "加入适量清水，大火烧开", heat: "🔥🔥🔥 大火", tip: "水量根据人数调整，一般2-3碗", timer: 120 },
      { text: "水开后，沿锅边缓缓倒入蛋液", tip: "倒蛋液时不要搅动，等蛋花自然成形", timer: 15 },
      { text: "等蛋花浮起，加盐和白胡椒粉调味", tip: "白胡椒粉去腥提味", timer: 10 },
      { text: "关火，滴几滴香油，撒葱花", tip: "香油最后放，香味更浓", timer: 10 }
    ],
  },
  {
    id: "dish-6",
    name: "蒜蓉西兰花",
    emoji: "🥦",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["减脂","快手","健康"],
    desc: "清爽健康，减脂期的最佳拍档",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "西兰花", emoji: "🥦", amount: "1颗", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "西兰花掰成小朵，用盐水浸泡10分钟", tip: "盐水能逼出藏在花苞里的小虫" },
      { text: "蒜切末备用", tip: "蒜末切得越细，蒜香味越浓" },
      { text: "烧一锅开水备用", tip: "水里加点盐和几滴油，焯出来的西兰花更绿" }
    ],
    cook: [
      { text: "西兰花焯水1分钟，捞出过凉水", tip: "过凉水能保持翠绿色泽和脆嫩口感", timer: 60 },
      { text: "锅中倒油，放入蒜末爆香", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火炒，蒜末焦了会发苦", timer: 30 },
      { text: "放入西兰花大火翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒，保持脆嫩", timer: 60 },
      { text: "加蚝油和盐调味，翻匀出锅", tip: "蚝油有咸味，盐要少放", timer: 20 }
    ],
  },
  {
    id: "dish-7",
    name: "红烧排骨",
    emoji: "🍖",
    category: "硬菜",
    time: 60,
    difficulty: 3,
    tags: ["宴客","肉食","经典"],
    desc: "色泽红亮，软烂入骨，硬菜之王",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "猪小排", emoji: "🍖", amount: "500g", category: "肉类" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "八角", emoji: "⭐", amount: "2个", category: "调味料" },
      { name: "桂皮", emoji: "🪵", amount: "1小块", category: "调味料" },
      { name: "冰糖", emoji: "🍬", amount: "20g", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "2勺", category: "调味料" }
    ],
    prep: [
      { text: "排骨剁成4-5cm小段", tip: "买的时候让师傅帮忙剁好" },
      { text: "冷水下锅焯水，加料酒和姜片", tip: "冷水下锅，煮出浮沫后捞出" },
      { text: "焯好的排骨用温水洗净沥干", tip: "洗去浮沫，沥干水分" },
      { text: "准备好冰糖、八角、桂皮", tip: "冰糖比白糖上色更亮" }
    ],
    cook: [
      { text: "锅中少许油，放入冰糖小火炒至焦糖色", heat: "🔥🔥 中火", tip: "小火！冰糖融化后变成琥珀色即可", timer: 120 },
      { text: "放入排骨快速翻炒上色", heat: "🔥🔥 中火", tip: "让每块排骨都裹上糖色", timer: 60 },
      { text: "加入姜片、葱段、八角、桂皮炒香", sense: "👃 闻到香味即可", tip: "炒出香料的香味", timer: 30 },
      { text: "加入生抽和老抽，翻炒均匀", heat: "🔥🔥 中火", tip: "老抽主要上色，别太多", timer: 20 },
      { text: "加入热水没过排骨，大火烧开", heat: "🔥🔥🔥 大火", tip: "一定要加热水！冷水会让肉变紧", timer: 30 },
      { text: "转小火，盖盖焖煮45分钟", heat: "🔥 小火", tip: "中途不要频繁开盖", timer: 2700 },
      { text: "开盖大火收汁，汤汁浓稠裹在排骨上", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "不停翻动，防止糊底", timer: 300 },
      { text: "出锅装盘，撒点葱花点缀", tip: "完美！你做出了硬菜！", timer: 10 }
    ],
  },
  {
    id: "dish-8",
    name: "酸辣土豆丝",
    emoji: "🥔",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["新手友好","下饭","快手"],
    desc: "酸辣爽脆，永远的下饭神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "花椒", emoji: "🫚", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "土豆去皮，切成细丝", tip: "越细越好，可以先切薄片再切丝" },
      { text: "土豆丝泡入清水中，洗去淀粉", tip: "换2-3次水直到水变清，这样炒出来才脆" },
      { text: "蒜切片，干辣椒剪段", tip: "辣椒籽可以去掉，没那么辣" }
    ],
    cook: [
      { text: "锅中倒油，放入花椒和干辣椒爆香", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火！花椒变黑前捞出", timer: 30 },
      { text: "放入蒜片炒香", sense: "👃 闻到香味即可", tip: "闻到蒜香即可", timer: 15 },
      { text: "沥干土豆丝下锅，大火快炒", heat: "🔥🔥🔥 大火", tip: "大火是关键！保持脆感", timer: 120 },
      { text: "沿锅边淋入醋，翻炒均匀", heat: "🔥🔥 中火", tip: "醋遇热锅边会激发出酸香", timer: 20 },
      { text: "加盐调味，翻匀出锅", tip: "不要炒太久，土豆丝变软就不好吃了", timer: 20 }
    ],
  },
  {
    id: "dish-10",
    name: "蒜蓉粉丝蒸虾",
    emoji: "🦐",
    category: "硬菜",
    time: 25,
    difficulty: 2,
    tags: ["宴客","海鲜","蒸菜"],
    desc: "鲜美多汁，看起来很厉害但其实超简单",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🫕 蒸锅","🥣 大碗"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "8只", category: "肉类" },
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "蒜", emoji: "🧄", amount: "1整头", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "粉丝用温水泡软，剪成段", tip: "温水泡10分钟就行，别用热水会烂" },
      { text: "虾去虾线，从背部剖开", tip: "用牙签从第二节挑出虾线" },
      { text: "蒜切末（要多！），小米辣切圈", tip: "蒜蓉是这道菜的灵魂，不要省" },
      { text: "调汁：生抽+蚝油+少许水拌匀" }
    ],
    cook: [
      { text: "锅中倒油，小火炒香一半蒜末至金黄", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "这就是金蒜，另一半留着生蒜用", timer: 120 },
      { text: "金蒜和生蒜混合，加入小米辣", tip: "两种蒜混合，层次更丰富", timer: 10 },
      { text: "盘中铺上粉丝，摆上虾", tip: "虾背部朝上展开，像蝴蝶一样好看", timer: 60 },
      { text: "在虾上铺满蒜蓉，淋上调味汁", tip: "每个虾都要铺到", timer: 30 },
      { text: "上锅大火蒸8分钟", heat: "🔥🔥🔥 大火", tip: "水开后再放上去蒸", timer: 480 },
      { text: "出锅，淋上热油激发香味", tip: "油烧到冒烟，滋啦一声淋上去！", timer: 30 }
    ],
  },
  {
    id: "dish-11",
    name: "青椒肉丝",
    emoji: "🫑",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["新手友好","下饭","快手"],
    desc: "肉丝嫩滑，青椒脆爽，经典下饭菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "猪里脊", emoji: "🥩", amount: "200g", category: "肉类" },
      { name: "青椒", emoji: "🫑", amount: "3个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "2瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "猪肉切丝，加料酒、生抽、淀粉腌10分钟", tip: "逆着纹路切，肉丝更嫩" },
      { text: "青椒去籽切丝", tip: "怕辣可以把白筋也去掉" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "锅中倒油，放入肉丝滑炒至变色", heat: "🔥🔥🔥 大火", sense: "👀 肉色变白无粉红", tip: "大火快炒，肉丝变白就盛出", timer: 60 },
      { text: "锅中再加少许油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入青椒丝大火翻炒", heat: "🔥🔥🔥 大火", tip: "炒到青椒微微起虎皮", timer: 60 },
      { text: "倒回肉丝，加盐调味翻匀", heat: "🔥🔥 中火", tip: "快速翻炒几下就出锅", timer: 30 }
    ],
  },
  {
    id: "dish-12",
    name: "紫菜蛋花汤",
    emoji: "🍵",
    category: "汤羹",
    time: 10,
    difficulty: 1,
    tags: ["新手友好","快手","汤品"],
    desc: "3分钟搞定的快手汤，鲜美又暖胃",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "紫菜", emoji: "🌿", amount: "1小把", category: "主食" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "虾皮", emoji: "🦐", amount: "1小把", category: "肉类" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" }
    ],
    prep: [
      { text: "紫菜撕成小块，虾皮洗净", tip: "虾皮洗一下去掉多余的盐分" },
      { text: "鸡蛋打散，葱切葱花" }
    ],
    cook: [
      { text: "锅中加水烧开", heat: "🔥🔥🔥 大火", tip: "2-3碗水的量", timer: 120 },
      { text: "放入紫菜和虾皮", tip: "搅散紫菜", timer: 30 },
      { text: "水开后倒入蛋液，不要搅动", tip: "等蛋花自然成形再轻轻推一下", timer: 15 },
      { text: "加盐调味，关火滴香油撒葱花", tip: "完成！", timer: 10 }
    ],
  },
  {
    id: "dish-13",
    name: "鱼香肉丝",
    emoji: "🐟",
    category: "家常菜",
    time: 20,
    difficulty: 2,
    tags: ["经典","下饭","川菜"],
    desc: "没有鱼的鱼香味，酸甜微辣超下饭",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "猪里脊", emoji: "🥩", amount: "200g", category: "肉类" },
      { name: "木耳", emoji: "🍄", amount: "适量", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "1个", category: "蔬菜水果" },
      { name: "泡椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "葱姜蒜", emoji: "🧄", amount: "适量", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "1.5勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "猪肉切丝，加料酒、生抽、淀粉腌制10分钟", tip: "逆纹切丝更嫩" },
      { text: "木耳泡发切丝，胡萝卜和青椒切丝", tip: "所有食材切差不多粗细，炒出来好看" },
      { text: "调鱼香汁：醋2勺+糖1.5勺+生抽1勺+淀粉水拌匀", tip: "鱼香汁的灵魂是酸甜比例" },
      { text: "泡椒切碎，葱姜蒜切末" }
    ],
    cook: [
      { text: "锅中倒油，放入肉丝滑炒至变色盛出", heat: "🔥🔥🔥 大火", sense: "👀 肉色变白无粉红", tip: "大火快炒，变色就盛出", timer: 60 },
      { text: "锅中留底油，炒香泡椒和葱姜蒜末", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火炒出红油", timer: 30 },
      { text: "放入胡萝卜丝和木耳翻炒", heat: "🔥🔥 中火", tip: "胡萝卜先炒，更容易释放营养", timer: 60 },
      { text: "放入青椒丝翻炒", heat: "🔥🔥 中火", tip: "青椒后放保持脆感", timer: 30 },
      { text: "倒回肉丝，淋入鱼香汁", heat: "🔥🔥🔥 大火", tip: "大火快速翻炒均匀", timer: 30 },
      { text: "翻炒至汤汁浓稠，出锅装盘", heat: "🔥🔥 中火", tip: "不要炒太久，保持蔬菜脆嫩", timer: 20 }
    ],
  },
  {
    id: "dish-17",
    name: "地三鲜",
    emoji: "🍆",
    category: "素食",
    time: 20,
    difficulty: 1,
    tags: ["素食","下饭","东北菜"],
    desc: "东北名菜，茄子土豆青椒三兄弟",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "茄子", emoji: "🍆", amount: "2个", category: "蔬菜水果" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "茄子切滚刀块，撒少许盐腌10分钟挤出水分", tip: "这样茄子不吸油" },
      { text: "土豆切块，青椒切块", tip: "大小和茄子差不多" },
      { text: "蒜切末，调汁：生抽+蚝油+糖+淀粉水" }
    ],
    cook: [
      { text: "锅中多放油，先炸土豆至金黄盛出", heat: "🔥🔥 中火", tip: "中火慢炸，土豆熟透才好吃", timer: 180 },
      { text: "再炸茄子至软盛出", heat: "🔥🔥🔥 大火", tip: "茄子用大火快炸", timer: 90 },
      { text: "青椒过油10秒盛出", tip: "青椒保持翠绿", timer: 10 },
      { text: "锅中留底油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入所有食材，淋入调好的汁", heat: "🔥🔥🔥 大火", tip: "大火翻炒", timer: 30 },
      { text: "快速翻匀出锅", tip: "不要炒太久，保持口感", timer: 15 }
    ],
  },
  {
    id: "dish-18",
    name: "水煮肉片",
    emoji: "🌶️",
    category: "硬菜",
    time: 30,
    difficulty: 3,
    tags: ["麻辣","硬菜","川菜"],
    desc: "麻辣鲜香，肉片嫩滑，下饭神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "猪里脊", emoji: "🥩", amount: "300g", category: "肉类" },
      { name: "豆芽", emoji: "🌱", amount: "200g", category: "蔬菜水果" },
      { name: "生菜", emoji: "🥬", amount: "适量", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "15个", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "豆瓣酱", emoji: "🌶️", amount: "2勺", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "蛋清", emoji: "🥚", amount: "1个", category: "蛋奶" }
    ],
    prep: [
      { text: "猪里脊切薄片，加蛋清、淀粉、料酒腌15分钟", tip: "蛋清和淀粉让肉片超嫩滑" },
      { text: "豆芽洗净，生菜撕片" },
      { text: "干辣椒剪段，蒜切末" }
    ],
    cook: [
      { text: "锅中少许油，炒熟豆芽和生菜铺在碗底", tip: "蔬菜打底，吸满汤汁超好吃", timer: 120 },
      { text: "锅中倒油，小火炒香豆瓣酱、姜蒜", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "炒出红油是关键", timer: 60 },
      { text: "加水烧开，放入肉片（一片一片下）", heat: "🔥🔥🔥 大火", sense: "👀 边缘凝固再翻", tip: "不要搅动，等肉片定型", timer: 60 },
      { text: "肉片变色后连汤倒在蔬菜上", sense: "👀 肉色变白无粉红", tip: "汤要没过肉片", timer: 20 },
      { text: "撒上干辣椒段、花椒和蒜末", tip: "铺满表面", timer: 10 },
      { text: "烧热油至冒烟，泼在上面", tip: "滋啦一声，灵魂一步！", timer: 30 }
    ],
  },
  {
    id: "dish-19",
    name: "肉末茄子",
    emoji: "🍆",
    category: "家常菜",
    time: 20,
    difficulty: 1,
    tags: ["下饭","家常","快手"],
    desc: "软糯入味，拌饭一绝",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "茄子", emoji: "🍆", amount: "2个", category: "蔬菜水果" },
      { name: "猪肉末", emoji: "🥩", amount: "100g", category: "肉类" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "茄子切条，撒盐腌10分钟挤水", tip: "腌过的茄子不吸油" },
      { text: "蒜切末，小米辣切圈" },
      { text: "调汁：生抽+蚝油+糖+少许水" }
    ],
    cook: [
      { text: "锅中倒油，放入茄子煎软盛出", heat: "🔥🔥 中火", tip: "中火慢煎", timer: 180 },
      { text: "锅中少许油，炒散肉末", tip: "炒干一点更香", timer: 60 },
      { text: "加蒜末和小米辣炒香", sense: "👃 闻到香味即可", timer: 20 },
      { text: "倒回茄子，淋入调味汁", heat: "🔥🔥 中火", tip: "翻炒均匀", timer: 30 },
      { text: "大火收汁，出锅装盘", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "汤汁浓稠裹在茄子上", timer: 30 }
    ],
  },
  {
    id: "dish-20",
    name: "辣子鸡",
    emoji: "🐔",
    category: "家常菜",
    time: 25,
    difficulty: 2,
    tags: ["麻辣","下饭","川菜"],
    desc: "辣椒里找鸡肉的乐趣，越嚼越香",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "鸡腿肉", emoji: "🍗", amount: "300g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "一大把", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鸡腿肉切小块，加料酒、生抽、淀粉腌15分钟", tip: "切2cm大小，腌制更入味" },
      { text: "干辣椒剪段，蒜切片", tip: "辣椒籽可以去掉减少辣度" }
    ],
    cook: [
      { text: "油温6成热，放入鸡块炸至金黄捞出", heat: "🔥🔥 中火", sense: "👀 筷子入油冒小泡", tip: "中火炸3-4分钟", timer: 240 },
      { text: "油温升高，复炸一次至酥脆", sense: "👀 筷子入油冒小泡", tip: "复炸是外酥的关键", timer: 60 },
      { text: "锅中留底油，小火炒香花椒和干辣椒", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火！辣椒变色即可", timer: 60 },
      { text: "放入蒜姜和鸡块翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒", timer: 30 },
      { text: "撒白芝麻翻匀出锅", tip: "在辣椒堆里找鸡肉的快乐！", timer: 10 }
    ],
  },
  {
    id: "dish-21",
    name: "干煸豆角",
    emoji: "🫘",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["素食","快手","下饭"],
    desc: "干香微辣，越嚼越有味",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "四季豆", emoji: "🫘", amount: "300g", category: "蔬菜水果" },
      { name: "猪肉末", emoji: "🥩", amount: "50g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "少许", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "四季豆摘去两头和筋，掰成段", tip: "掰的比切的更入味" },
      { text: "干辣椒剪段，蒜切末" }
    ],
    cook: [
      { text: "锅中多放油，放入豆角炸至表皮起皱", heat: "🔥🔥🔥 大火", tip: "中大火，豆角表面起虎皮最好", timer: 180 },
      { text: "捞出豆角，锅中留少许油", timer: 10 },
      { text: "炒散肉末至出油", timer: 60 },
      { text: "放入干辣椒、花椒和蒜末炒香", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火炒香", timer: 30 },
      { text: "倒回豆角，加生抽翻炒均匀", heat: "🔥🔥🔥 大火", tip: "大火快炒", timer: 30 },
      { text: "出锅装盘", tip: "干香下饭！", timer: 10 }
    ],
  },
  {
    id: "dish-22",
    name: "酸菜鱼",
    emoji: "🐟",
    category: "硬菜",
    time: 35,
    difficulty: 3,
    tags: ["酸辣","硬菜","川菜"],
    desc: "酸辣开胃，鱼片嫩滑，汤都能喝",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "草鱼/黑鱼", emoji: "🐟", amount: "1条(约500g)", category: "肉类" },
      { name: "酸菜", emoji: "🥬", amount: "1包", category: "主食" },
      { name: "泡椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "4片", category: "其他" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "蛋清", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鱼肉片成薄片，鱼骨剁块", tip: "买鱼时让师傅帮忙片好" },
      { text: "鱼片加蛋清、淀粉、料酒、盐轻轻抓匀", tip: "轻轻的！别把鱼片抓碎了" },
      { text: "酸菜切段，挤去多余水分" },
      { text: "泡椒切碎，姜蒜切片" }
    ],
    cook: [
      { text: "锅中倒油，炒香姜蒜和泡椒", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火炒出香味", timer: 30 },
      { text: "放入酸菜翻炒2分钟", heat: "🔥🔥 中火", sense: "👀 看到汤汁渗出", tip: "炒出酸菜的酸香味", timer: 120 },
      { text: "加入足量水和鱼骨，大火烧开煮10分钟", heat: "🔥🔥🔥 大火", tip: "鱼骨煮出鲜味", timer: 600 },
      { text: "捞出鱼骨和酸菜铺在碗底", timer: 20 },
      { text: "汤中一片一片放入鱼片，煮至变白", heat: "🔥 小火", tip: "不要搅动！轻轻推", timer: 60 },
      { text: "鱼片和汤倒在酸菜上", timer: 10 },
      { text: "撒花椒和干辣椒，泼上热油", tip: "滋啦！完成！", timer: 30 }
    ],
  },
  {
    id: "dish-23",
    name: "韭菜炒鸡蛋",
    emoji: "🥚",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["新手友好","快手","家常"],
    desc: "5分钟快手菜，韭菜鲜香蛋嫩滑",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "韭菜", emoji: "🌿", amount: "1把", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "韭菜洗净切3cm段", tip: "韭菜要最后洗，泡太久会烂" },
      { text: "鸡蛋打散加少许盐" }
    ],
    cook: [
      { text: "锅中多放油，倒入蛋液炒散盛出", tip: "鸡蛋不要炒太老", timer: 30 },
      { text: "锅中少许油，放入韭菜大火翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒！韭菜出水就不好了", timer: 30 },
      { text: "韭菜微微变软时倒回鸡蛋", tip: "韭菜七分熟最好吃", timer: 10 },
      { text: "加盐翻匀，立刻出锅", tip: "速度要快！", timer: 10 }
    ],
  },
  {
    id: "dish-24",
    name: "木须肉",
    emoji: "🍄",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["家常","快手","营养"],
    desc: "荤素搭配，营养均衡的经典家常菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "猪里脊", emoji: "🥩", amount: "150g", category: "肉类" },
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "木耳", emoji: "🍄", amount: "适量", category: "蔬菜水果" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "半根", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "2瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "猪肉切片，加料酒、淀粉腌10分钟" },
      { text: "木耳泡发撕小朵，黄瓜和胡萝卜切片" },
      { text: "鸡蛋打散备用" }
    ],
    cook: [
      { text: "鸡蛋炒散盛出备用", timer: 30 },
      { text: "肉片滑炒至变色盛出", heat: "🔥🔥 中火", sense: "👀 肉色变白无粉红", timer: 40 },
      { text: "蒜末爆香，放入胡萝卜翻炒", heat: "🔥🔥 中火", sense: "👃 闻到香味即可", tip: "胡萝卜先炒释放营养", timer: 30 },
      { text: "放入木耳和黄瓜翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒", timer: 30 },
      { text: "倒回肉片和鸡蛋，加生抽蚝油翻匀", timer: 20 },
      { text: "出锅装盘", tip: "色香味俱全！", timer: 10 }
    ],
  },
  {
    id: "dish-25",
    name: "蒜蓉蒸茄子",
    emoji: "🍆",
    category: "素食",
    time: 20,
    difficulty: 1,
    tags: ["健康","蒸菜","素食"],
    desc: "蒸出来的健康美味，蒜香浓郁",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🫕 蒸锅","🥣 大碗"],
    ingredients: [
      { name: "长茄子", emoji: "🍆", amount: "2根", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "1整头", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "茄子对半切开，在表面划花刀", tip: "划深一点但不要划破皮" },
      { text: "蒜切末，小米辣切圈" },
      { text: "调汁：生抽+蚝油+香油拌匀" }
    ],
    cook: [
      { text: "茄子上锅大火蒸10分钟", heat: "🔥🔥🔥 大火", tip: "水开后再放", timer: 600 },
      { text: "蒸茄子时，小火炒香一半蒜末", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "金蒜+生蒜层次更丰富", timer: 60 },
      { text: "蒸好后倒掉多余水分", tip: "水分倒掉味道更浓", timer: 10 },
      { text: "铺上蒜末和小米辣，淋上调味汁", timer: 20 },
      { text: "淋上热油激发香味", tip: "完成！", timer: 10 }
    ],
  },
  {
    id: "dish-26",
    name: "啤酒鸭",
    emoji: "🦆",
    category: "硬菜",
    time: 50,
    difficulty: 2,
    tags: ["硬菜","宴客","肉食"],
    desc: "啤酒炖出来的鸭肉，去腥又增香",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "鸭肉", emoji: "🦆", amount: "半只(约500g)", category: "肉类" },
      { name: "啤酒", emoji: "🍺", amount: "1罐(330ml)", category: "主食" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "姜", emoji: "🫚", amount: "4片", category: "其他" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "八角", emoji: "⭐", amount: "2个", category: "调味料" },
      { name: "桂皮", emoji: "🪵", amount: "1小块", category: "调味料" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鸭肉剁块，冷水焯水去血沫", tip: "冷水下锅，加料酒去腥" },
      { text: "捞出洗净沥干" },
      { text: "青椒切块，姜蒜切片" }
    ],
    cook: [
      { text: "锅中少许油，放入鸭块煸炒出油", sense: "👀 看到汤汁渗出", tip: "鸭肉本身油多，不用放太多油", timer: 180 },
      { text: "放入姜蒜、八角、桂皮、干辣椒炒香", sense: "👃 闻到香味即可", timer: 30 },
      { text: "加入生抽老抽翻炒上色", heat: "🔥🔥 中火", timer: 20 },
      { text: "倒入啤酒，大火烧开转小火炖30分钟", heat: "🔥🔥🔥 大火", tip: "啤酒要没过鸭肉", timer: 1800 },
      { text: "放入青椒，大火收汁", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", timer: 120 },
      { text: "出锅装盘", tip: "酒香扑鼻！", timer: 10 }
    ],
  },
  {
    id: "dish-27",
    name: "黄焖鸡",
    emoji: "🍗",
    category: "硬菜",
    time: 35,
    difficulty: 2,
    tags: ["下饭","硬菜","经典"],
    desc: "酱香浓郁，鸡肉嫩滑，米饭杀手",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "鸡腿肉", emoji: "🍗", amount: "500g", category: "肉类" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "干香菇", emoji: "🍄", amount: "5朵", category: "主食" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "冰糖", emoji: "🍬", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "鸡腿肉切块，加料酒焯水" },
      { text: "土豆切块，青椒切块" },
      { text: "香菇泡发（留香菇水）", tip: "香菇水是天然高汤" }
    ],
    cook: [
      { text: "锅中少许油，放入冰糖炒至焦糖色", heat: "🔥🔥 中火", tip: "小火炒", timer: 60 },
      { text: "放入鸡块翻炒上色", heat: "🔥🔥 中火", timer: 60 },
      { text: "加入姜蒜炒香", sense: "👃 闻到香味即可", timer: 20 },
      { text: "加入生抽、老抽、蚝油调味", timer: 10 },
      { text: "放入土豆和香菇，倒入香菇水和适量清水", tip: "水量刚好没过食材", timer: 10 },
      { text: "大火烧开转小火焖20分钟", heat: "🔥🔥🔥 大火", timer: 1200 },
      { text: "放入青椒，大火收汁出锅", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "汤汁浓稠最好", timer: 120 }
    ],
  },
  {
    id: "dish-28",
    name: "葱油拌面",
    emoji: "🍜",
    category: "快手菜",
    time: 15,
    difficulty: 1,
    tags: ["新手友好","快手","主食"],
    desc: "简单到极致的美味，葱油香到灵魂",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "200g", category: "主食" },
      { name: "大葱", emoji: "🌿", amount: "3根", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "3勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "多一些", category: "调味料" }
    ],
    prep: [
      { text: "大葱切段（葱白葱绿都要）", tip: "葱要多！这是灵魂" },
      { text: "调汁：生抽+老抽+糖拌匀" }
    ],
    cook: [
      { text: "锅中多放油，放入葱段小火慢炸", heat: "🔥 小火", tip: "小火慢炸！炸到葱变深棕色", timer: 300 },
      { text: "葱炸至焦香后捞出葱油渣", tip: "葱油渣也很好吃，别扔", timer: 10 },
      { text: "趁油热倒入调好的酱汁", sense: "👀 筷子入油冒小泡", tip: "会滋啦冒泡，小心溅油", timer: 10 },
      { text: "面条煮熟捞出", heat: "🔥 小火", tip: "不要煮太软", timer: 180 },
      { text: "淋上葱油酱汁拌匀", tip: "每根面条都要裹上酱汁", timer: 20 },
      { text: "撒上葱油渣，开吃", tip: "简单但惊艳！", timer: 10 }
    ],
  },
  {
    id: "dish-30",
    name: "冬瓜排骨汤",
    emoji: "🍲",
    category: "汤羹",
    time: 50,
    difficulty: 1,
    tags: ["汤品","清淡","养生"],
    desc: "清淡鲜美，夏天喝消暑解腻",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "排骨", emoji: "🍖", amount: "300g", category: "肉类" },
      { name: "冬瓜", emoji: "🍈", amount: "300g", category: "蔬菜水果" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "枸杞", emoji: "🔴", amount: "少许", category: "主食" }
    ],
    prep: [
      { text: "排骨焯水洗净", tip: "冷水下锅" },
      { text: "冬瓜去皮切块", tip: "不要太薄，煮久了会化" },
      { text: "姜切片，葱打结" }
    ],
    cook: [
      { text: "排骨、姜片、葱结放入锅中加足水", tip: "一次加够水，中途别加", timer: 10 },
      { text: "大火烧开撇去浮沫", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "转小火炖30分钟", heat: "🔥 小火", timer: 1800 },
      { text: "放入冬瓜继续炖15分钟", heat: "🔥 小火", timer: 900 },
      { text: "加盐调味，撒枸杞出锅", tip: "清淡鲜美！", timer: 10 }
    ],
  },
  {
    id: "dish-32",
    name: "凉拌木耳",
    emoji: "🍄",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["凉菜","健康","快手"],
    desc: "清脆爽口的凉菜，开胃又健康",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "干木耳", emoji: "🍄", amount: "一把", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "香菜", emoji: "🌿", amount: "适量", category: "蔬菜水果" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "木耳泡发洗净撕小朵", tip: "泡2-3小时，别泡太久会产生毒素" },
      { text: "蒜切末，小米辣切圈，香菜切段" }
    ],
    cook: [
      { text: "木耳焯水2分钟，捞出过凉水", tip: "过凉水保持脆感", timer: 120 },
      { text: "加入蒜末、小米辣、醋、生抽、香油", timer: 10 },
      { text: "拌匀撒香菜，冷藏后更佳", timer: 10 }
    ],
  },
  {
    id: "dish-33",
    name: "醋溜白菜",
    emoji: "🥬",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["素食","快手","酸爽"],
    desc: "酸爽脆嫩，下饭快手素菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "大白菜", emoji: "🥬", amount: "半颗", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "少许", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "白菜帮和白菜叶分开，斜刀切片", tip: "帮和叶分开炒，口感不同" },
      { text: "蒜切片，干辣椒剪段" }
    ],
    cook: [
      { text: "锅中倒油，花椒和干辣椒爆香", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火炒香后捞出花椒", timer: 20 },
      { text: "蒜片爆香", sense: "👃 闻到香味即可", timer: 10 },
      { text: "先放白菜帮大火翻炒1分钟", heat: "🔥🔥🔥 大火", tip: "帮先炒，叶子后放", timer: 60 },
      { text: "放入白菜叶继续翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒", timer: 30 },
      { text: "沿锅边淋醋，加生抽和糖翻匀出锅", tip: "醋遇锅边激出酸香", timer: 15 }
    ],
  },
  {
    id: "dish-34",
    name: "蚝油生菜",
    emoji: "🥬",
    category: "素食",
    time: 8,
    difficulty: 1,
    tags: ["减脂","快手","健康"],
    desc: "清淡鲜美，减脂期的好朋友",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅"],
    ingredients: [
      { name: "生菜", emoji: "🥬", amount: "1颗", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "蚝油", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "生菜洗净，蒜切末" },
      { text: "调汁：蚝油+生抽+淀粉水" }
    ],
    cook: [
      { text: "烧开水，加几滴油和盐", heat: "🔥🔥🔥 大火", tip: "油和盐让菜更绿", timer: 60 },
      { text: "生菜焯水10秒捞出摆盘", tip: "不要焯太久！", timer: 10 },
      { text: "锅中少许油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入调味汁煮至浓稠", heat: "🔥 小火", timer: 20 },
      { text: "淋在生菜上，完成", timer: 10 }
    ],
  },
  {
    id: "dish-35",
    name: "孜然羊肉",
    emoji: "🐑",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["烧烤味","硬菜","肉食"],
    desc: "烧烤风味在家做，孜然飘香",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "羊肉卷/羊肉片", emoji: "🐑", amount: "300g", category: "肉类" },
      { name: "洋葱", emoji: "🧅", amount: "半个", category: "蔬菜水果" },
      { name: "孜然粉", emoji: "🌿", amount: "2勺", category: "调味料" },
      { name: "辣椒粉", emoji: "🌶️", amount: "1勺", category: "蔬菜水果" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "羊肉加料酒、生抽腌10分钟" },
      { text: "洋葱切丝" }
    ],
    cook: [
      { text: "锅中大火烧热，不放油直接炒羊肉", heat: "🔥🔥🔥 大火", tip: "大火逼出水分", timer: 120 },
      { text: "羊肉炒至变色，推到一边", heat: "🔥🔥 中火", sense: "👀 肉色变白无粉红", timer: 30 },
      { text: "放入洋葱丝翻炒", heat: "🔥🔥 中火", timer: 30 },
      { text: "加入孜然粉和辣椒粉翻炒", heat: "🔥🔥 中火", tip: "孜然多放才香！", timer: 20 },
      { text: "撒白芝麻和盐翻匀出锅", tip: "烧烤味扑鼻！", timer: 10 }
    ],
  },
  {
    id: "dish-36",
    name: "咖喱鸡",
    emoji: "🍛",
    category: "家常菜",
    time: 30,
    difficulty: 1,
    tags: ["咖喱","新手友好","一锅出"],
    desc: "浓郁咖喱香，一锅搞定全家饭",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "鸡腿肉", emoji: "🍗", amount: "400g", category: "肉类" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "洋葱", emoji: "🧅", amount: "半个", category: "蔬菜水果" },
      { name: "咖喱块", emoji: "🍛", amount: "3-4块", category: "调味料" },
      { name: "椰浆/牛奶", emoji: "🥛", amount: "100ml", category: "蛋奶" },
      { name: "姜", emoji: "🫚", amount: "2片", category: "其他" }
    ],
    prep: [
      { text: "鸡肉切块焯水" },
      { text: "土豆胡萝卜切块，洋葱切丁" }
    ],
    cook: [
      { text: "锅中少许油，炒香洋葱丁", sense: "👃 闻到香味即可", tip: "炒到透明", timer: 120 },
      { text: "放入鸡肉翻炒", heat: "🔥🔥 中火", timer: 60 },
      { text: "加入土豆胡萝卜翻炒", heat: "🔥🔥 中火", timer: 60 },
      { text: "加水没过食材，大火烧开转小火炖15分钟", heat: "🔥🔥🔥 大火", timer: 900 },
      { text: "关火，放入咖喱块搅至融化", tip: "关火再放咖喱块，不会结块", timer: 60 },
      { text: "开小火加入椰浆，煮至浓稠", heat: "🔥 小火", tip: "不停搅拌防糊底", timer: 180 },
      { text: "配米饭开吃", tip: "咖喱拌饭，灵魂美味！", timer: 10 }
    ],
  },
  {
    id: "dish-37",
    name: "番茄牛腩",
    emoji: "🍅",
    category: "硬菜",
    time: 70,
    difficulty: 2,
    tags: ["炖菜","硬菜","暖身"],
    desc: "酸甜浓郁，牛肉软烂，冬天暖身必备",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "牛腩", emoji: "🥩", amount: "500g", category: "肉类" },
      { name: "番茄", emoji: "🍅", amount: "3个", category: "蔬菜水果" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "姜", emoji: "🫚", amount: "4片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "八角", emoji: "⭐", amount: "1个", category: "调味料" },
      { name: "番茄酱", emoji: "🍅", amount: "2勺", category: "蔬菜水果" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "2勺", category: "调味料" }
    ],
    prep: [
      { text: "牛腩切块，冷水焯水加料酒" },
      { text: "番茄去皮切块，土豆切块", tip: "番茄划十字开水烫去皮" },
      { text: "姜切片，葱切段" }
    ],
    cook: [
      { text: "锅中少许油，炒香姜葱八角", sense: "👃 闻到香味即可", timer: 30 },
      { text: "放入牛腩翻炒至表面变色", heat: "🔥🔥 中火", sense: "👀 肉色变白无粉红", timer: 120 },
      { text: "加入番茄块翻炒出汁", heat: "🔥🔥 中火", sense: "👀 看到汤汁渗出", tip: "多炒一会让番茄出汁", timer: 180 },
      { text: "加入番茄酱和开水，大火烧开", heat: "🔥🔥🔥 大火", tip: "开水！", timer: 30 },
      { text: "转小火炖50分钟", heat: "🔥 小火", tip: "耐心等待", timer: 3000 },
      { text: "放入土豆块继续炖15分钟", heat: "🔥 小火", timer: 900 },
      { text: "加盐调味出锅", tip: "汤浓肉烂，完美！", timer: 10 }
    ],
  },
  {
    id: "dish-38",
    name: "虎皮青椒",
    emoji: "🫑",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["素食","快手","下饭"],
    desc: "焦香微辣，下饭神器中的神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "青椒", emoji: "🫑", amount: "6个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" },
      { name: "豆豉", emoji: "🫘", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "青椒去蒂去籽，用刀拍一下", tip: "拍一下更容易入味" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "不放油，青椒下锅干煸至表皮起泡", heat: "🔥🔥 中火", tip: "用锅铲按压，让每面都煎到", timer: 180 },
      { text: "青椒起虎皮后推到一边，加少许油和蒜末", timer: 20 },
      { text: "加入豆豉炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "淋入醋、生抽和糖翻匀", tip: "醋沿锅边淋", timer: 20 },
      { text: "翻匀出锅", tip: "虎皮斑斑，香气扑鼻！", timer: 10 }
    ],
  },
  {
    id: "dish-39",
    name: "酸辣汤",
    emoji: "🥣",
    category: "汤羹",
    time: 15,
    difficulty: 1,
    tags: ["汤品","酸辣","开胃"],
    desc: "酸辣开胃，冬天喝一碗浑身暖",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "木耳", emoji: "🍄", amount: "适量", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "火腿", emoji: "🌭", amount: "适量", category: "肉类" },
      { name: "香菜", emoji: "🌿", amount: "适量", category: "蔬菜水果" },
      { name: "醋", emoji: "🍶", amount: "3勺", category: "调味料" },
      { name: "白胡椒粉", emoji: "🌶️", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "豆腐、木耳、火腿全部切丝", tip: "切细丝口感好" },
      { text: "鸡蛋打散，淀粉加水调匀" }
    ],
    cook: [
      { text: "锅中加水烧开，放入所有丝状食材", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "加入生抽、醋、白胡椒粉", tip: "醋和胡椒粉是灵魂", timer: 10 },
      { text: "淋入水淀粉勾芡", tip: "边倒边搅", timer: 20 },
      { text: "倒入蛋液形成蛋花", tip: "不要搅", timer: 15 },
      { text: "关火撒香菜，完成", tip: "酸辣暖胃！", timer: 10 }
    ],
  },
  {
    id: "dish-40",
    name: "红烧茄子",
    emoji: "🍆",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["家常","下饭","素食"],
    desc: "软糯入味，酱香浓郁的下饭神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "茄子", emoji: "🍆", amount: "2个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "番茄酱", emoji: "🍅", amount: "1勺", category: "蔬菜水果" }
    ],
    prep: [
      { text: "茄子切滚刀块，裹薄薄一层淀粉", tip: "裹淀粉炸出来外酥里嫩" },
      { text: "蒜切末，调汁：生抽+蚝油+糖+番茄酱+淀粉水" }
    ],
    cook: [
      { text: "茄子入油锅炸至金黄捞出", heat: "🔥🔥 中火", tip: "中火炸", timer: 180 },
      { text: "锅中少许油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入调味汁煮至浓稠", heat: "🔥 小火", timer: 20 },
      { text: "放入茄子快速翻裹均匀", tip: "速度要快", timer: 15 },
      { text: "出锅装盘", tip: "酱香四溢！", timer: 10 }
    ],
  },
  {
    id: "dish-41",
    name: "蒜蓉菜心",
    emoji: "🥬",
    category: "素食",
    time: 8,
    difficulty: 1,
    tags: ["清淡","快手","粤菜"],
    desc: "清甜脆嫩的广东经典",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅"],
    ingredients: [
      { name: "菜心", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "菜心洗净，老的部分去皮", tip: "根部老皮削掉更嫩" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "烧开水加盐和油", heat: "🔥🔥🔥 大火", timer: 60 },
      { text: "菜心焯水1分钟捞出摆盘", tip: "不要焯太久", timer: 60 },
      { text: "锅中少许油，蒜末爆香加蚝油", sense: "👃 闻到香味即可", timer: 20 },
      { text: "淋在菜心上", tip: "简单又好吃！", timer: 10 }
    ],
  },
  {
    id: "dish-42",
    name: "炒年糕",
    emoji: "🍡",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["快手","主食","韩式"],
    desc: "软糯Q弹，韩式风味在家做",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "年糕片", emoji: "🍡", amount: "300g", category: "主食" },
      { name: "韩式辣酱", emoji: "🌶️", amount: "2勺", category: "调味料" },
      { name: "圆白菜", emoji: "🥬", amount: "适量", category: "蔬菜水果" },
      { name: "鱼饼/火腿", emoji: "🐟", amount: "适量", category: "肉类" },
      { name: "蒜", emoji: "🧄", amount: "2瓣", category: "其他" },
      { name: "糖", emoji: "🍬", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "年糕用温水泡软", tip: "泡10分钟" },
      { text: "圆白菜切块，鱼饼切片" }
    ],
    cook: [
      { text: "锅中少许油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入圆白菜和鱼饼翻炒", heat: "🔥🔥 中火", timer: 60 },
      { text: "加入年糕、韩式辣酱、糖和少许水", tip: "水不要太多", timer: 10 },
      { text: "中火翻炒至年糕软糯、酱汁浓稠", heat: "🔥🔥 中火", tip: "不停翻动防粘锅", timer: 180 },
      { text: "出锅装盘", tip: "Q弹入味！", timer: 10 }
    ],
  },
  {
    id: "dish-43",
    name: "鸡蛋饼",
    emoji: "🥞",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["早餐","新手友好","快手"],
    desc: "早餐首选，5分钟搞定的快手美味",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "面粉", emoji: "🌾", amount: "3勺", category: "调味料" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "鸡蛋打散，加入面粉和少许水搅成糊", tip: "糊不要太稠，能流动的程度" },
      { text: "加入葱花和盐拌匀" }
    ],
    cook: [
      { text: "平底锅刷油，倒入面糊摊平", heat: "🔥 小火", tip: "小火！转动锅让面糊均匀", timer: 30 },
      { text: "底面凝固后翻面", sense: "👀 边缘凝固再翻", tip: "等边缘翘起再翻", timer: 60 },
      { text: "两面金黄出锅", tip: "可以卷菜吃！", timer: 30 }
    ],
  },
  {
    id: "dish-44",
    name: "洋葱炒蛋",
    emoji: "🧅",
    category: "快手菜",
    time: 8,
    difficulty: 1,
    tags: ["新手友好","快手","家常"],
    desc: "洋葱的甜配上鸡蛋的香，简单又好吃",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "洋葱", emoji: "🧅", amount: "1个", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "洋葱切丝", tip: "切之前把洋葱放冰箱冷藏，不辣眼睛" },
      { text: "鸡蛋打散" }
    ],
    cook: [
      { text: "鸡蛋炒散盛出", timer: 30 },
      { text: "锅中少许油，放入洋葱翻炒至软", heat: "🔥🔥 中火", tip: "炒到透明最甜", timer: 120 },
      { text: "倒回鸡蛋，加盐和少许生抽翻匀", timer: 20 },
      { text: "出锅装盘", timer: 10 }
    ],
  },
  {
    id: "dish-45",
    name: "虾仁滑蛋",
    emoji: "🦐",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["快手","海鲜","高蛋白"],
    desc: "虾仁Q弹蛋嫩滑，高级感家常菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "虾仁", emoji: "🦐", amount: "150g", category: "肉类" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "少许", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "虾仁去虾线，加料酒和淀粉腌5分钟" },
      { text: "鸡蛋打散加少许盐" }
    ],
    cook: [
      { text: "虾仁大火快炒至变色盛出", heat: "🔥🔥🔥 大火", sense: "👀 肉色变白无粉红", tip: "不要炒老", timer: 30 },
      { text: "蛋液中混入虾仁", timer: 10 },
      { text: "锅中油热，倒入蛋液虾仁，中小火推炒", heat: "🔥 小火", sense: "👀 筷子入油冒小泡", tip: "用筷子划散，蛋液半凝固就出锅", timer: 40 },
      { text: "撒葱花出锅", tip: "嫩滑是关键！", timer: 10 }
    ],
  },
  {
    id: "dish-46",
    name: "蒜苗回锅肉",
    emoji: "🥓",
    category: "家常菜",
    time: 25,
    difficulty: 2,
    tags: ["经典","下饭","川菜"],
    desc: "蒜苗和回锅肉的绝配，下饭无敌",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "250g", category: "肉类" },
      { name: "蒜苗", emoji: "🌿", amount: "4根", category: "其他" },
      { name: "豆瓣酱", emoji: "🌶️", amount: "1勺", category: "调味料" },
      { name: "豆豉", emoji: "🫘", amount: "少许", category: "调味料" },
      { name: "甜面酱", emoji: "🫗", amount: "半勺", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "2片", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "五花肉整块煮20分钟，捞出切薄片", tip: "煮到筷子能插透" },
      { text: "蒜苗斜切段" }
    ],
    cook: [
      { text: "不放油，肉片下锅小火煸出油", heat: "🔥 小火", tip: "煸到肉片打卷", timer: 180 },
      { text: "推到一边，下豆瓣酱和豆豉炒红油", heat: "🔥 小火", tip: "小火炒", timer: 30 },
      { text: "加甜面酱翻炒均匀", heat: "🔥🔥 中火", timer: 15 },
      { text: "放入蒜苗段大火翻炒", heat: "🔥🔥🔥 大火", tip: "蒜苗断生即可", timer: 60 },
      { text: "出锅装盘", tip: "蒜苗翠绿，肉片焦香！", timer: 10 }
    ],
  },
  {
    id: "dish-47",
    name: "凉拌三丝",
    emoji: "🥗",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["凉菜","开胃","快手"],
    desc: "清脆爽口，夏天开胃凉菜",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "辣椒油", emoji: "🌶️", amount: "适量", category: "蔬菜水果" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "粉丝泡软，黄瓜和胡萝卜切丝" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "粉丝焯水1分钟捞出过凉", timer: 60 },
      { text: "三丝放入碗中，加蒜末和所有调料", timer: 10 },
      { text: "拌匀即可，冷藏更佳", timer: 10 }
    ],
  },
  {
    id: "dish-49",
    name: "麻辣香锅",
    emoji: "🌶️",
    category: "硬菜",
    time: 25,
    difficulty: 2,
    tags: ["麻辣","硬菜","自由搭配"],
    desc: "想吃什么放什么，自由度最高的硬菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "虾", emoji: "🦐", amount: "10只", category: "肉类" },
      { name: "午餐肉", emoji: "🥩", amount: "1盒", category: "肉类" },
      { name: "藕片", emoji: "🥔", amount: "适量", category: "其他" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "西兰花", emoji: "🥦", amount: "适量", category: "蔬菜水果" },
      { name: "豆皮", emoji: "🫘", amount: "适量", category: "蛋奶" },
      { name: "麻辣香锅底料", emoji: "🌶️", amount: "2勺", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" }
    ],
    prep: [
      { text: "所有食材洗净切好", tip: "想吃什么放什么" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "烧开水，把所有食材焯水至八分熟", heat: "🔥🔥🔥 大火", tip: "先放难熟的，后放易熟的", timer: 300 },
      { text: "捞出沥干水分", sense: "👀 看到汤汁渗出", tip: "沥干！不然炒出来水水的", timer: 20 },
      { text: "锅中倒油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入麻辣香锅底料炒出红油", sense: "👀 看到汤汁渗出", timer: 30 },
      { text: "倒入所有食材大火翻炒", heat: "🔥🔥🔥 大火", tip: "大火！让每样食材都裹上酱料", timer: 120 },
      { text: "撒白芝麻出锅", tip: "一锅端，超过瘾！", timer: 10 }
    ],
  },
  {
    id: "dish-50",
    name: "皮蛋瘦肉粥",
    emoji: "🥣",
    category: "汤羹",
    time: 40,
    difficulty: 1,
    tags: ["早餐","粥品","养胃"],
    desc: "经典广式粥品，绵密鲜美",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "大米", emoji: "🍚", amount: "1杯", category: "主食" },
      { name: "皮蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "瘦肉", emoji: "🥩", amount: "100g", category: "肉类" },
      { name: "姜", emoji: "🫚", amount: "2片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "白胡椒粉", emoji: "🌶️", amount: "少许", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" }
    ],
    prep: [
      { text: "大米洗净，加几滴油和盐腌15分钟", tip: "腌过的大米更容易煮烂" },
      { text: "皮蛋切小块，瘦肉切丝加料酒腌制" },
      { text: "姜切丝，葱切葱花" }
    ],
    cook: [
      { text: "大米加足水，大火烧开", heat: "🔥🔥🔥 大火", tip: "水米比10:1", timer: 120 },
      { text: "转小火熬煮30分钟，不时搅拌", heat: "🔥 小火", tip: "搅拌让粥更绵密", timer: 1800 },
      { text: "放入皮蛋和姜丝继续煮5分钟", heat: "🔥 小火", timer: 300 },
      { text: "放入肉丝搅散", tip: "肉丝很快熟", timer: 60 },
      { text: "加盐和白胡椒粉调味", timer: 10 },
      { text: "撒葱花滴香油出锅", tip: "绵密鲜美！", timer: 10 }
    ],
  },
  {
    id: "dish-52",
    name: "清蒸鲈鱼",
    emoji: "🐟",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["宴客","清淡","蒸菜"],
    desc: "鲜嫩无比，宴客必备硬菜",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🫕 蒸锅","🥣 大碗"],
    ingredients: [
      { name: "鲈鱼", emoji: "🐟", amount: "1条(约500g)", category: "肉类" },
      { name: "葱", emoji: "🌿", amount: "3根", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "1块", category: "其他" },
      { name: "蒸鱼豉油", emoji: "🫗", amount: "3勺", category: "肉类" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "红椒丝", emoji: "🌶️", amount: "少许", category: "其他" }
    ],
    prep: [
      { text: "鱼去鳞去内脏，两面划花刀", tip: "划深一点方便入味" },
      { text: "鱼身抹料酒和盐，腌10分钟", tip: "去腥关键" },
      { text: "葱切丝，姜切丝", tip: "切细丝好看" }
    ],
    cook: [
      { text: "盘底铺葱姜，鱼放上面，肚里塞葱姜", tip: "架空让蒸汽流通", timer: 30 },
      { text: "水开后上锅大火蒸8分钟", heat: "🔥🔥🔥 大火", tip: "不要蒸太久！", timer: 480 },
      { text: "蒸好倒掉盘中汤水", tip: "汤水有腥味要倒掉", timer: 10 },
      { text: "铺上葱丝红椒丝，淋蒸鱼豉油", timer: 10 },
      { text: "烧热油泼在上面", tip: "滋啦！鲜美！", timer: 20 }
    ],
  },
  {
    id: "dish-54",
    name: "手撕鸡",
    emoji: "🍗",
    category: "硬菜",
    time: 40,
    difficulty: 1,
    tags: ["凉菜","宴客","肉食"],
    desc: "皮滑肉嫩，凉拌手撕超入味",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "鸡腿/鸡胸", emoji: "🍗", amount: "400g", category: "肉类" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "3个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "醋", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" }
    ],
    prep: [
      { text: "鸡肉冷水下锅，加姜片料酒煮20分钟", tip: "筷子能插透就熟了" },
      { text: "捞出放冰水中浸泡", tip: "冰水让鸡皮Q弹" },
      { text: "黄瓜切丝，蒜切末，小米辣切圈" }
    ],
    cook: [
      { text: "鸡肉撕成条", tip: "顺着纹路撕", timer: 120 },
      { text: "调汁：蒜末+小米辣+生抽+醋+香油", timer: 10 },
      { text: "鸡丝和黄瓜丝拌匀", timer: 20 },
      { text: "淋入调味汁拌匀", timer: 10 },
      { text: "撒白芝麻，完成", tip: "清爽开胃！", timer: 10 }
    ],
  },
  {
    id: "dish-56",
    name: "红烧豆腐",
    emoji: "🫘",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["家常","下饭","素食"],
    desc: "外焦里嫩，酱香浓郁的下饭神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "老豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "豆腐切厚片，厨房纸吸干水分", tip: "吸干水分煎出来更脆" },
      { text: "蒜切末，葱切花" },
      { text: "调汁：生抽+蚝油+糖+淀粉水" }
    ],
    cook: [
      { text: "锅中多放油，豆腐煎至两面金黄", heat: "🔥🔥 中火", tip: "中火煎，不要频繁翻", timer: 180 },
      { text: "蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入调味汁，轻轻翻动豆腐", tip: "轻推，别弄碎", timer: 30 },
      { text: "收汁撒葱花出锅", heat: "🔥 小火", sense: "👀 汤汁浓稠挂食材", tip: "外焦里嫩！", timer: 15 }
    ],
  },
  {
    id: "dish-57",
    name: "辣白菜炒五花肉",
    emoji: "🥬",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["韩式","下饭","快手"],
    desc: "酸辣开胃，韩剧同款下饭菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "200g", category: "肉类" },
      { name: "辣白菜", emoji: "🥬", amount: "200g", category: "蔬菜水果" },
      { name: "洋葱", emoji: "🧅", amount: "半个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "糖", emoji: "🍬", amount: "少许", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "五花肉切薄片，辣白菜切段" },
      { text: "洋葱切丝，蒜切末" }
    ],
    cook: [
      { text: "五花肉下锅煸炒出油", sense: "👀 看到汤汁渗出", tip: "不放油直接煸", timer: 120 },
      { text: "放入洋葱和蒜末炒香", sense: "👃 闻到香味即可", timer: 30 },
      { text: "加入辣白菜翻炒", heat: "🔥🔥 中火", tip: "辣白菜的汤汁也倒进去", timer: 60 },
      { text: "加糖和生抽调味", timer: 10 },
      { text: "翻匀出锅", tip: "配米饭绝了！", timer: 10 }
    ],
  },
  {
    id: "dish-58",
    name: "蒜蓉蒸扇贝",
    emoji: "🐚",
    category: "硬菜",
    time: 15,
    difficulty: 2,
    tags: ["宴客","海鲜","蒸菜"],
    desc: "鲜到掉眉毛，宴客倍有面子",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🫕 蒸锅"],
    ingredients: [
      { name: "扇贝", emoji: "🐚", amount: "6个", category: "肉类" },
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "蒜", emoji: "🧄", amount: "1整头", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "蒸鱼豉油", emoji: "🫗", amount: "2勺", category: "肉类" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "扇贝刷洗干净，去内脏", tip: "黑色部分去掉" },
      { text: "粉丝泡软铺在扇贝上" },
      { text: "蒜切末，小米辣切圈" }
    ],
    cook: [
      { text: "小火炒香一半蒜末至金黄", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "金蒜+生蒜更香", timer: 120 },
      { text: "两种蒜混合，铺在扇贝上", timer: 30 },
      { text: "上锅大火蒸6分钟", heat: "🔥🔥🔥 大火", tip: "水开后再蒸", timer: 360 },
      { text: "淋蒸鱼豉油，泼热油", tip: "滋啦！鲜美！", timer: 20 }
    ],
  },
  {
    id: "dish-59",
    name: "麻酱拌面",
    emoji: "🍜",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["快手","主食","北方味"],
    desc: "浓郁芝麻酱香，北方经典面食",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "200g", category: "主食" },
      { name: "芝麻酱", emoji: "🥜", amount: "2勺", category: "调味料" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "醋", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "辣椒油", emoji: "🌶️", amount: "适量", category: "蔬菜水果" }
    ],
    prep: [
      { text: "芝麻酱用温水慢慢澥开", tip: "一点一点加水，边加边搅" },
      { text: "黄瓜切丝，蒜切末" }
    ],
    cook: [
      { text: "面条煮熟过凉水", heat: "🔥 小火", tip: "过凉水更筋道", timer: 180 },
      { text: "调汁：芝麻酱+生抽+醋+蒜末", timer: 10 },
      { text: "面条浇上麻酱汁", timer: 10 },
      { text: "铺黄瓜丝，淋辣椒油拌匀", tip: "浓香四溢！", timer: 10 }
    ],
  },
  {
    id: "dish-60",
    name: "酱爆鸡丁",
    emoji: "🐔",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["下饭","快手","经典"],
    desc: "酱香浓郁，比宫保鸡丁更下饭",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "鸡胸肉", emoji: "🐔", amount: "250g", category: "肉类" },
      { name: "黄瓜", emoji: "🥒", amount: "1根", category: "蔬菜水果" },
      { name: "甜面酱", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鸡胸肉切丁，加料酒淀粉腌10分钟" },
      { text: "黄瓜切丁，蒜切末" },
      { text: "甜面酱+糖+少许水调匀" }
    ],
    cook: [
      { text: "锅中倒油，鸡丁滑炒至变色盛出", heat: "🔥🔥🔥 大火", sense: "👀 肉色变白无粉红", tip: "大火快炒", timer: 60 },
      { text: "锅中少许油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入甜面酱炒出香味", heat: "🔥 小火", sense: "👀 看到汤汁渗出", tip: "小火炒", timer: 30 },
      { text: "倒回鸡丁和黄瓜丁翻炒", heat: "🔥🔥🔥 大火", tip: "大火翻匀", timer: 30 },
      { text: "酱汁裹匀出锅", tip: "酱香扑鼻！", timer: 10 }
    ],
  },
  {
    id: "dish-61",
    name: "凉拌三丝",
    emoji: "🥗",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["凉菜","快手","开胃"],
    desc: "清爽解腻，餐桌上的小清新",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "黄瓜", emoji: "黄瓜", amount: "1根", category: "蔬菜水果" },
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" },
      { name: "辣椒油", emoji: "🌶️", amount: "适量", category: "蔬菜水果" }
    ],
    prep: [
      { text: "胡萝卜和黄瓜切细丝", tip: "越细越好" },
      { text: "粉丝泡软焯水" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "三丝放入碗中", timer: 10 },
      { text: "加入蒜末、醋、生抽、香油、辣椒油", timer: 10 },
      { text: "拌匀即可", tip: "清爽开胃！", timer: 10 }
    ],
  },
  {
    id: "dish-63",
    name: "香辣虾",
    emoji: "🦐",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["宴客","海鲜","麻辣"],
    desc: "壳脆肉嫩，连壳都想嚼掉",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "500g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "10个", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" }
    ],
    prep: [
      { text: "虾去虾线，剪去虾须", tip: "从背部第二节挑出虾线" },
      { text: "干辣椒剪段，蒜切片" }
    ],
    cook: [
      { text: "锅中多放油，虾炸至变红捞出", heat: "🔥🔥🔥 大火", tip: "大火快炸", timer: 60 },
      { text: "锅中留底油，小火炒香花椒和干辣椒", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火！", timer: 30 },
      { text: "放入蒜姜爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒回虾，加料酒和生抽翻炒", heat: "🔥🔥🔥 大火", tip: "大火", timer: 30 },
      { text: "撒白芝麻翻匀出锅", tip: "香到不行！", timer: 10 }
    ],
  },
  {
    id: "dish-64",
    name: "蛋包饭",
    emoji: "🍳",
    category: "快手菜",
    time: 15,
    difficulty: 2,
    tags: ["主食","早餐","颜值"],
    desc: "金黄蛋皮包裹炒饭，仪式感满满",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "米饭", emoji: "🍚", amount: "1碗", category: "主食" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "火腿丁", emoji: "🌭", amount: "适量", category: "肉类" },
      { name: "玉米粒", emoji: "🌽", amount: "适量", category: "蔬菜水果" },
      { name: "番茄酱", emoji: "🍅", amount: "适量", category: "蔬菜水果" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "先炒一份蛋炒饭备用", tip: "参考蛋炒饭菜谱" },
      { text: "鸡蛋加少许盐和淀粉水打散", tip: "淀粉水让蛋皮更完整" }
    ],
    cook: [
      { text: "平底锅刷油，倒入蛋液摊成薄蛋皮", heat: "🔥 小火", tip: "小火！不要翻动", timer: 60 },
      { text: "蛋皮半凝固时，中间放上炒饭", sense: "👀 边缘凝固再翻", timer: 10 },
      { text: "两边蛋皮折叠包住炒饭", tip: "用铲子辅助", timer: 30 },
      { text: "倒扣在盘中，挤上番茄酱", tip: "切开蛋皮会流出蛋液！", timer: 10 }
    ],
  },
  {
    id: "dish-65",
    name: "蒜苗回锅肉",
    emoji: "🥓",
    category: "家常菜",
    time: 25,
    difficulty: 2,
    tags: ["川菜","下饭","经典"],
    desc: "蒜苗和五花肉的黄金组合",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "300g", category: "肉类" },
      { name: "蒜苗", emoji: "🌿", amount: "5根", category: "其他" },
      { name: "豆瓣酱", emoji: "🌶️", amount: "1勺", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "甜面酱", emoji: "🫗", amount: "半勺", category: "调味料" }
    ],
    prep: [
      { text: "五花肉整块煮20分钟，捞出切薄片", tip: "放凉更好切" },
      { text: "蒜苗斜切段" }
    ],
    cook: [
      { text: "五花肉片下锅煸炒出油", sense: "👀 看到汤汁渗出", tip: "不放油", timer: 180 },
      { text: "肉片微卷后推到一边，下豆瓣酱炒红油", timer: 30 },
      { text: "加甜面酱翻炒均匀", heat: "🔥🔥 中火", timer: 15 },
      { text: "放入蒜苗翻炒", heat: "🔥🔥 中火", timer: 60 },
      { text: "翻匀出锅", tip: "香！", timer: 10 }
    ],
  },
  {
    id: "dish-67",
    name: "干煸肥肠",
    emoji: "🐷",
    category: "硬菜",
    time: 40,
    difficulty: 3,
    tags: ["硬菜","下饭","川菜"],
    desc: "外焦里糯，肥肠爱好者的天堂",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "卤肥肠", emoji: "🐷", amount: "300g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "15个", category: "蔬菜水果" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "蒜", emoji: "🧄", amount: "5瓣", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "卤肥肠切段", tip: "买现成卤好的省时间" },
      { text: "干辣椒剪段，蒜切片" }
    ],
    cook: [
      { text: "肥肠下锅煸炒至表面焦脆", heat: "🔥🔥 中火", tip: "中小火慢煸", timer: 300 },
      { text: "推到一边，下干辣椒花椒炒香", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "小火", timer: 30 },
      { text: "放入蒜姜翻炒", heat: "🔥🔥 中火", timer: 15 },
      { text: "加生抽调味，撒白芝麻", timer: 10 },
      { text: "翻匀出锅", tip: "焦香诱人！", timer: 10 }
    ],
  },
  {
    id: "dish-68",
    name: "番茄鸡蛋面",
    emoji: "🍝",
    category: "快手菜",
    time: 15,
    difficulty: 1,
    tags: ["主食","新手友好","暖胃"],
    desc: "一碗面的最高境界，汤都能喝光",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "200g", category: "主食" },
      { name: "番茄", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "番茄酱", emoji: "🍅", amount: "1勺", category: "蔬菜水果" }
    ],
    prep: [
      { text: "番茄去皮切块", tip: "划十字烫一下去皮" },
      { text: "鸡蛋打散" }
    ],
    cook: [
      { text: "鸡蛋炒散盛出", timer: 30 },
      { text: "锅中少许油，炒番茄出汁", sense: "👀 看到汤汁渗出", tip: "多炒一会", timer: 120 },
      { text: "加水和番茄酱烧开", heat: "🔥🔥🔥 大火", timer: 60 },
      { text: "下面条煮熟", heat: "🔥 小火", timer: 180 },
      { text: "倒回鸡蛋，加盐调味", timer: 10 },
      { text: "撒葱花出锅", tip: "汤鲜面滑！", timer: 10 }
    ],
  },
  {
    id: "dish-69",
    name: "盐焗虾",
    emoji: "🦐",
    category: "硬菜",
    time: 15,
    difficulty: 1,
    tags: ["海鲜","快手","宴客"],
    desc: "原汁原味，最简单最鲜美",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "500g", category: "肉类" },
      { name: "粗盐", emoji: "🧂", amount: "大量", category: "调味料" },
      { name: "花椒", emoji: "🫚", amount: "1把", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "虾洗净去虾线" },
      { text: "虾加料酒和姜片腌10分钟" }
    ],
    cook: [
      { text: "粗盐和花椒放入锅中小火炒热", heat: "🔥 小火", tip: "炒到盐发烫", timer: 180 },
      { text: "取出一半盐，铺上虾", timer: 20 },
      { text: "盖上另一半盐，小火焗8分钟", heat: "🔥 小火", timer: 480 },
      { text: "取出虾，抖掉盐粒", tip: "鲜到极致！", timer: 10 }
    ],
  },
  {
    id: "dish-70",
    name: "豆角焖面",
    emoji: "🍜",
    category: "家常菜",
    time: 25,
    difficulty: 2,
    tags: ["主食","北方味","一锅出"],
    desc: "面条吸满汤汁，北方灵魂主食",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "250g", category: "主食" },
      { name: "豆角", emoji: "🫘", amount: "300g", category: "蔬菜水果" },
      { name: "五花肉", emoji: "🥓", amount: "150g", category: "肉类" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "豆角掰段，五花肉切片" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "五花肉煸炒出油", sense: "👀 看到汤汁渗出", timer: 120 },
      { text: "放入豆角翻炒", heat: "🔥🔥 中火", sense: "👀 肉色变白无粉红", tip: "炒到变色", timer: 120 },
      { text: "加生抽老抽和适量水", tip: "水量没过豆角", timer: 10 },
      { text: "水开后铺上面条，盖盖小火焖", heat: "🔥 小火", tip: "不要搅动！", timer: 600 },
      { text: "汤汁收干后翻拌均匀", tip: "撒蒜末，香！", timer: 30 }
    ],
  },
  {
    id: "dish-71",
    name: "蒜蓉菠菜",
    emoji: "🥬",
    category: "素食",
    time: 8,
    difficulty: 1,
    tags: ["快手","健康","减脂"],
    desc: "补铁快手菜，3分钟搞定",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "菠菜", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "菠菜洗净切段", tip: "根部不要丢，很甜" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "锅中倒油，蒜末爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入菠菜大火翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒", timer: 30 },
      { text: "加盐翻匀出锅", tip: "不要炒太久！", timer: 10 }
    ],
  },
  {
    id: "dish-72",
    name: "可乐排骨",
    emoji: "🍖",
    category: "硬菜",
    time: 50,
    difficulty: 2,
    tags: ["硬菜","肉食","甜香"],
    desc: "可乐的甜渗入排骨，好吃到舔手指",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "猪小排", emoji: "🍖", amount: "500g", category: "肉类" },
      { name: "可乐", emoji: "🥤", amount: "1罐", category: "主食" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "排骨焯水洗净" },
      { text: "葱切段，姜切片" }
    ],
    cook: [
      { text: "锅中少许油，排骨煎至两面微黄", heat: "🔥🔥 中火", timer: 180 },
      { text: "加入姜葱炒香", sense: "👃 闻到香味即可", timer: 20 },
      { text: "倒入可乐，加生抽老抽", timer: 10 },
      { text: "大火烧开转小火焖40分钟", heat: "🔥🔥🔥 大火", timer: 2400 },
      { text: "大火收汁", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "不停翻动", timer: 180 },
      { text: "出锅装盘", tip: "甜香入骨！", timer: 10 }
    ],
  },
  {
    id: "dish-73",
    name: "凉拌海带丝",
    emoji: "🌊",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["凉菜","快手","开胃"],
    desc: "酸辣爽口，夏天开胃小凉菜",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "海带丝", emoji: "🌊", amount: "200g", category: "主食" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" }
    ],
    prep: [
      { text: "海带丝洗净焯水", tip: "焯2分钟去腥" },
      { text: "蒜切末，小米辣切圈" }
    ],
    cook: [
      { text: "海带丝过凉水沥干", timer: 10 },
      { text: "加入所有调料拌匀", timer: 10 },
      { text: "撒白芝麻，冷藏更佳", timer: 10 }
    ],
  },
  {
    id: "dish-74",
    name: "农家小炒肉",
    emoji: "🌶️",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["下饭","快手","湘菜"],
    desc: "辣椒炒肉的巅峰版本，下饭无敌",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "200g", category: "肉类" },
      { name: "青辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "红辣椒", emoji: "🌶️", amount: "3个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "豆豉", emoji: "🫘", amount: "少许", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "五花肉切薄片" },
      { text: "辣椒斜切段，蒜切片" }
    ],
    cook: [
      { text: "五花肉煸炒出油至微卷", sense: "👀 看到汤汁渗出", tip: "不放油", timer: 120 },
      { text: "推到一边，下豆豉和蒜片炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入辣椒大火翻炒", heat: "🔥🔥🔥 大火", tip: "炒到辣椒起虎皮", timer: 60 },
      { text: "加生抽翻匀出锅", tip: "香辣下饭！", timer: 10 }
    ],
  },
  {
    id: "dish-75",
    name: "排骨莲藕汤",
    emoji: "🍲",
    category: "汤羹",
    time: 60,
    difficulty: 1,
    tags: ["汤品","滋补","养生"],
    desc: "粉糯莲藕配软烂排骨，湖北经典",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅"],
    ingredients: [
      { name: "排骨", emoji: "🍖", amount: "400g", category: "肉类" },
      { name: "莲藕", emoji: "🪷", amount: "2节", category: "蔬菜水果" },
      { name: "姜", emoji: "🫚", amount: "4片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "排骨焯水洗净" },
      { text: "莲藕去皮切滚刀块", tip: "切大块，煮久更粉糯" }
    ],
    cook: [
      { text: "排骨莲藕姜葱放入锅中加足水", tip: "一次加够", timer: 10 },
      { text: "大火烧开撇浮沫", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "转小火炖50分钟", heat: "🔥 小火", timer: 3000 },
      { text: "加盐调味", tip: "汤白藕粉！", timer: 10 }
    ],
  },
  {
    id: "dish-76",
    name: "铁板豆腐",
    emoji: "🫘",
    category: "素食",
    time: 15,
    difficulty: 1,
    tags: ["小吃","素食","快手"],
    desc: "街头小吃在家做，外焦里嫩",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "老豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "辣椒粉", emoji: "🌶️", amount: "1勺", category: "蔬菜水果" },
      { name: "孜然粉", emoji: "🌿", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" },
      { name: "葱花", emoji: "🌿", amount: "适量", category: "其他" }
    ],
    prep: [
      { text: "豆腐切厚片", tip: "约1cm厚" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "平底锅多放油，豆腐煎至两面金黄", heat: "🔥🔥 中火", tip: "中火慢煎", timer: 180 },
      { text: "撒上蒜末、辣椒粉、孜然粉", timer: 10 },
      { text: "淋生抽，撒白芝麻和葱花", timer: 10 },
      { text: "翻面再煎30秒出锅", heat: "🔥🔥 中火", tip: "街头风味！", timer: 30 }
    ],
  },
  {
    id: "dish-77",
    name: "尖椒炒鸡胗",
    emoji: "🐔",
    category: "家常菜",
    time: 15,
    difficulty: 2,
    tags: ["下饭","快手","内脏"],
    desc: "脆嫩爽口，下酒下饭两相宜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "鸡胗", emoji: "🐔", amount: "300g", category: "肉类" },
      { name: "尖椒", emoji: "🌶️", amount: "4个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "2片", category: "其他" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鸡胗切花刀，加料酒腌10分钟", tip: "花刀让鸡胗更入味更脆" },
      { text: "尖椒切圈，蒜切片" }
    ],
    cook: [
      { text: "锅中烧开水，鸡胗焯水30秒捞出", heat: "🔥🔥🔥 大火", timer: 30 },
      { text: "锅中倒油，蒜姜爆香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入鸡胗大火翻炒", heat: "🔥🔥🔥 大火", tip: "大火快炒保持脆感", timer: 60 },
      { text: "放入尖椒翻炒", heat: "🔥🔥 中火", timer: 30 },
      { text: "加生抽翻匀出锅", tip: "脆嫩！", timer: 10 }
    ],
  },
  {
    id: "dish-78",
    name: "虾仁豆腐汤",
    emoji: "🍲",
    category: "汤羹",
    time: 15,
    difficulty: 1,
    tags: ["汤品","海鲜","快手"],
    desc: "鲜美嫩滑，营养满分的快手汤",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "嫩豆腐", emoji: "🫘", amount: "1盒", category: "蛋奶" },
      { name: "虾仁", emoji: "🦐", amount: "100g", category: "肉类" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "葱", emoji: "🌿", amount: "1根", category: "其他" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "白胡椒粉", emoji: "🌶️", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "豆腐切小块，虾仁去虾线" },
      { text: "鸡蛋打散" }
    ],
    cook: [
      { text: "锅中加水烧开，放入豆腐", heat: "🔥🔥🔥 大火", timer: 60 },
      { text: "放入虾仁煮至变红", heat: "🔥 小火", timer: 60 },
      { text: "淋入蛋液", timer: 15 },
      { text: "加盐和白胡椒粉，撒葱花", tip: "鲜！", timer: 10 }
    ],
  },
  {
    id: "dish-79",
    name: "油焖大虾",
    emoji: "🦐",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["宴客","海鲜","经典"],
    desc: "色泽红亮，壳脆肉嫩的经典鲁菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "8只", category: "肉类" },
      { name: "番茄酱", emoji: "🍅", amount: "2勺", category: "蔬菜水果" },
      { name: "糖", emoji: "🍬", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" }
    ],
    prep: [
      { text: "虾去虾线，剪去虾须虾枪" },
      { text: "姜切片，葱切段" }
    ],
    cook: [
      { text: "锅中多放油，虾煎至两面变红", heat: "🔥🔥 中火", tip: "用锅铲按压虾头出虾油", timer: 120 },
      { text: "加入姜葱炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "加入番茄酱、糖、料酒、生抽", timer: 10 },
      { text: "加少许水，盖盖焖3分钟", heat: "🔥 小火", timer: 180 },
      { text: "大火收汁出锅", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "红亮诱人！", timer: 30 }
    ],
  },
  {
    id: "dish-80",
    name: "白菜猪肉炖粉条",
    emoji: "🥬",
    category: "家常菜",
    time: 30,
    difficulty: 1,
    tags: ["炖菜","北方味","暖身"],
    desc: "东北经典一锅炖，暖身又暖心",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "大白菜", emoji: "🥬", amount: "半颗", category: "蔬菜水果" },
      { name: "五花肉", emoji: "🥓", amount: "200g", category: "肉类" },
      { name: "粉条", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "葱", emoji: "🌿", amount: "2根", category: "其他" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "白菜切块，五花肉切片" },
      { text: "粉条泡软" }
    ],
    cook: [
      { text: "五花肉煸炒出油", sense: "👀 看到汤汁渗出", timer: 120 },
      { text: "加入葱姜炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "放入白菜翻炒", heat: "🔥🔥 中火", timer: 60 },
      { text: "加生抽老抽和适量水", timer: 10 },
      { text: "水开后放入粉条，炖15分钟", heat: "🔥 小火", timer: 900 },
      { text: "收汁出锅", heat: "🔥 小火", sense: "👀 汤汁浓稠挂食材", tip: "暖暖一锅！", timer: 30 }
    ],
  },
  {
    id: "dish-81",
    name: "香煎鸡排",
    emoji: "🍗",
    category: "快手菜",
    time: 15,
    difficulty: 1,
    tags: ["快手","肉食","新手友好"],
    desc: "外酥里嫩，比炸鸡排更健康",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "鸡胸肉", emoji: "🐔", amount: "1块", category: "肉类" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "面包糠", emoji: "🌾", amount: "适量", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" },
      { name: "黑胡椒", emoji: "🌶️", amount: "适量", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "鸡胸肉从中间片开，用刀背拍松", tip: "拍松更嫩更易熟" },
      { text: "加盐和黑胡椒腌10分钟" }
    ],
    cook: [
      { text: "鸡肉依次裹淀粉、蛋液、面包糠", tip: "裹均匀", timer: 60 },
      { text: "平底锅刷油，中小火煎至两面金黄", heat: "🔥🔥 中火", tip: "每面约3分钟", timer: 360 },
      { text: "切块装盘", tip: "可以配番茄酱！", timer: 10 }
    ],
  },
  {
    id: "dish-82",
    name: "蒜蓉小龙虾",
    emoji: "🦞",
    category: "硬菜",
    time: 30,
    difficulty: 3,
    tags: ["宴客","海鲜","宵夜"],
    desc: "蒜香四溢，夏天宵夜之王",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "小龙虾", emoji: "🦞", amount: "1000g", category: "肉类" },
      { name: "蒜", emoji: "🧄", amount: "2整头", category: "其他" },
      { name: "啤酒", emoji: "🍺", amount: "1罐", category: "主食" },
      { name: "姜", emoji: "🫚", amount: "5片", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "小龙虾刷洗干净，去虾线", tip: "捏住尾部中间拧一下" },
      { text: "蒜切末（要多！），小米辣切圈" }
    ],
    cook: [
      { text: "锅中多放油，小火炒香大量蒜末", heat: "🔥 小火", sense: "👃 闻到香味即可", tip: "一半炒金蒜，一半留生蒜", timer: 180 },
      { text: "放入小龙虾大火翻炒", heat: "🔥🔥🔥 大火", tip: "炒到变红", timer: 120 },
      { text: "加入啤酒、生抽、蚝油", timer: 10 },
      { text: "盖盖焖煮10分钟", heat: "🔥 小火", timer: 600 },
      { text: "放入剩余生蒜和小米辣", timer: 10 },
      { text: "大火收汁出锅", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "蒜香扑鼻！", timer: 60 }
    ],
  },
  {
    id: "dish-83",
    name: "凉拌豆腐",
    emoji: "🫘",
    category: "素食",
    time: 5,
    difficulty: 1,
    tags: ["凉菜","快手","减脂"],
    desc: "3分钟搞定的清爽凉菜",
    tools: ["🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "内酯豆腐", emoji: "🫘", amount: "1盒", category: "蛋奶" },
      { name: "皮蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "榨菜", emoji: "🥬", amount: "少许", category: "主食" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" },
      { name: "葱花", emoji: "🌿", amount: "适量", category: "其他" }
    ],
    prep: [
      { text: "豆腐倒扣在盘中" },
      { text: "皮蛋切碎，榨菜切末" }
    ],
    cook: [
      { text: "皮蛋和榨菜铺在豆腐上", timer: 10 },
      { text: "淋生抽和香油", timer: 10 },
      { text: "撒葱花，完成", tip: "清爽！", timer: 10 }
    ],
  },
  {
    id: "dish-84",
    name: "糖醋排骨",
    emoji: "🍖",
    category: "硬菜",
    time: 40,
    difficulty: 2,
    tags: ["宴客","酸甜","肉食"],
    desc: "酸甜可口，小朋友最爱的硬菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "猪小排", emoji: "🍖", amount: "500g", category: "肉类" },
      { name: "醋", emoji: "🍶", amount: "3勺", category: "调味料" },
      { name: "糖", emoji: "🍬", amount: "3勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "白芝麻", emoji: "🌾", amount: "适量", category: "主食" }
    ],
    prep: [
      { text: "排骨焯水洗净" },
      { text: "调糖醋汁：醋+糖+生抽+料酒拌匀" }
    ],
    cook: [
      { text: "锅中少许油，排骨煎至两面微黄", heat: "🔥🔥 中火", timer: 180 },
      { text: "加入姜片炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒入糖醋汁，加适量水", timer: 10 },
      { text: "大火烧开转小火焖30分钟", heat: "🔥🔥🔥 大火", timer: 1800 },
      { text: "大火收汁至浓稠", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠挂食材", tip: "不停翻动", timer: 180 },
      { text: "撒白芝麻出锅", tip: "酸甜诱人！", timer: 10 }
    ],
  },
  {
    id: "dish-85",
    name: "蒜苔炒肉",
    emoji: "🌿",
    category: "家常菜",
    time: 10,
    difficulty: 1,
    tags: ["家常","快手","下饭"],
    desc: "蒜苔脆嫩肉丝滑，经典下饭菜",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "蒜苔", emoji: "🌿", amount: "1把", category: "蔬菜水果" },
      { name: "猪里脊", emoji: "🥩", amount: "150g", category: "肉类" },
      { name: "蒜", emoji: "🧄", amount: "2瓣", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🥄", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "蒜苔切段，猪肉切丝腌制" },
      { text: "蒜切末" }
    ],
    cook: [
      { text: "肉丝滑炒至变色盛出", heat: "🔥🔥 中火", sense: "👀 肉色变白无粉红", timer: 40 },
      { text: "蒜末爆香，放入蒜苔翻炒", heat: "🔥🔥🔥 大火", sense: "👃 闻到香味即可", tip: "大火", timer: 60 },
      { text: "倒回肉丝，加生抽翻匀", timer: 20 },
      { text: "出锅装盘", tip: "脆嫩下饭！", timer: 10 }
    ],
  },
  {
    id: "dish-86",
    name: "蒸蛋羹",
    emoji: "🥚",
    category: "汤羹",
    time: 15,
    difficulty: 1,
    tags: ["新手友好","蒸菜","嫩滑"],
    desc: "嫩滑如豆腐脑，老少皆宜",
    tools: ["🔪 菜刀 + 砧板","🫕 蒸锅","🥣 大碗"],
    ingredients: [
      { name: "鸡蛋", emoji: "🥚", amount: "2个", category: "蛋奶" },
      { name: "温水", emoji: "💧", amount: "蛋液的1.5倍", category: "其他" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "几滴", category: "调味料" },
      { name: "葱花", emoji: "🌿", amount: "适量", category: "其他" }
    ],
    prep: [
      { text: "鸡蛋打散，加入温水搅匀", tip: "温水！不是冷水也不是热水" },
      { text: "过筛去除气泡", tip: "过筛是嫩滑的关键" }
    ],
    cook: [
      { text: "盖上保鲜膜，扎几个小孔", tip: "防止水蒸气滴入", timer: 10 },
      { text: "水开后上锅，中小火蒸10分钟", heat: "🔥🔥🔥 大火", tip: "中小火！大火会有蜂窝", timer: 600 },
      { text: "淋生抽和香油，撒葱花", tip: "嫩滑如丝！", timer: 10 }
    ],
  },
  {
    id: "dish-87",
    name: "干锅土豆片",
    emoji: "🥔",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["下饭","快手","干锅"],
    desc: "焦香酥脆，比薯片还好吃",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "五花肉", emoji: "🥓", amount: "100g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "孜然粉", emoji: "🌿", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "土豆切厚片，泡水去淀粉" },
      { text: "五花肉切片，蒜切片" }
    ],
    cook: [
      { text: "土豆片煎至两面金黄盛出", heat: "🔥🔥 中火", tip: "中火煎", timer: 180 },
      { text: "五花肉煸炒出油", sense: "👀 看到汤汁渗出", timer: 60 },
      { text: "放入干辣椒和蒜片炒香", sense: "👃 闻到香味即可", timer: 15 },
      { text: "倒回土豆片，加孜然和生抽翻炒", heat: "🔥🔥 中火", timer: 30 },
      { text: "翻匀出锅", tip: "焦香！", timer: 10 }
    ],
  },
  {
    id: "dish-88",
    name: "蜜汁鸡翅",
    emoji: "🍗",
    category: "快手菜",
    time: 25,
    difficulty: 1,
    tags: ["肉食","甜香","新手友好"],
    desc: "甜香诱人，烤箱/平底锅都能做",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥣 大碗"],
    ingredients: [
      { name: "鸡翅中", emoji: "🍗", amount: "10个", category: "肉类" },
      { name: "蜂蜜", emoji: "🍯", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "姜", emoji: "🫚", amount: "3片", category: "其他" },
      { name: "黑胡椒", emoji: "🌶️", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "鸡翅两面划刀，加所有调料腌30分钟", tip: "腌越久越入味" }
    ],
    cook: [
      { text: "平底锅刷油，鸡翅煎至两面金黄", heat: "🔥🔥 中火", tip: "中小火", timer: 300 },
      { text: "倒入腌料汁，小火收汁", heat: "🔥 小火", sense: "👀 汤汁浓稠挂食材", tip: "不停翻动", timer: 120 },
      { text: "出锅装盘", tip: "甜香诱人！", timer: 10 }
    ],
  },
  {
    id: "dish-89",
    name: "凉拌秋葵",
    emoji: "🫛",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["凉菜","减脂","健康"],
    desc: "黏糯爽滑，减脂期的宝藏蔬菜",
    tools: ["🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "秋葵", emoji: "🫛", amount: "200g", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "3瓣", category: "其他" },
      { name: "小米辣", emoji: "🌶️", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🫗", amount: "2勺", category: "调味料" },
      { name: "醋", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "秋葵洗净，蒜切末" }
    ],
    cook: [
      { text: "秋葵焯水2分钟，捞出过凉水", tip: "不要焯太久", timer: 120 },
      { text: "秋葵去蒂，对半切开", timer: 30 },
      { text: "淋上蒜末、小米辣、生抽、醋、香油", timer: 10 },
      { text: "拌匀即可", tip: "清爽！", timer: 10 }
    ],
  },
  {
    id: "dish-90",
    name: "酸汤肥牛",
    emoji: "🥩",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["酸辣","硬菜","下饭"],
    desc: "酸辣开胃，肥牛嫩滑汤鲜美",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅","🥘 汤锅"],
    ingredients: [
      { name: "肥牛卷", emoji: "🥩", amount: "300g", category: "肉类" },
      { name: "金针菇", emoji: "🍄", amount: "1把", category: "主食" },
      { name: "泡椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "番茄", emoji: "🍅", amount: "1个", category: "蔬菜水果" },
      { name: "蒜", emoji: "🧄", amount: "4瓣", category: "其他" },
      { name: "醋", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🫗", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "金针菇去根洗净，番茄切块" },
      { text: "泡椒切碎，蒜切末" }
    ],
    cook: [
      { text: "锅中少许油，炒香泡椒和蒜末", sense: "👃 闻到香味即可", timer: 30 },
      { text: "放入番茄炒出汁", sense: "👀 看到汤汁渗出", timer: 60 },
      { text: "加水烧开，放入金针菇煮2分钟", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "放入肥牛卷，煮至变色", heat: "🔥 小火", sense: "👀 肉色变白无粉红", tip: "不要煮太久", timer: 60 },
      { text: "加醋和生抽调味", tip: "酸辣开胃！", timer: 10 }
    ],
  }
,
  {
    id: "dish-redbraised-pork-belly",
    name: "东坡肉",
    emoji: "🥩",
    category: "硬菜",
    time: 120,
    difficulty: 3,
    tags: ["经典","宴客","肉食"],
    desc: "肥而不腻，入口即化，苏东坡同款",
    tools: ["🔪 菜刀 + 砧板","🥘 砂锅","🥣 大碗"],
    ingredients: [
      { name: "五花肉", emoji: "🥓", amount: "500g", category: "肉类" },
      { name: "生抽", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "3勺", category: "调味料" },
      { name: "冰糖", emoji: "🍬", amount: "30g", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "4片", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "3根", category: "蔬菜水果" },
      { name: "八角", emoji: "⭐", amount: "2个", category: "调味料" }
    ],
    prep: [
      { text: "五花肉切3cm方块", tip: "冷水下锅焯水去腥" },
      { text: "葱切段，姜切片" },
      { text: "准备冰糖和八角" }
    ],
    cook: [
      { text: "五花肉冷水下锅焯水，捞出洗净", heat: "🔥🔥🔥 大火", sense: "👀 撇去浮沫", timer: 120 },
      { text: "砂锅底部铺葱段姜片", tip: "防止粘底" },
      { text: "肉块皮朝下码入砂锅", tip: "皮朝下更容易上色" },
      { text: "加生抽、老抽、料酒、冰糖、八角", tip: "调料没过肉的2/3" },
      { text: "大火烧开转小火慢炖1.5小时", heat: "🔥 小火", sense: "👃 满屋肉香", tip: "中途不要开盖", timer: 5400 },
      { text: "转大火收汁至浓稠", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠发亮", timer: 300 },
      { text: "出锅装盘，皮朝上", tip: "肥而不腻，入口即化" }
    ],
  },
  {
    id: "dish-steamed-fish",
    name: "清蒸鲈鱼",
    emoji: "🐟",
    category: "硬菜",
    time: 25,
    difficulty: 2,
    tags: ["清淡","宴客","高蛋白"],
    desc: "原汁原味，鲜嫩无比的粤式经典",
    tools: ["🔪 菜刀 + 砧板","🫕 蒸锅","🍳 炒锅"],
    ingredients: [
      { name: "鲈鱼", emoji: "🐟", amount: "1条", category: "肉类" },
      { name: "生姜", emoji: "🫚", amount: "1块", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "3根", category: "蔬菜水果" },
      { name: "蒸鱼豉油", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "2勺", category: "调味料" }
    ],
    prep: [
      { text: "鲈鱼处理干净，两面划几刀", tip: "划刀深至鱼骨，易入味" },
      { text: "姜一半切片一半切丝，葱切丝" },
      { text: "鱼身抹料酒和姜片腌10分钟", tip: "去腥关键步骤" }
    ],
    cook: [
      { text: "水烧开后放入鱼，大火蒸8分钟", heat: "🔥🔥🔥 大火", sense: "👀 鱼眼发白突出", tip: "水开再放鱼，蒸出来更嫩", timer: 480 },
      { text: "倒掉盘中蒸鱼水，铺上葱姜丝", tip: "蒸鱼水有腥味要倒掉" },
      { text: "淋上蒸鱼豉油", tip: "沿盘边淋，不要直接浇鱼" },
      { text: "烧热油浇在葱姜丝上", heat: "🔥🔥🔥 大火", sense: "👃 滋啦一声，香气四溢", tip: "油要烧到冒烟才浇" }
    ],
  },
  {
    id: "dish-gongbao-tofu",
    name: "家常豆腐",
    emoji: "🫘",
    category: "家常菜",
    time: 20,
    difficulty: 2,
    tags: ["下饭","素食","家常"],
    desc: "外焦里嫩，酱香浓郁的下饭神器",
    tools: ["🔪 菜刀 + 砧板","🍳 炒锅"],
    ingredients: [
      { name: "老豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "红椒", emoji: "🌶️", amount: "1个", category: "蔬菜水果" },
      { name: "大蒜", emoji: "🧄", amount: "3瓣", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "蚝油", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "淀粉", emoji: "🍚", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "豆腐切1cm厚片，青红椒切块", tip: "豆腐切厚一点不容易碎" },
      { text: "蒜切末，调碗汁（生抽+蚝油+淀粉+水）" }
    ],
    cook: [
      { text: "豆腐下锅煎至两面金黄盛出", heat: "🔥🔥 中火", sense: "👀 金黄酥脆", tip: "不要频繁翻动", timer: 180 },
      { text: "底油爆香蒜末，下青红椒翻炒", heat: "🔥🔥 中火", timer: 30 },
      { text: "倒回豆腐，淋碗汁翻炒均匀", tip: "轻翻，别把豆腐弄碎" },
      { text: "收汁出锅", sense: "👀 酱汁裹匀" }
    ],
  },
  {
    id: "dish-sour-cabbage-fish",
    name: "酸菜鱼",
    emoji: "🐟",
    category: "硬菜",
    time: 40,
    difficulty: 3,
    tags: ["酸辣","下饭","宴客"],
    desc: "酸辣开胃，鱼片嫩滑的经典川菜",
    tools: ["🔪 菜刀 + 砧板","🥘 汤锅","🥣 大碗"],
    ingredients: [
      { name: "黑鱼", emoji: "🐟", amount: "1条", category: "肉类" },
      { name: "酸菜", emoji: "🥬", amount: "1包", category: "主食" },
      { name: "干辣椒", emoji: "🌶️", amount: "10个", category: "调味料" },
      { name: "花椒", emoji: "🫚", amount: "1勺", category: "调味料" },
      { name: "大蒜", emoji: "🧄", amount: "4瓣", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "1块", category: "蔬菜水果" },
      { name: "蛋清", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "淀粉", emoji: "🍚", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "鱼肉片成薄片，鱼骨剁块", tip: "斜刀片，片薄一点口感好" },
      { text: "鱼片加蛋清、淀粉、料酒抓匀腌15分钟", tip: "蛋清让鱼片更嫩滑" },
      { text: "酸菜切段挤干水分，蒜姜切片" }
    ],
    cook: [
      { text: "锅中少许油，炒香酸菜盛出", heat: "🔥🔥 中火", timer: 120 },
      { text: "底油炒香鱼骨和姜片，加水烧开", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "放入酸菜，小火煮10分钟出味", heat: "🔥 小火", timer: 600 },
      { text: "捞出鱼骨和酸菜铺碗底", tip: "汤留锅里" },
      { text: "汤中下鱼片，轻轻拨散，变色即捞", heat: "🔥🔥 中火", sense: "👀 鱼片变白卷曲", tip: "不要搅动，会碎", timer: 30 },
      { text: "鱼片铺碗中，撒干辣椒花椒蒜末" },
      { text: "烧热油浇上去", sense: "👃 滋啦！香气炸裂" }
    ],
  },
  {
    id: "dish-scallion-oil-noodle",
    name: "葱油拌面",
    emoji: "🍜",
    category: "快手菜",
    time: 15,
    difficulty: 1,
    tags: ["快手","主食","深夜食堂"],
    desc: "上海经典，葱油香浓，简单却让人上瘾",
    tools: ["🍳 炒锅","🥘 煮锅"],
    ingredients: [
      { name: "面条", emoji: "🍜", amount: "200g", category: "主食" },
      { name: "大葱", emoji: "🧅", amount: "3根", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "4勺", category: "调味料" }
    ],
    prep: [
      { text: "大葱切段（葱白葱绿分开）", tip: "葱绿炸葱油，葱白最后撒" },
      { text: "调酱汁：生抽+老抽+白糖拌匀" }
    ],
    cook: [
      { text: "宽水煮面，捞出过凉水沥干", heat: "🔥🔥🔥 大火", timer: 180 },
      { text: "冷油下葱段，小火慢炸至焦黄", heat: "🔥 小火", sense: "👃 葱香四溢", tip: "小火慢炸，急了会苦", timer: 300 },
      { text: "捞出葱渣，葱油浇入酱汁碗中", sense: "👀 滋啦冒泡" },
      { text: "酱汁拌入面条，撒葱花", tip: "趁热拌，面条更吸味" }
    ],
  },
  {
    id: "dish-steamed-dumplings",
    name: "蒸饺子",
    emoji: "🥟",
    category: "主食",
    time: 30,
    difficulty: 2,
    tags: ["主食","家常","面点"],
    desc: "皮薄馅大，蘸醋吃的幸福感",
    tools: ["🫕 蒸锅","🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "饺子皮", emoji: "🥟", amount: "50张", category: "主食" },
      { name: "猪肉末", emoji: "🥩", amount: "300g", category: "肉类" },
      { name: "白菜", emoji: "🥬", amount: "半颗", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "1块", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "1勺", category: "调味料" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "白菜剁碎挤干水分", tip: "撒盐腌10分钟再挤" },
      { text: "肉末加姜末、生抽、盐、香油搅拌上劲", tip: "朝一个方向搅" },
      { text: "白菜混入肉馅拌匀", tip: "馅不要太湿" },
      { text: "包饺子", tip: "边缘沾水捏紧，防止蒸时开口" }
    ],
    cook: [
      { text: "蒸笼垫油纸或刷油，摆入饺子", tip: "间距留大一点" },
      { text: "水开后大火蒸15分钟", heat: "🔥🔥🔥 大火", sense: "👀 皮变透明", timer: 900 },
      { text: "关火焖2分钟再开盖", tip: "焖一下防塌" }
    ],
  },
  {
    id: "dish-hainan-chicken",
    name: "白切鸡",
    emoji: "🐔",
    category: "硬菜",
    time: 50,
    difficulty: 2,
    tags: ["粤菜","宴客","清淡"],
    desc: "皮爽肉滑，原汁原味的粤式经典",
    tools: ["🥘 大汤锅","🔪 菜刀 + 砧板","🥣 大碗"],
    ingredients: [
      { name: "整鸡", emoji: "🐔", amount: "1只", category: "肉类" },
      { name: "生姜", emoji: "🫚", amount: "1块", category: "蔬菜水果" },
      { name: "小葱", emoji: "🌿", amount: "4根", category: "蔬菜水果" },
      { name: "料酒", emoji: "🍶", amount: "2勺", category: "调味料" },
      { name: "香油", emoji: "🫗", amount: "少许", category: "调味料" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "鸡洗净，去除内脏和鸡油", tip: "选2斤左右的嫩鸡" },
      { text: "姜切片，葱打结" }
    ],
    cook: [
      { text: "大锅水烧开，放入姜片葱结料酒", heat: "🔥🔥🔥 大火" },
      { text: "鸡放入水中，水开后关火焖30分钟", heat: "🔥 小火", sense: "👀 筷子插入鸡腿无血水", tip: "三提三放让鸡受热均匀", timer: 1800 },
      { text: "捞出鸡放入冰水中浸泡5分钟", tip: "冰水让皮更爽脆", timer: 300 },
      { text: "斩件装盘，抹香油", tip: "刀要快，斩件要利落" },
      { text: "蘸料：姜蓉+盐+热油", sense: "👃 姜香扑鼻" }
    ],
  },
  {
    id: "dish-kungpao-shrimp",
    name: "油焖大虾",
    emoji: "🦐",
    category: "硬菜",
    time: 20,
    difficulty: 2,
    tags: ["宴客","快手","海鲜"],
    desc: "色泽红亮，虾肉弹嫩，鲜甜浓郁",
    tools: ["🍳 炒锅","🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "12只", category: "肉类" },
      { name: "大蒜", emoji: "🧄", amount: "3瓣", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🍶", amount: "1勺", category: "调味料" },
      { name: "白糖", emoji: "🍚", amount: "1勺", category: "调味料" },
      { name: "番茄酱", emoji: "🍅", amount: "1勺", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "3勺", category: "调味料" }
    ],
    prep: [
      { text: "虾剪去虾须虾枪，开背去虾线", tip: "开背更入味" },
      { text: "蒜切末，姜切丝" }
    ],
    cook: [
      { text: "热油下虾，煎至两面变红盛出", heat: "🔥🔥 中火", sense: "👀 虾壳变红", timer: 120 },
      { text: "底油爆香蒜姜，加番茄酱炒出红油", heat: "🔥🔥 中火", timer: 30 },
      { text: "放回虾，加生抽料酒糖，翻炒收汁", heat: "🔥🔥🔥 大火", sense: "👀 酱汁浓稠裹虾", timer: 120 },
      { text: "出锅装盘", tip: "虾要趁热吃才弹" }
    ],
  },
  {
    id: "dish-hot-sour-soup",
    name: "酸辣汤",
    emoji: "🍲",
    category: "汤羹",
    time: 20,
    difficulty: 2,
    tags: ["开胃","暖身","经典"],
    desc: "酸辣开胃，暖身又暖心的经典汤品",
    tools: ["🥘 汤锅","🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "木耳", emoji: "🍄", amount: "适量", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "半根", category: "蔬菜水果" },
      { name: "香菜", emoji: "🌿", amount: "适量", category: "蔬菜水果" },
      { name: "陈醋", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "白胡椒粉", emoji: "🧂", amount: "1小勺", category: "调味料" },
      { name: "淀粉", emoji: "🍚", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "豆腐切细丝，木耳泡发切丝，胡萝卜切丝", tip: "切越细口感越好" },
      { text: "鸡蛋打散，淀粉加水调成水淀粉" }
    ],
    cook: [
      { text: "锅中加水烧开，放入豆腐丝、木耳丝、胡萝卜丝", heat: "🔥🔥🔥 大火", timer: 120 },
      { text: "加生抽、醋、白胡椒粉调味", tip: "醋最后放，酸味更鲜明" },
      { text: "淋入水淀粉勾芡", tip: "边倒边搅，防结块" },
      { text: "淋入蛋液，形成蛋花", sense: "👀 蛋花飘起", tip: "倒完不要搅" },
      { text: "撒香菜出锅", sense: "👃 酸辣鲜香" }
    ],
  },

  // ====== 新增家常菜/硬菜 ======
  {
    id: "braised-pork-belly",
    name: "红烧肉",
    emoji: "🥩",
    category: "硬菜",
    time: 45,
    difficulty: 4,
    tags: ["经典", "下饭", "硬菜"],
    desc: "肥而不腻、入口即化的经典红烧肉",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "五花肉", emoji: "🥩", amount: "500g", category: "肉类" },
      { name: "冰糖", emoji: "🧂", amount: "30g", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "八角", emoji: "🧂", amount: "2个", category: "调味料" },
      { name: "桂皮", emoji: "🧂", amount: "1小块", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" }
    ],
    prep: [
      { text: "五花肉切2cm见方的块", tip: "冷水下锅焯水去腥" },
      { text: "焯水后捞出洗净备用" }
    ],
    cook: [
      { text: "锅中放少许油，小火炒化冰糖至枣红色", heat: "🔥 小火", sense: "👀 糖色变为枣红色", tip: "小火慢炒，不要炒糊" },
      { text: "放入五花肉块翻炒上色", heat: "🔥🔥 中火" },
      { text: "加料酒、生抽、老抽翻炒均匀" },
      { text: "加入没过肉的热水，放八角、桂皮、姜片", tip: "一定用热水，冷水会让肉发紧" },
      { text: "大火烧开转小火炖40分钟", heat: "🔥 小火", timer: 2400, sense: "👃 肉香四溢" },
      { text: "大火收汁至浓稠即可", heat: "🔥🔥🔥 大火", tip: "收汁时不停翻动防糊" }
    ],
  },
  {
    id: "garlic-steamed-shrimp",
    name: "蒜蓉粉丝蒸虾",
    emoji: "🦐",
    category: "硬菜",
    time: 25,
    difficulty: 3,
    tags: ["鲜美", "宴客", "蒸菜"],
    desc: "蒜香浓郁、虾肉弹嫩的宴客硬菜",
    tools: ["🥘 蒸锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "大虾", emoji: "🦐", amount: "10只", category: "肉类" },
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "蒜末", emoji: "🧄", amount: "1头", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "小葱", emoji: "🌿", amount: "适量", category: "蔬菜水果" }
    ],
    prep: [
      { text: "粉丝泡软铺盘底", tip: "用温水泡10分钟" },
      { text: "虾开背去虾线，摆在粉丝上" },
      { text: "蒜切末，油炸至金黄" }
    ],
    cook: [
      { text: "将炸好的蒜蓉铺在虾背上", heat: "-" },
      { text: "淋上生抽和料酒", tip: "料酒去腥提鲜" },
      { text: "上锅大火蒸8分钟", heat: "🔥🔥🔥 大火", timer: 480, sense: "👀 虾变红色" },
      { text: "撒葱花，浇热油激香", sense: "👃 蒜香扑鼻" }
    ],
  },
  {
    id: "yu-xiang-shredded-pork",
    name: "鱼香肉丝",
    emoji: "🥢",
    category: "家常菜",
    time: 20,
    difficulty: 3,
    tags: ["下饭", "经典", "川菜"],
    desc: "酸甜微辣、没有鱼的鱼香味经典川菜",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "里脊肉", emoji: "🥩", amount: "200g", category: "肉类" },
      { name: "木耳", emoji: "🍄", amount: "适量", category: "蔬菜水果" },
      { name: "胡萝卜", emoji: "🥕", amount: "半根", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "1个", category: "蔬菜水果" },
      { name: "泡椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "豆瓣酱", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "糖", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "肉切丝，加料酒、淀粉腌10分钟", tip: "顺着纹理切更嫩" },
      { text: "木耳泡发切丝，胡萝卜、青椒切丝" }
    ],
    cook: [
      { text: "热锅凉油，滑炒肉丝至变色盛出", heat: "🔥🔥🔥 大火" },
      { text: "底油炒香泡椒和豆瓣酱", sense: "👀 红油渗出" },
      { text: "放入配菜翻炒断生", heat: "🔥🔥 中火" },
      { text: "倒入肉丝，加醋、糖、生抽调味", tip: "醋糖比例2:1是鱼香味的关键" },
      { text: "大火快速翻炒均匀出锅", heat: "🔥🔥🔥 大火" }
    ],
  },
  {
    id: "cola-chicken-wings",
    name: "可乐鸡翅",
    emoji: "🍗",
    category: "家常菜",
    time: 30,
    difficulty: 2,
    tags: ["甜口", "新手友好", "下饭"],
    desc: "甜香入味、色泽诱人的可乐鸡翅",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "鸡翅中", emoji: "🍗", amount: "10个", category: "肉类" },
      { name: "可乐", emoji: "🥤", amount: "1罐", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" }
    ],
    prep: [
      { text: "鸡翅两面划两刀方便入味" },
      { text: "冷水下锅焯水，捞出洗净" }
    ],
    cook: [
      { text: "锅中少许油，煎鸡翅至两面金黄", heat: "🔥🔥 中火", sense: "👀 两面金黄" },
      { text: "加姜片、生抽、老抽翻炒上色" },
      { text: "倒入可乐没过鸡翅，大火烧开转小火炖15分钟", heat: "🔥 小火", timer: 900 },
      { text: "大火收汁至浓稠", heat: "🔥🔥🔥 大火", tip: "不停翻动防粘锅" }
    ],
  },
  {
    id: "garlic-scape-stirfry",
    name: "蒜苔炒肉",
    emoji: "🧄",
    category: "快手菜",
    time: 15,
    difficulty: 2,
    tags: ["下饭", "快手", "家常"],
    desc: "蒜苔脆嫩、肉丝鲜香的快手小炒",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "蒜苔", emoji: "🧄", amount: "200g", category: "蔬菜水果" },
      { name: "猪肉", emoji: "🥩", amount: "150g", category: "肉类" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "料酒", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "蒜苔切段，肉切丝加料酒腌制" }
    ],
    cook: [
      { text: "热油滑炒肉丝至变色盛出", heat: "🔥🔥🔥 大火" },
      { text: "锅中放蒜苔翻炒至断生", heat: "🔥🔥 中火", sense: "👀 颜色变深绿" },
      { text: "倒回肉丝，加生抽翻炒均匀", tip: "蒜苔不宜炒太久，保持脆感" }
    ],
  },
  {
    id: "dry-fried-green-beans",
    name: "干煸四季豆",
    emoji: "🫘",
    category: "家常菜",
    time: 15,
    difficulty: 2,
    tags: ["下饭", "素菜", "经典"],
    desc: "干香微辣、表皮起皱的经典干煸四季豆",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "四季豆", emoji: "🫘", amount: "300g", category: "蔬菜水果" },
      { name: "猪肉末", emoji: "🥩", amount: "50g", category: "肉类" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "花椒", emoji: "🧂", amount: "少许", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "四季豆去筋切段，干辣椒切段" }
    ],
    cook: [
      { text: "锅中多放油，煸炒四季豆至表皮起皱", heat: "🔥🔥 中火", sense: "👀 表皮起皱微焦", tip: "一定要煸透，否则不熟有毒" },
      { text: "盛出四季豆，底油炒香肉末和辣椒花椒" },
      { text: "倒回四季豆，加生抽翻炒均匀", heat: "🔥🔥🔥 大火" }
    ],
  },
  {
    id: "ants-climbing-tree",
    name: "蚂蚁上树",
    emoji: "🐜",
    category: "家常菜",
    time: 15,
    difficulty: 2,
    tags: ["下饭", "经典", "川菜"],
    desc: "粉丝吸满肉末酱汁的经典川菜",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "粉丝", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "猪肉末", emoji: "🥩", amount: "100g", category: "肉类" },
      { name: "豆瓣酱", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "小葱", emoji: "🌿", amount: "适量", category: "蔬菜水果" }
    ],
    prep: [
      { text: "粉丝泡软剪短" }
    ],
    cook: [
      { text: "热油炒香肉末至变色", heat: "🔥🔥 中火" },
      { text: "加豆瓣酱炒出红油", sense: "👀 红油渗出" },
      { text: "放入粉丝，加生抽和少许水翻炒", tip: "粉丝容易粘锅，勤翻动" },
      { text: "炒至粉丝吸收汤汁，撒葱花出锅", sense: "👃 酱香浓郁" }
    ],
  },
  {
    id: "chicken-stew-mushrooms",
    name: "小鸡炖蘑菇",
    emoji: "🍲",
    category: "硬菜",
    time: 60,
    difficulty: 4,
    tags: ["东北菜", "硬菜", "暖身"],
    desc: "东北经典炖菜，鸡肉鲜嫩蘑菇香",
    tools: ["🥘 炖锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "鸡腿", emoji: "🍗", amount: "500g", category: "肉类" },
      { name: "榛蘑", emoji: "🍄", amount: "100g", category: "蔬菜水果" },
      { name: "粉条", emoji: "🍜", amount: "1把", category: "主食" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "八角", emoji: "🧂", amount: "2个", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" }
    ],
    prep: [
      { text: "鸡腿剁块焯水，榛蘑泡发洗净" }
    ],
    cook: [
      { text: "热油炒香鸡块，加姜片八角", heat: "🔥🔥 中火" },
      { text: "加生抽、老抽上色" },
      { text: "加热水没过鸡肉，放入榛蘑", tip: "水要一次加够" },
      { text: "大火烧开转小火炖40分钟", heat: "🔥 小火", timer: 2400 },
      { text: "放入粉条再炖10分钟", heat: "🔥 小火", timer: 600 },
      { text: "大火收汁出锅", sense: "👃 浓香扑鼻" }
    ],
  },
  {
    id: "sour-soup-beef",
    name: "酸汤肥牛",
    emoji: "🥘",
    category: "硬菜",
    time: 25,
    difficulty: 3,
    tags: ["开胃", "酸辣", "下饭"],
    desc: "酸辣开胃、肉嫩汤鲜的酸汤肥牛",
    tools: ["🥘 汤锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "肥牛卷", emoji: "🥩", amount: "300g", category: "肉类" },
      { name: "金针菇", emoji: "🍄", amount: "1把", category: "蔬菜水果" },
      { name: "泡椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "番茄", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "番茄切块，金针菇去根洗净" },
      { text: "肥牛卷解冻" }
    ],
    cook: [
      { text: "热油炒香泡椒和番茄出汁", heat: "🔥🔥 中火", sense: "👀 番茄出沙" },
      { text: "加水烧开，加醋和生抽调味" },
      { text: "放入金针菇煮2分钟" },
      { text: "下肥牛卷烫至变色即出锅", heat: "🔥🔥🔥 大火", tip: "肥牛不要煮太久会老", sense: "👀 肉片变色" }
    ],
  },
  {
    id: "sweet-sour-ribs",
    name: "糖醋排骨",
    emoji: "🍖",
    category: "硬菜",
    time: 40,
    difficulty: 4,
    tags: ["经典", "宴客", "酸甜"],
    desc: "外焦里嫩、酸甜可口的经典糖醋排骨",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "小排", emoji: "🍖", amount: "500g", category: "肉类" },
      { name: "醋", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "糖", emoji: "🧂", amount: "3勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "料酒", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" }
    ],
    prep: [
      { text: "小排剁小块，冷水下锅焯水去腥" }
    ],
    cook: [
      { text: "热油煎排骨至两面金黄", heat: "🔥🔥 中火", sense: "👀 两面金黄" },
      { text: "加姜片、料酒、生抽翻炒" },
      { text: "加水没过排骨，大火烧开转小火炖25分钟", heat: "🔥 小火", timer: 1500 },
      { text: "加糖和醋，大火收汁", heat: "🔥🔥🔥 大火", tip: "醋糖比例1:1，收汁要浓稠" },
      { text: "出锅装盘，撒白芝麻", sense: "👀 色泽红亮" }
    ],
  },
  {
    id: "braised-ribs",
    name: "红烧排骨",
    emoji: "🍖",
    category: "硬菜",
    time: 50,
    difficulty: 4,
    tags: ["经典", "下饭", "硬菜"],
    desc: "酱香浓郁、肉质酥烂的红烧排骨",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "排骨", emoji: "🍖", amount: "500g", category: "肉类" },
      { name: "冰糖", emoji: "🧂", amount: "20g", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "八角", emoji: "🧂", amount: "2个", category: "调味料" },
      { name: "桂皮", emoji: "🧂", amount: "1小块", category: "调味料" }
    ],
    prep: [
      { text: "排骨剁块，冷水下锅焯水" }
    ],
    cook: [
      { text: "小火炒化冰糖至枣红色", heat: "🔥 小火", sense: "👀 糖色枣红" },
      { text: "放入排骨翻炒上色" },
      { text: "加生抽、老抽、八角、桂皮" },
      { text: "加热水没过排骨，小火炖40分钟", heat: "🔥 小火", timer: 2400 },
      { text: "大火收汁至浓稠", heat: "🔥🔥🔥 大火", sense: "👀 酱香浓郁" }
    ],
  },
  {
    id: "mouth-watering-chicken",
    name: "口水鸡",
    emoji: "🐔",
    category: "硬菜",
    time: 30,
    difficulty: 3,
    tags: ["川菜", "凉菜", "开胃"],
    desc: "麻辣鲜香、让人流口水的经典川式凉菜",
    tools: ["🥘 汤锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "鸡腿", emoji: "🍗", amount: "2个", category: "肉类" },
      { name: "辣椒油", emoji: "🌶️", amount: "3勺", category: "调味料" },
      { name: "花椒", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "花生碎", emoji: "🥜", amount: "适量", category: "调味料" },
      { name: "小葱", emoji: "🌿", amount: "适量", category: "蔬菜水果" }
    ],
    prep: [
      { text: "鸡腿冷水下锅，加姜片料酒煮熟", tip: "用筷子能轻松穿透即熟" },
      { text: "捞出放入冰水中浸泡，使皮紧实" }
    ],
    cook: [
      { text: "调酱汁：辣椒油、花椒、生抽、醋混合" },
      { text: "鸡腿切块摆盘" },
      { text: "淋上酱汁，撒花生碎和葱花", sense: "👀 红亮诱人", tip: "冷藏后更入味" }
    ],
  },
  {
    id: "pickled-pepper-chicken-feet",
    name: "泡椒凤爪",
    emoji: "🦶",
    category: "硬菜",
    time: 60,
    difficulty: 2,
    tags: ["零食", "开胃", "酸辣"],
    desc: "酸辣脆爽、越啃越香的泡椒凤爪",
    tools: ["🥘 汤锅", "密封容器"],
    ingredients: [
      { name: "鸡爪", emoji: "🍗", amount: "500g", category: "肉类" },
      { name: "泡椒", emoji: "🌶️", amount: "1袋", category: "调味料" },
      { name: "柠檬", emoji: "🍋", amount: "半个", category: "蔬菜水果" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" }
    ],
    prep: [
      { text: "鸡爪剪去指甲，剁小块" },
      { text: "冷水下锅焯水，捞出洗净" }
    ],
    cook: [
      { text: "重新加水，放姜片煮鸡爪15分钟", heat: "🔥🔥 中火", timer: 900 },
      { text: "捞出过冰水，沥干" },
      { text: "泡椒连汁倒入容器，加醋和柠檬片" },
      { text: "放入鸡爪拌匀，密封冷藏腌制", tip: "冷藏4小时以上更入味" }
    ],
  },
  {
    id: "beer-duck",
    name: "啤酒鸭",
    emoji: "🦆",
    category: "硬菜",
    time: 50,
    difficulty: 4,
    tags: ["硬菜", "下饭", "经典"],
    desc: "啤酒焖煮、肉质酥烂的啤酒鸭",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "鸭肉", emoji: "🦆", amount: "半只", category: "肉类" },
      { name: "啤酒", emoji: "🍺", amount: "1罐", category: "调味料" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "八角", emoji: "🧂", amount: "2个", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "4片", category: "调味料" }
    ],
    prep: [
      { text: "鸭肉剁块焯水去腥" }
    ],
    cook: [
      { text: "热油煸炒鸭块至出油", heat: "🔥🔥 中火", sense: "👀 鸭皮出油" },
      { text: "加姜片、八角、生抽、老抽翻炒" },
      { text: "倒入啤酒没过鸭肉", tip: "啤酒要一次倒够" },
      { text: "大火烧开转小火炖35分钟", heat: "🔥 小火", timer: 2100 },
      { text: "放入青椒块，大火收汁", heat: "🔥🔥🔥 大火", sense: "👀 汤汁浓稠" }
    ],
  },
  {
    id: "braised-beef-brisket",
    name: "红烧牛腩",
    emoji: "🥩",
    category: "硬菜",
    time: 60,
    difficulty: 4,
    tags: ["硬菜", "下饭", "炖菜"],
    desc: "酱香浓郁、入口即化的红烧牛腩",
    tools: ["🥘 炖锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "牛腩", emoji: "🥩", amount: "500g", category: "肉类" },
      { name: "番茄", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "老抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "八角", emoji: "🧂", amount: "2个", category: "调味料" },
      { name: "桂皮", emoji: "🧂", amount: "1小块", category: "调味料" },
      { name: "生姜", emoji: "🫚", amount: "4片", category: "调味料" }
    ],
    prep: [
      { text: "牛腩切块焯水，番茄切块" }
    ],
    cook: [
      { text: "热油炒香姜片和香料", heat: "🔥🔥 中火" },
      { text: "放入牛腩翻炒上色" },
      { text: "加生抽、老抽、番茄块" },
      { text: "加热水没过牛腩，大火烧开转小火炖50分钟", heat: "🔥 小火", timer: 3000, sense: "👃 肉香四溢" },
      { text: "大火收汁至浓稠", heat: "🔥🔥🔥 大火" }
    ],
  },

  {
    id: "garlic-broccoli",
    name: "蒜蓉西兰花",
    emoji: "🥦",
    category: "快手菜",
    time: 10,
    difficulty: 1,
    tags: ["健康", "快手", "素菜"],
    desc: "清爽健康、蒜香四溢的快手素菜",
    tools: ["🥘 炒锅"],
    ingredients: [
      { name: "西兰花", emoji: "🥦", amount: "1颗", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "4瓣", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "西兰花掰小朵焯水30秒", tip: "焯水保持翠绿" }
    ],
    cook: [
      { text: "热油爆香蒜末", heat: "🔥🔥 中火", sense: "👃 蒜香飘出" },
      { text: "放入西兰花大火快炒1分钟", heat: "🔥🔥🔥 大火" },
      { text: "加盐调味出锅", tip: "不要炒太久保持脆感" }
    ],
  },
  {
    id: "vinegar-potato-shreds",
    name: "醋溜土豆丝",
    emoji: "🥔",
    category: "快手菜",
    time: 12,
    difficulty: 1,
    tags: ["下饭", "快手", "经典"],
    desc: "酸爽脆嫩的经典醋溜土豆丝",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "干辣椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "花椒", emoji: "🧂", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "土豆去皮切细丝，泡水洗去淀粉", tip: "泡水是脆的关键" }
    ],
    cook: [
      { text: "热油爆香花椒和干辣椒", heat: "🔥🔥 中火" },
      { text: "放入土豆丝大火快炒", heat: "🔥🔥🔥 大火" },
      { text: "沿锅边淋醋，加盐调味", tip: "醋要沿锅边淋，香气更足" },
      { text: "翻炒均匀出锅，保持脆感", sense: "👀 根根分明" }
    ],
  },
  {
    id: "stirfry-seasonal-veg",
    name: "清炒时蔬",
    emoji: "🥬",
    category: "快手菜",
    time: 8,
    difficulty: 1,
    tags: ["健康", "快手", "素菜"],
    desc: "清爽可口的清炒当季时蔬",
    tools: ["🥘 炒锅"],
    ingredients: [
      { name: "时令蔬菜", emoji: "🥬", amount: "300g", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "3瓣", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "蔬菜洗净切段" }
    ],
    cook: [
      { text: "热油爆香蒜末", heat: "🔥🔥 中火" },
      { text: "放入蔬菜大火翻炒", heat: "🔥🔥🔥 大火" },
      { text: "加盐调味，炒至断生出锅", sense: "👀 颜色鲜亮", tip: "不要炒太久" }
    ],
  },
  {
    id: "scallion-fried-eggs",
    name: "葱花煎蛋",
    emoji: "🥚",
    category: "快手菜",
    time: 5,
    difficulty: 1,
    tags: ["快手", "新手友好", "早餐"],
    desc: "简单美味、5分钟搞定的葱花煎蛋",
    tools: ["🥘 炒锅"],
    ingredients: [
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "小葱", emoji: "🌿", amount: "适量", category: "蔬菜水果" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "鸡蛋打散，加葱花和盐搅匀" }
    ],
    cook: [
      { text: "热锅倒油，油热后倒入蛋液", heat: "🔥🔥 中火" },
      { text: "煎至底部凝固，翻面再煎", sense: "👀 边缘金黄" },
      { text: "两面金黄出锅", tip: "火不要太大，容易焦" }
    ],
  },
  {
    id: "sour-spicy-potato-shreds",
    name: "酸辣土豆丝",
    emoji: "🥔",
    category: "快手菜",
    time: 12,
    difficulty: 1,
    tags: ["下饭", "酸辣", "经典"],
    desc: "酸辣开胃的经典土豆丝",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "5个", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "花椒", emoji: "🧂", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "土豆去皮切细丝，泡水洗去淀粉" }
    ],
    cook: [
      { text: "热油爆香花椒和干辣椒", heat: "🔥🔥 中火" },
      { text: "放入土豆丝大火快炒", heat: "🔥🔥🔥 大火" },
      { text: "加醋和盐调味，翻炒出锅", sense: "👀 酸辣飘香" }
    ],
  },
  {
    id: "garlic-water-spinach",
    name: "蒜蓉空心菜",
    emoji: "🥬",
    category: "快手菜",
    time: 8,
    difficulty: 1,
    tags: ["快手", "素菜", "健康"],
    desc: "蒜香浓郁的清炒空心菜",
    tools: ["🥘 炒锅"],
    ingredients: [
      { name: "空心菜", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "4瓣", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "空心菜摘洗干净，切段" }
    ],
    cook: [
      { text: "热油爆香蒜末", heat: "🔥🔥 中火" },
      { text: "放入空心菜大火快炒", heat: "🔥🔥🔥 大火" },
      { text: "加盐调味，炒软出锅", sense: "👀 菜叶变软", tip: "空心菜要大火快炒" }
    ],
  },

  // ====== 新增素食 ======
  {
    id: "cold-wood-ear-salad",
    name: "凉拌木耳",
    emoji: "🍄",
    category: "素食",
    time: 10,
    difficulty: 1,
    tags: ["凉菜", "开胃", "健康"],
    desc: "爽脆开胃的凉拌木耳",
    tools: ["大碗"],
    ingredients: [
      { name: "木耳", emoji: "🍄", amount: "100g", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "3瓣", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "辣椒油", emoji: "🌶️", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "木耳泡发洗净，焯水30秒捞出过凉" }
    ],
    cook: [
      { text: "木耳沥干，加蒜末、醋、生抽、辣椒油拌匀", sense: "👀 爽脆诱人" },
      { text: "冷藏后食用更佳", tip: "可加香菜提味" }
    ],
  },
  {
    id: "three-shred-veggie",
    name: "素炒三丝",
    emoji: "🥗",
    category: "素食",
    time: 12,
    difficulty: 1,
    tags: ["素菜", "健康", "快手"],
    desc: "色彩缤纷、清爽可口的素炒三丝",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "胡萝卜", emoji: "🥕", amount: "1根", category: "蔬菜水果" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "1个", category: "蔬菜水果" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "三种蔬菜全部切丝" }
    ],
    cook: [
      { text: "热油先炒胡萝卜丝", heat: "🔥🔥 中火" },
      { text: "加入土豆丝和青椒丝翻炒" },
      { text: "加盐调味，炒至断生出锅", sense: "👀 色彩鲜艳" }
    ],
  },
  {
    id: "tiger-skin-peppers",
    name: "虎皮青椒",
    emoji: "🫑",
    category: "素食",
    time: 10,
    difficulty: 2,
    tags: ["下饭", "素菜", "开胃"],
    desc: "表皮起皱、微辣鲜香的虎皮青椒",
    tools: ["🥘 炒锅"],
    ingredients: [
      { name: "青椒", emoji: "🫑", amount: "6个", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "3瓣", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "1勺", category: "调味料" }
    ],
    prep: [
      { text: "青椒去蒂，拍扁" }
    ],
    cook: [
      { text: "锅中不放油，干煸青椒至表皮起皱", heat: "🔥🔥 中火", sense: "👀 表皮起虎皮纹" },
      { text: "加油、蒜末、醋、生抽翻炒", tip: "干煸是虎皮的关键" },
      { text: "翻炒均匀出锅" }
    ],
  },
  {
    id: "three-earth-treasures",
    name: "地三鲜",
    emoji: "🍆",
    category: "素食",
    time: 20,
    difficulty: 2,
    tags: ["东北菜", "下饭", "素菜"],
    desc: "茄子土豆青椒的经典东北素菜",
    tools: ["🥘 炒锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "茄子", emoji: "🍆", amount: "1个", category: "蔬菜水果" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "蒜末", emoji: "🧄", amount: "3瓣", category: "调味料" },
      { name: "生抽", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "糖", emoji: "🧂", amount: "半勺", category: "调味料" }
    ],
    prep: [
      { text: "茄子切滚刀块，土豆切块，青椒切块" }
    ],
    cook: [
      { text: "土豆块炸至金黄捞出", heat: "🔥🔥🔥 大火" },
      { text: "茄子块炸软捞出" },
      { text: "锅留底油，炒香蒜末，放入所有蔬菜" },
      { text: "加生抽、糖翻炒均匀出锅", sense: "👀 色泽油亮" }
    ],
  },

  // ====== 新增汤羹 ======
  {
    id: "tomato-beef-soup",
    name: "番茄牛腩汤",
    emoji: "🍅",
    category: "汤羹",
    time: 45,
    difficulty: 3,
    tags: ["暖身", "营养", "炖汤"],
    desc: "酸甜浓郁、暖身养胃的番茄牛腩汤",
    tools: ["🥘 汤锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "牛腩", emoji: "🥩", amount: "300g", category: "肉类" },
      { name: "番茄", emoji: "🍅", amount: "3个", category: "蔬菜水果" },
      { name: "土豆", emoji: "🥔", amount: "1个", category: "蔬菜水果" },
      { name: "洋葱", emoji: "🧅", amount: "半个", category: "蔬菜水果" },
      { name: "番茄酱", emoji: "🧂", amount: "2勺", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "黑胡椒", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "牛腩切块焯水，番茄切块，土豆切块" }
    ],
    cook: [
      { text: "热油炒香洋葱，加番茄炒出汁", heat: "🔥🔥 中火", sense: "👀 番茄出沙" },
      { text: "放入牛腩和土豆，加番茄酱" },
      { text: "加热水没过食材，大火烧开转小火炖35分钟", heat: "🔥 小火", timer: 2100 },
      { text: "加盐和黑胡椒调味出锅", sense: "👃 酸甜浓郁" }
    ],
  },
  {
    id: "seaweed-egg-drop-soup",
    name: "紫菜蛋花汤",
    emoji: "🥚",
    category: "汤羹",
    time: 8,
    difficulty: 1,
    tags: ["快手", "清淡", "家常"],
    desc: "简单快手的经典紫菜蛋花汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "紫菜", emoji: "🌿", amount: "适量", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "1个", category: "蛋奶" },
      { name: "虾皮", emoji: "🦐", amount: "少许", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "紫菜撕小块，鸡蛋打散" }
    ],
    cook: [
      { text: "锅中加水烧开，放入紫菜和虾皮", heat: "🔥🔥🔥 大火" },
      { text: "淋入蛋液，加盐调味", sense: "👀 蛋花飘起", tip: "倒完不要搅" },
      { text: "滴几滴香油出锅" }
    ],
  },
  {
    id: "spinach-tofu-soup",
    name: "菠菜豆腐汤",
    emoji: "🥬",
    category: "汤羹",
    time: 10,
    difficulty: 1,
    tags: ["清淡", "健康", "快手"],
    desc: "清淡营养的菠菜豆腐汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "菠菜", emoji: "🥬", amount: "1把", category: "蔬菜水果" },
      { name: "豆腐", emoji: "🫘", amount: "1块", category: "蛋奶" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "菠菜焯水去草酸，豆腐切块" }
    ],
    cook: [
      { text: "锅中加水烧开，放入豆腐", heat: "🔥🔥 中火" },
      { text: "煮3分钟后放入菠菜" },
      { text: "加盐调味出锅", sense: "👀 清爽养眼" }
    ],
  },
  {
    id: "chicken-soup",
    name: "鸡汤",
    emoji: "🐔",
    category: "汤羹",
    time: 60,
    difficulty: 2,
    tags: ["滋补", "暖身", "经典"],
    desc: "浓郁鲜美、滋补养身的经典鸡汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "鸡", emoji: "🐔", amount: "半只", category: "肉类" },
      { name: "红枣", emoji: "🫙", amount: "5颗", category: "蔬菜水果" },
      { name: "枸杞", emoji: "🫙", amount: "适量", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "4片", category: "调味料" }
    ],
    prep: [
      { text: "鸡剁块焯水去腥" }
    ],
    cook: [
      { text: "将鸡块放入汤锅，加姜片和红枣", heat: "-" },
      { text: "加足量水，大火烧开转小火炖50分钟", heat: "🔥 小火", timer: 3000 },
      { text: "出锅前加枸杞和盐调味", sense: "👃 鸡汤浓郁" }
    ],
  },
  {
    id: "lotus-root-rib-soup",
    name: "排骨藕汤",
    emoji: "🍲",
    category: "汤羹",
    time: 60,
    difficulty: 2,
    tags: ["滋补", "湖北", "家常"],
    desc: "藕粉肉烂、汤鲜味美的排骨藕汤",
    tools: ["🥘 汤锅", "🔪 菜刀 + 砧板"],
    ingredients: [
      { name: "排骨", emoji: "🍖", amount: "300g", category: "肉类" },
      { name: "莲藕", emoji: "🥔", amount: "1节", category: "蔬菜水果" },
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" },
      { name: "盐", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "排骨焯水，莲藕去皮切块" }
    ],
    cook: [
      { text: "排骨和莲藕放入汤锅，加姜片", heat: "-" },
      { text: "加足量水，大火烧开转小火炖50分钟", heat: "🔥 小火", timer: 3000 },
      { text: "加盐调味出锅", sense: "👀 藕粉汤白" }
    ],
  },

  // ====== 饮品 ======
  {
    id: "lemon-honey-water",
    name: "柠檬蜂蜜水",
    emoji: "🍋",
    category: "饮品",
    time: 5,
    difficulty: 1,
    tags: ["健康", "清爽", "日常"],
    desc: "酸甜清爽的日常养生饮品",
    tools: ["杯子"],
    ingredients: [
      { name: "柠檬", emoji: "🍋", amount: "半个", category: "蔬菜水果" },
      { name: "蜂蜜", emoji: "🍯", amount: "2勺", category: "调味料" }
    ],
    prep: [
      { text: "柠檬切片" }
    ],
    cook: [
      { text: "杯中放入柠檬片，加温水", tip: "水温不超过60度，保留维C" },
      { text: "加入蜂蜜搅匀即可", sense: "👃 清新柠檬香" }
    ],
  },
  {
    id: "passion-fruit-tea",
    name: "百香果茶",
    emoji: "🍵",
    category: "饮品",
    time: 8,
    difficulty: 1,
    tags: ["清爽", "酸甜", "下午茶"],
    desc: "酸甜芬芳的百香果茶",
    tools: ["杯子", "壶"],
    ingredients: [
      { name: "百香果", emoji: "🍊", amount: "2个", category: "蔬菜水果" },
      { name: "蜂蜜", emoji: "🍯", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "百香果对半切开，挖出果肉" }
    ],
    cook: [
      { text: "百香果肉放入杯中" },
      { text: "加温水和蜂蜜搅匀", sense: "👃 浓郁果香" }
    ],
  },
  {
    id: "rock-sugar-pear",
    name: "冰糖雪梨",
    emoji: "🍐",
    category: "饮品",
    time: 20,
    difficulty: 1,
    tags: ["润肺", "甜品", "秋冬"],
    desc: "润肺止咳、清甜可口的冰糖雪梨",
    tools: ["🥘 小锅"],
    ingredients: [
      { name: "雪梨", emoji: "🍐", amount: "2个", category: "蔬菜水果" },
      { name: "冰糖", emoji: "🧂", amount: "30g", category: "调味料" },
      { name: "枸杞", emoji: "🫙", amount: "少许", category: "蔬菜水果" }
    ],
    prep: [
      { text: "雪梨去皮去核切块" }
    ],
    cook: [
      { text: "锅中加水，放入梨块和冰糖", heat: "🔥🔥 中火" },
      { text: "大火烧开转小火煮15分钟", heat: "🔥 小火", timer: 900 },
      { text: "出锅前加枸杞", sense: "👀 汤汁清甜" }
    ],
  },
  {
    id: "sour-plum-drink",
    name: "酸梅汤",
    emoji: "🫙",
    category: "饮品",
    time: 30,
    difficulty: 1,
    tags: ["消暑", "经典", "夏日"],
    desc: "酸甜解暑的经典酸梅汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "乌梅", emoji: "🫙", amount: "30g", category: "调味料" },
      { name: "山楂", emoji: "🍎", amount: "20g", category: "调味料" },
      { name: "甘草", emoji: "🌿", amount: "5g", category: "调味料" },
      { name: "冰糖", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "桂花", emoji: "🌸", amount: "少许", category: "调味料" }
    ],
    prep: [
      { text: "乌梅、山楂、甘草洗净浸泡30分钟" }
    ],
    cook: [
      { text: "锅中加水，放入乌梅、山楂、甘草", heat: "🔥🔥 中火" },
      { text: "大火烧开转小火煮20分钟", heat: "🔥 小火", timer: 1200 },
      { text: "加冰糖调味，过滤后冷藏", tip: "冷藏后风味更佳" },
      { text: "撒桂花点缀", sense: "👀 色泽深红" }
    ],
  },
  {
    id: "mung-bean-soup",
    name: "绿豆汤",
    emoji: "🫘",
    category: "饮品",
    time: 40,
    difficulty: 1,
    tags: ["消暑", "夏日", "经典"],
    desc: "清热解暑的经典绿豆汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "绿豆", emoji: "🫘", amount: "100g", category: "主食" },
      { name: "冰糖", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "绿豆提前浸泡2小时", tip: "泡过的绿豆更容易煮烂" }
    ],
    cook: [
      { text: "锅中加水，放入绿豆大火烧开", heat: "🔥🔥🔥 大火" },
      { text: "转小火煮30分钟至绿豆开花", heat: "🔥 小火", timer: 1800 },
      { text: "加冰糖调味，冷藏更佳", sense: "👀 绿豆开花" }
    ],
  },
  {
    id: "osmanthus-plum-drink",
    name: "桂花酸梅汤",
    emoji: "🌸",
    category: "饮品",
    time: 30,
    difficulty: 1,
    tags: ["消暑", "花香", "夏日"],
    desc: "桂花飘香的升级版酸梅汤",
    tools: ["🥘 汤锅"],
    ingredients: [
      { name: "乌梅", emoji: "🫙", amount: "30g", category: "调味料" },
      { name: "山楂", emoji: "🍎", amount: "20g", category: "调味料" },
      { name: "桂花", emoji: "🌸", amount: "1勺", category: "调味料" },
      { name: "冰糖", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "乌梅和山楂洗净浸泡" }
    ],
    cook: [
      { text: "锅中加水，放入乌梅和山楂煮20分钟", heat: "🔥 小火", timer: 1200 },
      { text: "加冰糖和桂花，再煮5分钟" },
      { text: "过滤后冷藏，撒桂花点缀", sense: "👃 桂花飘香" }
    ],
  },
  {
    id: "watermelon-juice",
    name: "西瓜汁",
    emoji: "🍉",
    category: "饮品",
    time: 5,
    difficulty: 1,
    tags: ["消暑", "夏日", "鲜榨"],
    desc: "清甜解暑的鲜榨西瓜汁",
    tools: ["榨汁机"],
    ingredients: [
      { name: "西瓜", emoji: "🍉", amount: "500g", category: "蔬菜水果" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "西瓜去皮切块" }
    ],
    cook: [
      { text: "西瓜块放入榨汁机", tip: "不需要额外加水" },
      { text: "加冰块一起打碎", sense: "👀 鲜红诱人" }
    ],
  },
  {
    id: "mango-milkshake",
    name: "芒果奶昔",
    emoji: "🥭",
    category: "饮品",
    time: 5,
    difficulty: 1,
    tags: ["甜品", "热带", "下午茶"],
    desc: "香甜浓郁的芒果奶昔",
    tools: ["榨汁机"],
    ingredients: [
      { name: "芒果", emoji: "🥭", amount: "2个", category: "蔬菜水果" },
      { name: "牛奶", emoji: "🥛", amount: "200ml", category: "蛋奶" }
    ],
    prep: [
      { text: "芒果去皮去核切块" }
    ],
    cook: [
      { text: "芒果和牛奶一起放入榨汁机", tip: "喜欢冰的可加冰块" },
      { text: "打至顺滑即可", sense: "👀 金黄诱人" }
    ],
  },
  {
    id: "peach-iced-tea",
    name: "蜜桃冰茶",
    emoji: "🍑",
    category: "饮品",
    time: 8,
    difficulty: 1,
    tags: ["清爽", "夏日", "下午茶"],
    desc: "甜蜜清爽的蜜桃冰茶",
    tools: ["杯子", "壶"],
    ingredients: [
      { name: "桃子", emoji: "🍑", amount: "1个", category: "蔬菜水果" },
      { name: "红茶", emoji: "🍵", amount: "1包", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "桃子切块，红茶泡好放凉" }
    ],
    cook: [
      { text: "杯中放入桃块和冰块" },
      { text: "倒入红茶，搅匀即可", sense: "👀 粉嫩诱人" }
    ],
  },
  {
    id: "coconut-sago-drink",
    name: "椰汁西米露",
    emoji: "🥥",
    category: "饮品",
    time: 20,
    difficulty: 1,
    tags: ["甜品", "热带", "经典"],
    desc: "香甜顺滑的椰汁西米露",
    tools: ["🥘 小锅", "杯子"],
    ingredients: [
      { name: "西米", emoji: "🍚", amount: "50g", category: "主食" },
      { name: "椰汁", emoji: "🥥", amount: "200ml", category: "蛋奶" },
      { name: "糖", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "西米用清水泡10分钟" }
    ],
    cook: [
      { text: "锅中水烧开，放入西米煮至透明", heat: "🔥🔥 中火", timer: 900, tip: "边煮边搅防粘" },
      { text: "捞出过凉水", sense: "👀 颗颗透明" },
      { text: "加入椰汁和糖搅匀，冷藏更佳" }
    ],
  },
  {
    id: "ginger-date-tea",
    name: "姜枣茶",
    emoji: "🫚",
    category: "饮品",
    time: 15,
    difficulty: 1,
    tags: ["暖身", "养生", "秋冬"],
    desc: "暖胃驱寒的姜枣茶",
    tools: ["🥘 小锅"],
    ingredients: [
      { name: "生姜", emoji: "🫚", amount: "3片", category: "调味料" },
      { name: "红枣", emoji: "🫙", amount: "5颗", category: "蔬菜水果" },
      { name: "红糖", emoji: "🧂", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "生姜切片，红枣去核" }
    ],
    cook: [
      { text: "锅中加水，放入姜片和红枣", heat: "🔥🔥 中火" },
      { text: "大火烧开转小火煮10分钟", heat: "🔥 小火", timer: 600 },
      { text: "加红糖搅匀即可", sense: "👃 姜香温暖" }
    ],
  },
  {
    id: "osmanthus-rice-wine",
    name: "桂花酒酿",
    emoji: "🌸",
    category: "饮品",
    time: 10,
    difficulty: 1,
    tags: ["甜品", "花香", "传统"],
    desc: "桂花飘香的甜润酒酿",
    tools: ["🥘 小锅"],
    ingredients: [
      { name: "酒酿", emoji: "🍶", amount: "200g", category: "调味料" },
      { name: "桂花", emoji: "🌸", amount: "1勺", category: "调味料" },
      { name: "枸杞", emoji: "🫙", amount: "少许", category: "蔬菜水果" }
    ],
    prep: [
      { text: "枸杞泡软" }
    ],
    cook: [
      { text: "锅中加水烧开，放入酒酿", heat: "🔥🔥 中火" },
      { text: "煮沸后加枸杞和桂花" },
      { text: "搅匀即可出锅", sense: "👃 桂花酒香" }
    ],
  },
  {
    id: "mojito",
    name: "莫吉托",
    emoji: "🍹",
    category: "饮品",
    time: 5,
    difficulty: 1,
    tags: ["鸡尾酒", "清爽", "夏日"],
    desc: "清新薄荷与青柠的经典鸡尾酒",
    tools: ["杯子"],
    ingredients: [
      { name: "白朗姆酒", emoji: "🍸", amount: "45ml", category: "调味料" },
      { name: "青柠", emoji: "🍋", amount: "半个", category: "蔬菜水果" },
      { name: "薄荷叶", emoji: "🌿", amount: "6片", category: "蔬菜水果" },
      { name: "糖浆", emoji: "🧂", amount: "15ml", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "青柠切角，薄荷叶拍醒" }
    ],
    cook: [
      { text: "杯中放入薄荷叶和青柠角捣压", tip: "轻轻捣压释放香气，不要捣碎" },
      { text: "加糖浆、朗姆酒和冰块" },
      { text: "倒入苏打水搅匀，薄荷叶点缀", sense: "👀 清新翠绿" }
    ],
  },
  {
    id: "long-island-iced-tea",
    name: "长岛冰茶",
    emoji: "🍸",
    category: "饮品",
    time: 5,
    difficulty: 2,
    tags: ["鸡尾酒", "烈酒", "派对"],
    desc: "看似茶饮实则烈性的经典鸡尾酒",
    tools: ["杯子", "摇酒器"],
    ingredients: [
      { name: "伏特加", emoji: "🍸", amount: "15ml", category: "调味料" },
      { name: "白朗姆酒", emoji: "🍸", amount: "15ml", category: "调味料" },
      { name: "金酒", emoji: "🍸", amount: "15ml", category: "调味料" },
      { name: "龙舌兰", emoji: "🍸", amount: "15ml", category: "调味料" },
      { name: "君度", emoji: "🍸", amount: "15ml", category: "调味料" },
      { name: "糖浆", emoji: "🧂", amount: "15ml", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "准备摇酒器和冰块" }
    ],
    cook: [
      { text: "所有酒类和糖浆倒入摇酒器加冰" },
      { text: "shake均匀，滤入杯中" },
      { text: "加冰，补少许可乐调色", sense: "👀 色泽如茶" }
    ],
  },
  {
    id: "whiskey-sour",
    name: "威士忌酸",
    emoji: "🥃",
    category: "饮品",
    time: 5,
    difficulty: 2,
    tags: ["鸡尾酒", "经典", "酸甜"],
    desc: "酸甜平衡的经典威士忌鸡尾酒",
    tools: ["杯子", "摇酒器"],
    ingredients: [
      { name: "威士忌", emoji: "🥃", amount: "45ml", category: "调味料" },
      { name: "柠檬", emoji: "🍋", amount: "半个", category: "蔬菜水果" },
      { name: "糖浆", emoji: "🧂", amount: "15ml", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "柠檬榨汁" }
    ],
    cook: [
      { text: "威士忌、柠檬汁、糖浆倒入摇酒器加冰" },
      { text: "shake均匀，滤入杯中" },
      { text: "柠檬片点缀", sense: "👀 琥珀色泽" }
    ],
  },
  {
    id: "manhattan",
    name: "曼哈顿",
    emoji: "🍸",
    category: "饮品",
    time: 5,
    difficulty: 2,
    tags: ["鸡尾酒", "经典", "优雅"],
    desc: "优雅深沉的经典鸡尾酒",
    tools: ["杯子", "调酒杯"],
    ingredients: [
      { name: "威士忌", emoji: "🥃", amount: "45ml", category: "调味料" },
      { name: "苦精", emoji: "🧂", amount: "2滴", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "准备调酒杯和冰块" }
    ],
    cook: [
      { text: "威士忌和苦精倒入调酒杯加冰" },
      { text: "搅拌均匀，滤入杯中" },
      { text: "樱桃点缀", sense: "👀 深邃优雅" }
    ],
  },
  {
    id: "margarita",
    name: "玛格丽特",
    emoji: "🍹",
    category: "饮品",
    time: 5,
    difficulty: 2,
    tags: ["鸡尾酒", "派对", "经典"],
    desc: "盐边杯口的经典龙舌兰鸡尾酒",
    tools: ["杯子", "摇酒器"],
    ingredients: [
      { name: "龙舌兰", emoji: "🍸", amount: "45ml", category: "调味料" },
      { name: "君度", emoji: "🍸", amount: "20ml", category: "调味料" },
      { name: "青柠", emoji: "🍋", amount: "半个", category: "蔬菜水果" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "杯口用青柠擦湿，蘸盐边" }
    ],
    cook: [
      { text: "龙舌兰、君度、青柠汁倒入摇酒器加冰" },
      { text: "shake均匀，滤入盐边杯" },
      { text: "青柠片点缀", sense: "👀 经典盐边" }
    ],
  },
  {
    id: "negroni",
    name: "内格罗尼",
    emoji: "🍹",
    category: "饮品",
    time: 5,
    difficulty: 2,
    tags: ["鸡尾酒", "经典", "苦甜"],
    desc: "苦甜均衡的经典意式鸡尾酒",
    tools: ["杯子", "调酒杯"],
    ingredients: [
      { name: "金酒", emoji: "🍸", amount: "30ml", category: "调味料" },
      { name: "苦精", emoji: "🧂", amount: "30ml", category: "调味料" },
      { name: "君度", emoji: "🍸", amount: "30ml", category: "调味料" },
      { name: "冰块", emoji: "🧊", amount: "适量", category: "调味料" }
    ],
    prep: [
      { text: "准备调酒杯和冰块" }
    ],
    cook: [
      { text: "三种酒倒入调酒杯加冰" },
      { text: "搅拌均匀，滤入杯中" },
      { text: "橙皮点缀，挤出精油", sense: "👀 橙红诱人" }
    ],
  },

]

// ====== 节气数据 ======
export interface SolarTerm {
  name: string
  emoji: string
  season: "春" | "夏" | "秋" | "冬"
  advice: string
  recommend: string[] // dish ids
}

export const CURRENT_TERM: SolarTerm = (() => {
  const SOLAR_TERMS: { name: string; emoji: string; season: SolarTerm["season"]; month: number; day: number; advice: string; recommend: string[] }[] = [
    { name: "小寒", emoji: "🥶", season: "冬", month: 1, day: 6, advice: "天寒地冻，温阳散寒，宜腊八粥、羊肉、萝卜。", recommend: ["braised-pork", "white-radish-soup", "corn-rib-soup"] },
    { name: "大寒", emoji: "🧊", season: "冬", month: 1, day: 20, advice: "一年最冷，藏精养神，宜八宝粥、羊肉、核桃。", recommend: ["braised-pork", "millet-congee", "white-radish-soup"] },
    { name: "立春", emoji: "🌱", season: "春", month: 2, day: 4, advice: "万物复苏，养肝为先，宜韭菜、豆芽、春笋。", recommend: ["stirfry-veg", "egg-fried-rice", "tomato-egg"] },
    { name: "雨水", emoji: "🌧️", season: "春", month: 2, day: 19, advice: "春寒料峭，温补脾胃，宜山药、红枣、蜂蜜。", recommend: ["millet-congee", "steamed-egg", "tomato-soup"] },
    { name: "惊蛰", emoji: "⚡", season: "春", month: 3, day: 6, advice: "春雷响，养阳气，宜梨、银耳、菠菜。", recommend: ["stirfry-veg", "tomato-soup", "cucumber"] },
    { name: "春分", emoji: "🌸", season: "春", month: 3, day: 21, advice: "阴阳平衡，调和脾胃，宜香椿、荠菜、豆腐。", recommend: ["mapo-tofu", "tomato-egg", "stir-celery-lily"] },
    { name: "清明", emoji: "🍃", season: "春", month: 4, day: 5, advice: "踏青时节，养肝明目，宜菠菜、菊花茶。", recommend: ["stirfry-veg", "fish-tofu-soup", "cucumber"] },
    { name: "谷雨", emoji: "🌾", season: "春", month: 4, day: 20, advice: "雨生百谷，健脾祛湿，宜香椿、冬瓜。", recommend: ["winter-melon-soup", "stirfry-veg", "tomato-egg"] },
    { name: "立夏", emoji: "☀️", season: "夏", month: 5, day: 6, advice: "养心安神，清热消暑，宜莲子、绿豆、苦瓜。", recommend: ["cucumber", "tomato-soup", "cold-noodle"] },
    { name: "小满", emoji: "🌿", season: "夏", month: 5, day: 21, advice: "湿热渐重，健脾利湿，宜冬瓜、黄瓜、番茄。", recommend: ["cucumber", "winter-melon-soup", "stirfry-veg"] },
    { name: "芒种", emoji: "🌾", season: "夏", month: 6, day: 6, advice: "忙种忙收，养心护阳，宜酸梅汤、西瓜、绿豆。", recommend: ["cold-noodle", "cucumber", "tomato-soup"] },
    { name: "夏至", emoji: "🌞", season: "夏", month: 6, day: 22, advice: "阳气最盛，清热养阴，宜面条、莲藕、绿豆。", recommend: ["cold-noodle", "egg-fried-rice", "stirfry-veg"] },
    { name: "小暑", emoji: "🌡️", season: "夏", month: 7, day: 7, advice: "温风至，解暑降温，宜荷叶粥、西瓜、苦瓜。", recommend: ["cucumber", "cold-noodle", "tomato-soup"] },
    { name: "大暑", emoji: "🔥", season: "夏", month: 7, day: 23, advice: "最热时节，消暑祛湿，宜绿豆汤、酸梅汤、冬瓜。", recommend: ["winter-melon-soup", "cucumber", "tomato-soup"] },
    { name: "立秋", emoji: "🍂", season: "秋", month: 8, day: 7, advice: "贴秋膘，养肺润燥，宜南瓜、莲藕、银耳。", recommend: ["braised-pork", "garlic-eggplant", "stirfry-veg"] },
    { name: "处暑", emoji: "🍁", season: "秋", month: 8, day: 23, advice: "暑气渐消，滋阴润肺，宜百合、梨、蜂蜜。", recommend: ["stir-celery-lily", "steamed-egg", "fish-tofu-soup"] },
    { name: "白露", emoji: "💧", season: "秋", month: 9, day: 8, advice: "露凝而白，养肺生津，宜梨、百合、山药。", recommend: ["stir-celery-lily", "steamed-egg", "white-radish-soup"] },
    { name: "秋分", emoji: "🌙", season: "秋", month: 9, day: 23, advice: "昼夜等分，调和阴阳，宜螃蟹、莲藕、银耳。", recommend: ["boiled-fish", "stirfry-veg", "garlic-eggplant"] },
    { name: "寒露", emoji: "🌫️", season: "秋", month: 10, day: 8, advice: "寒气渐重，温补为宜，宜牛肉、羊肉、山药。", recommend: ["braised-pork", "twice-cooked-pork", "white-radish-soup"] },
    { name: "霜降", emoji: "❄️", season: "秋", month: 10, day: 23, advice: "秋冬进补，养精蓄锐，宜萝卜、牛肉、栗子。", recommend: ["braised-pork", "white-radish-soup", "corn-rib-soup"] },
    { name: "立冬", emoji: "🧣", season: "冬", month: 11, day: 7, advice: "冬藏养精，温补肾阳，宜饺子、羊肉、黑豆。", recommend: ["braised-pork", "white-radish-soup", "mapo-tofu"] },
    { name: "小雪", emoji: "🌨️", season: "冬", month: 11, day: 22, advice: "温补御寒，养肾固精，宜牛肉、栗子、红薯。", recommend: ["braised-pork", "twice-cooked-pork", "corn-rib-soup"] },
    { name: "大雪", emoji: "❄️", season: "冬", month: 12, day: 7, advice: "温补为主，护阳驱寒，宜羊肉、红枣、桂圆。", recommend: ["braised-pork", "white-radish-soup", "braised-chicken-wing"] },
    { name: "冬至", emoji: "🥟", season: "冬", month: 12, day: 22, advice: "一阳初生，进补最佳，宜饺子、汤圆、羊肉。", recommend: ["braised-pork", "mapo-tofu", "egg-fried-rice"] },
  ]
  const now = new Date()
  const m = now.getMonth() + 1
  const d = now.getDate()
  let current = SOLAR_TERMS[0]
  for (let i = 0; i < SOLAR_TERMS.length; i++) {
    const t = SOLAR_TERMS[i]
    if (t.month === 1 && m !== 1) continue
    if (m < t.month) break
    if (m > t.month) { current = t; continue }
    if (d >= t.day) { current = t }
  }
  return { name: current.name, emoji: current.emoji, season: current.season, advice: current.advice, recommend: current.recommend }
})()

export function getTodayString(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth() + 1
  const d = now.getDate()
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  return `${y}年${m}月${d}日 ${weekdays[now.getDay()]}`
}

export const SEASON_LABEL: Record<SolarTerm["season"], { label: string; color: string }> = {
  春: { label: "春 · 生发", color: "text-season-spring" },
  夏: { label: "夏 · 清热", color: "text-season-summer" },
  秋: { label: "秋 · 润燥", color: "text-season-autumn" },
  冬: { label: "冬 · 进补", color: "text-season-winter" },
}

// ====== 食材图鉴 ======
export type Rarity = "普通" | "稀有" | "史诗" | "传说"
export interface CatalogItem {
  name: string
  emoji: string
  rarity: Rarity
  nutrition: string
  tip: string
}

export const RARITY_STYLE: Record<Rarity, { color: string; bg: string }> = {
  普通: { color: "text-rare-common", bg: "bg-rare-common" },
  稀有: { color: "text-rare-rare", bg: "bg-rare-rare" },
  史诗: { color: "text-rare-epic", bg: "bg-rare-epic" },
  传说: { color: "text-rare-legend", bg: "bg-rare-legend" },
}

export const CATALOG: CatalogItem[] = [
  { name: "番茄", emoji: "🍅", rarity: "普通", nutrition: "富含番茄红素与维C，抗氧化护肤。", tip: "选沉手、蒂部翠绿、自然红的更甜。" },
  { name: "鸡蛋", emoji: "🥚", rarity: "普通", nutrition: "优质蛋白质，氨基酸齐全。", tip: "摇晃无声、表面粗糙的更新鲜。" },
  { name: "黄瓜", emoji: "🥒", rarity: "普通", nutrition: "高水分低热量，清热利尿。", tip: "带刺挺直、颜色深绿的更脆嫩。" },
  { name: "青菜", emoji: "🥬", rarity: "普通", nutrition: "膳食纤维与钙铁丰富。", tip: "叶片挺括无黄叶的最新鲜。" },
  { name: "豆腐", emoji: "🧈", rarity: "稀有", nutrition: "植物蛋白与钙的好来源。", tip: "闻起来有豆香、无酸味为佳。" },
  { name: "鸡胸肉", emoji: "🍗", rarity: "稀有", nutrition: "高蛋白低脂肪，健身首选。", tip: "色泽淡粉、有弹性不黏手。" },
  { name: "花生米", emoji: "🥜", rarity: "稀有", nutrition: "健康脂肪与维E，补充能量。", tip: "颗粒饱满、无霉变异味。" },
  { name: "五花肉", emoji: "🥓", rarity: "史诗", nutrition: "肥瘦相间，红烧炖煮香浓。", tip: "三层分明、肥瘦比例均匀最佳。" },
  { name: "冰糖", emoji: "🍬", rarity: "史诗", nutrition: "炒糖色上色提亮，润肺。", tip: "单晶冰糖更易融化炒色。" },
  { name: "干辣椒", emoji: "🌶️", rarity: "史诗", nutrition: "辣椒素促进代谢开胃。", tip: "颜色暗红、干燥不潮的香。" },
  { name: "八角", emoji: "🌟", rarity: "传说", nutrition: "去腥增香的灵魂香料。", tip: "八个角完整、香味浓郁为上品。" },
  { name: "藏红花", emoji: "🌺", rarity: "传说", nutrition: "活血养颜，名贵香料之王。", tip: "丝长色红、入水染金黄者为真。" },
]

// ====== 成就 ======
export interface Achievement {
  id: string
  name: string
  emoji: string
  desc: string
  unlocked: boolean
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-cook", name: "初入厨房", emoji: "🍳", desc: "完成第一道菜", unlocked: true },
  { id: "shopper", name: "买菜达人", emoji: "🛒", desc: "完成一次完整买菜", unlocked: true },
  { id: "combo-3", name: "三连击", emoji: "🔥", desc: "连续完成3道菜不出错", unlocked: false },
  { id: "rich", name: "小富翁", emoji: "💰", desc: "累计获得1000金币", unlocked: false },
  { id: "veggie", name: "素食主义", emoji: "🥬", desc: "完成5道素食", unlocked: false },
  { id: "hard-dish", name: "硬菜大师", emoji: "🥩", desc: "完成一道5星难度硬菜", unlocked: false },
  { id: "collector", name: "图鉴收藏家", emoji: "📖", desc: "解锁全部食材图鉴", unlocked: false },
  { id: "early-bird", name: "早起鸟", emoji: "🌅", desc: "在早上6点前做早餐", unlocked: false },
  { id: "soup-master", name: "汤神", emoji: "🍲", desc: "完成10道汤羹", unlocked: false },
]

export const CATEGORIES: (Category | "全部")[] = ["全部", "家常菜", "快手菜", "硬菜", "汤羹", "素食", "饮品", "主食"]
export const TIME_FILTERS = ["不限", "15分钟", "30分钟", "1小时"] as const

export const SHOP_TIPS = [
  "🥬 叶菜要选叶片挺括、根部湿润的",
  "🍅 番茄选自然红、蒂部翠绿的更甜",
  "🥩 肉类按色泽和弹性判断新鲜度",
  "🧂 调味料备齐，下厨不慌张",
  "🥚 鸡蛋摇晃无声的更新鲜",
  "🛒 按分类采购，效率翻倍",
]

export function getDish(id: string): Dish | undefined {
  return DISHES.find((d) => d.id === id)
}

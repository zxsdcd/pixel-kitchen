const fs = require('fs');
const path = require('path');

// 读取主文件
const mainFile = path.join(__dirname, 'lib', 'game-data.ts');
const content = fs.readFileSync(mainFile, 'utf8');

// 找到插入位置（DISHES 数组的结束 ] 之前）
const lines = content.split('\n');
let insertIndex = -1;

// 找到最后一个菜品对象结束的位置
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].trim() === ']') {
    // 往前找最后一个菜品对象结束的位置
    for (let j = i - 1; j >= 0; j--) {
      if (lines[j].trim() === '},') {
        insertIndex = j + 1;
        break;
      }
    }
    break;
  }
}

if (insertIndex === -1) {
  console.error('未找到插入位置');
  process.exit(1);
}

console.log(`在第 ${insertIndex + 1} 行插入新菜品`);

// 新菜品数据（直接写在代码中）
const newDishes = `  {
    id: "scrambled-eggs-with-tomato-v2",
    name: "西红柿炒鸡蛋",
    emoji: "🍅",
    category: "家常菜",
    time: 12,
    difficulty: 1,
    tags: ["下饭", "快手", "新手友好", "经典"],
    desc: "国民家常菜第一名，酸甜开胃，百吃不腻。",
    tools: ["🍳 炒锅", "🥣 碗"],
    ingredients: [
      { name: "西红柿", emoji: "🍅", amount: "2个", category: "蔬菜水果" },
      { name: "鸡蛋", emoji: "🥚", amount: "3个", category: "蛋奶" },
      { name: "小葱", emoji: "🌿", amount: "2根", category: "蔬菜水果" },
      { name: "白糖", emoji: "🍚", amount: "1小勺", category: "调味料" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "2勺", category: "调味料" },
    ],
    prep: [
      { text: "西红柿洗净，顶部划十字，开水烫30秒去皮切块", tip: "去皮口感更好" },
      { text: "鸡蛋打入碗中，加少许盐搅散", tip: "加一勺清水蛋更嫩" },
      { text: "小葱切葱花，葱白葱绿分开" },
    ],
    cook: [
      { text: "热锅凉油，倒入蛋液，蛋液凝固后铲碎盛出", heat: "🔥🔥 中火", sense: "👀 蛋液鼓泡凝固", tip: "别炒太老", timer: 60 },
      { text: "底油下葱白爆香，倒入西红柿翻炒出汁", heat: "🔥🔥 中火", sense: "👀 番茄变软出红汤", timer: 120 },
      { text: "加糖、盐调味，倒回鸡蛋翻炒均匀", heat: "🔥 大火", tip: "糖能中和酸味" },
      { text: "撒葱花出锅装盘", sense: "👃 香味扑鼻" },
    ],
  },
  {
    id: "shredded-potato-with-green-pepper",
    name: "青椒土豆丝",
    emoji: "🥔",
    category: "家常菜",
    time: 15,
    difficulty: 1,
    tags: ["下饭", "快手", "新手友好"],
    desc: "清脆爽口的土豆丝配上青椒，简单又好吃。",
    tools: ["🔪 菜刀 + 砧板", "🍳 炒锅"],
    ingredients: [
      { name: "土豆", emoji: "🥔", amount: "2个", category: "蔬菜水果" },
      { name: "青椒", emoji: "🫑", amount: "2个", category: "蔬菜水果" },
      { name: "干辣椒", emoji: "🌶️", amount: "3个", category: "调味料" },
      { name: "花椒", emoji: "🫚", amount: "少许", category: "调味料" },
      { name: "醋", emoji: "🧂", amount: "1勺", category: "调味料" },
      { name: "食盐", emoji: "🧂", amount: "适量", category: "调味料" },
      { name: "食用油", emoji: "🫗", amount: "2勺", category: "调味料" },
    ],
    prep: [
      { text: "土豆去皮切细丝，泡入清水中去除淀粉", tip: "泡水后更脆" },
      { text: "青椒去籽切丝" },
      { text: "干辣椒剪段" },
    ],
    cook: [
      { text: "热锅下油，小火爆香花椒和干辣椒", heat: "🔥 小火", sense: "👃 辣椒出香", timer: 30 },
      { text: "捞出土豆丝沥干，大火快炒", heat: "🔥🔥🔥 大火", tip: "大火快炒保持脆度", timer: 120 },
      { text: "加入青椒丝翻炒，沿锅边淋入醋", heat: "🔥🔥🔥 大火" },
      { text: "加盐调味，翻炒均匀出锅", sense: "👀 青椒断生" },
    ],
  }`;

// 构建新内容
const newLines = [
  ...lines.slice(0, insertIndex),
  newDishes,
  ...lines.slice(insertIndex)
];

// 写入新文件
const newContent = newLines.join('\n');
fs.writeFileSync(path.join(__dirname, 'lib', 'game-data-new.ts'), newContent, 'utf8');

console.log('已创建新文件 lib/game-data-new.ts');
console.log(`文件大小: ${Buffer.byteLength(newContent, 'utf8')} 字节`);

// 统计菜品数量
const dishCount = (newContent.match(/^\s+id: "/gm) || []).length;
console.log(`总菜品数: ${dishCount}`);

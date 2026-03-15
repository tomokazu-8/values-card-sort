// =============================================
// 価値観データ（Miller et al., 2011）
// =============================================
const VALUES = [
  { id:  1, ja: "受容",         en: "Acceptance",    desc: "ありのままの自分として受け入れられること" },
  { id:  2, ja: "正確さ",       en: "Accuracy",      desc: "意見や信念において正しくあること" },
  { id:  3, ja: "達成",         en: "Achievement",   desc: "重要な成果を上げること" },
  { id:  4, ja: "冒険",         en: "Adventure",     desc: "新しくわくわくする体験をすること" },
  { id:  5, ja: "芸術",         en: "Art",           desc: "芸術を鑑賞したり自己表現すること" },
  { id:  6, ja: "魅力",         en: "Attractiveness",desc: "外見的に魅力的であること" },
  { id:  7, ja: "権威",         en: "Authority",     desc: "他者を統率する立場にあること" },
  { id:  8, ja: "自律",         en: "Autonomy",      desc: "自己決定し独立していること" },
  { id:  9, ja: "美",           en: "Beauty",        desc: "身の回りの美しさを鑑賞すること" },
  { id: 10, ja: "帰属",         en: "Belonging",     desc: "仲間の一員であるという感覚を持つこと" },
  { id: 11, ja: "思いやり",     en: "Caring",        desc: "他者の世話をすること" },
  { id: 12, ja: "挑戦",         en: "Challenge",     desc: "難しい課題や問題に取り組むこと" },
  { id: 13, ja: "快適",         en: "Comfort",       desc: "心地よく快適な生活を送ること" },
  { id: 14, ja: "献身",         en: "Commitment",    desc: "持続的で意味ある約束をすること" },
  { id: 15, ja: "慈悲",         en: "Compassion",    desc: "他者への関心を感じ行動すること" },
  { id: 16, ja: "複雑さ",       en: "Complexity",    desc: "人生の複雑さを受け入れること" },
  { id: 17, ja: "妥協・調和",   en: "Compromise",    desc: "合意に向けて譲り合う意志を持つこと" },
  { id: 18, ja: "貢献",         en: "Contribution",  desc: "世界に永続的な貢献をすること" },
  { id: 19, ja: "協力",         en: "Cooperation",   desc: "他者と協働すること" },
  { id: 20, ja: "勇気",         en: "Courage",       desc: "逆境に勇敢かつ力強く立ち向かうこと" },
  { id: 21, ja: "礼儀",         en: "Courtesy",      desc: "他者に対して思いやりと礼儀を持つこと" },
  { id: 22, ja: "創造性",       en: "Creativity",    desc: "新しいものやアイデアを生み出すこと" },
  { id: 23, ja: "好奇心",       en: "Curiosity",     desc: "新しいことを求め、体験し、学ぶこと" },
  { id: 24, ja: "信頼性",       en: "Dependability", desc: "頼りになり信頼されること" },
  { id: 25, ja: "勤勉",         en: "Diligence",     desc: "何事にも徹底的かつ誠実に取り組むこと" },
  { id: 26, ja: "義務",         en: "Duty",          desc: "自分の務めと義務を果たすこと" },
  { id: 27, ja: "環境",         en: "Ecology",       desc: "環境と調和して生きること" },
  { id: 28, ja: "興奮",         en: "Excitement",    desc: "スリルと刺激に満ちた生活を送ること" },
  { id: 29, ja: "誠実・忠実",   en: "Faithfulness",  desc: "人間関係において誠実で真摯であること" },
  { id: 30, ja: "名声",         en: "Fame",          desc: "広く知られ認められること" },
  { id: 31, ja: "家族",         en: "Family",        desc: "幸福で愛情ある家族を持つこと" },
  { id: 32, ja: "体力",         en: "Fitness",       desc: "身体的に健康で強くあること" },
  { id: 33, ja: "柔軟性",       en: "Flexibility",   desc: "新しい状況に容易に適応すること" },
  { id: 34, ja: "許し",         en: "Forgiveness",   desc: "他者を許すこと" },
  { id: 35, ja: "自由",         en: "Freedom",       desc: "不当な制約や制限から解放されること" },
  { id: 36, ja: "友情",         en: "Friendship",    desc: "親密で支え合える友人を持つこと" },
  { id: 37, ja: "楽しみ",       en: "Fun",           desc: "遊び、楽しむこと" },
  { id: 38, ja: "寛大さ",       en: "Generosity",    desc: "自分の持つものを他者に与えること" },
  { id: 39, ja: "真摯さ",       en: "Genuineness",   desc: "自分自身に忠実な行動をとること" },
  { id: 40, ja: "神の意志",     en: "God's Will",    desc: "神の意志を求め、従うこと" },
  { id: 41, ja: "感謝",         en: "Gratitude",     desc: "感謝の気持ちを持つこと" },
  { id: 42, ja: "成長",         en: "Growth",        desc: "変化し続け、成長し続けること" },
  { id: 43, ja: "健康",         en: "Health",        desc: "身体的に健康であること" },
  { id: 44, ja: "誠実",         en: "Honesty",       desc: "正直で真実であること" },
  { id: 45, ja: "希望",         en: "Hope",          desc: "ポジティブで楽観的な見通しを保つこと" },
  { id: 46, ja: "謙虚さ",       en: "Humility",      desc: "控えめで謙虚であること" },
  { id: 47, ja: "ユーモア",     en: "Humor",         desc: "自分や世界のおかしみに気づくこと" },
  { id: 48, ja: "想像力",       en: "Imagination",   desc: "夢を持ち、可能性を見出すこと" },
  { id: 49, ja: "独立",         en: "Independence",  desc: "他者に依存しないこと" },
  { id: 50, ja: "勤労",         en: "Industry",      desc: "人生の課題に一生懸命取り組むこと" },
  { id: 51, ja: "内なる平和",   en: "Inner Peace",   desc: "心の平静を体験すること" },
  { id: 52, ja: "誠実さ・一貫性",en: "Integrity",    desc: "自分の価値観と一致した日常生活を送ること" },
  { id: 53, ja: "知性",         en: "Intelligence",  desc: "心をいきいきと鋭く保つこと" },
  { id: 54, ja: "親密さ",       en: "Intimacy",      desc: "自分の内なる体験を他者と分かち合うこと" },
  { id: 55, ja: "正義",         en: "Justice",       desc: "公平で平等な扱いを促進すること" },
  { id: 56, ja: "知識",         en: "Knowledge",     desc: "学び、有益な知識を貢献すること" },
  { id: 57, ja: "リーダーシップ",en: "Leadership",   desc: "他者を鼓舞し導くこと" },
  { id: 58, ja: "余暇",         en: "Leisure",       desc: "リラックスして楽しむ時間をとること" },
  { id: 59, ja: "愛される",     en: "Loved",         desc: "親しい人たちから愛されること" },
  { id: 60, ja: "愛する",       en: "Loving",        desc: "他者に愛を与えること" },
  { id: 61, ja: "熟達",         en: "Mastery",       desc: "日常の活動において有能であること" },
  { id: 62, ja: "マインドフルネス",en: "Mindfulness", desc: "今この瞬間を意識的に生きること" },
  { id: 63, ja: "節度",         en: "Moderation",    desc: "過剰を避け、中庸を見つけること" },
  { id: 64, ja: "一対一の関係", en: "Monogamy",      desc: "一人の親密な愛する関係を持つこと" },
  { id: 65, ja: "音楽",         en: "Music",         desc: "音楽を楽しんだり自己表現すること" },
  { id: 66, ja: "非同調",       en: "Non-conformity",desc: "権威や規範に疑問を持ち挑戦すること" },
  { id: 67, ja: "新奇性",       en: "Novelty",       desc: "変化と多様性に満ちた生活を送ること" },
  { id: 68, ja: "育成",         en: "Nurturance",    desc: "他者を励まし支援すること" },
  { id: 69, ja: "開放性",       en: "Openness",      desc: "新しい体験・アイデア・選択肢に開かれていること" },
  { id: 70, ja: "秩序",         en: "Order",         desc: "整然と整理された生活を送ること" },
  { id: 71, ja: "情熱",         en: "Passion",       desc: "アイデア・活動・人に対して深い感情を持つこと" },
  { id: 72, ja: "愛国心",       en: "Patriotism",    desc: "国を愛し、奉仕し、守ること" },
  { id: 73, ja: "快楽",         en: "Pleasure",      desc: "良い気分でいること" },
  { id: 74, ja: "人気",         en: "Popularity",    desc: "多くの人から好かれること" },
  { id: 75, ja: "権力",         en: "Power",         desc: "他者に対して支配力を持つこと" },
  { id: 76, ja: "実用性",       en: "Practicality",  desc: "実際的・賢明・分別ある事柄に集中すること" },
  { id: 77, ja: "保護",         en: "Protect",       desc: "愛する人を守り安全に保つこと" },
  { id: 78, ja: "扶養",         en: "Provide",       desc: "家族の面倒を見て支えること" },
  { id: 79, ja: "目的",         en: "Purpose",       desc: "人生に意味と方向性を持つこと" },
  { id: 80, ja: "合理性",       en: "Rationality",   desc: "理性・論理・証拠に導かれること" },
  { id: 81, ja: "現実主義",     en: "Realism",       desc: "現実的・実際的に見て行動すること" },
  { id: 82, ja: "責任",         en: "Responsibility",desc: "責任ある決断をし、実行すること" },
  { id: 83, ja: "リスク",       en: "Risk",          desc: "危険や挑戦を冒すこと" },
  { id: 84, ja: "ロマンス",     en: "Romance",       desc: "人生に強烈でわくわくする愛を持つこと" },
  { id: 85, ja: "安全",         en: "Safety",        desc: "安全で安心であること" },
  { id: 86, ja: "自己受容",     en: "Self-acceptance",desc: "ありのままの自分を受け入れること" },
  { id: 87, ja: "自制",         en: "Self-control",  desc: "自分の行動を律すること" },
  { id: 88, ja: "自尊心",       en: "Self-esteem",   desc: "自分を肯定的に感じること" },
  { id: 89, ja: "自己理解",     en: "Self-knowledge",desc: "自分自身を深く正直に理解すること" },
  { id: 90, ja: "奉仕",         en: "Service",       desc: "他者に役立ち、奉仕すること" },
  { id: 91, ja: "性",           en: "Sexuality",     desc: "活発で満足のいく性生活を持つこと" },
  { id: 92, ja: "簡素さ",       en: "Simplicity",    desc: "最小限の必要で簡素に生きること" },
  { id: 93, ja: "独処",         en: "Solitude",      desc: "他者から離れる時間と空間を持つこと" },
  { id: 94, ja: "霊性",         en: "Spirituality",  desc: "霊的に成長し成熟すること" },
  { id: 95, ja: "安定",         en: "Stability",     desc: "一定した生活を送ること" },
  { id: 96, ja: "寛容",         en: "Tolerance",     desc: "自分と異なる人を受け入れ尊重すること" },
  { id: 97, ja: "伝統",         en: "Tradition",     desc: "過去の尊重された様式に従うこと" },
  { id: 98, ja: "徳",           en: "Virtue",        desc: "道徳的に純粋で優れた生活を送ること" },
  { id: 99, ja: "富",           en: "Wealth",        desc: "十分なお金を持つこと" },
  { id:100, ja: "世界平和",     en: "World Peace",   desc: "世界の平和推進に取り組むこと" },
];

// 仕分けカテゴリ定義
const CATS = [
  { key: "most", label: "最も重要",  color: "#c0392b", bg: "#fdf0ee", border: "#e8a99a" },
  { key: "very", label: "とても重要",color: "#e67e22", bg: "#fdf5ec", border: "#f0c090" },
  { key: "imp",  label: "重要",      color: "#2980b9", bg: "#edf4fb", border: "#90bce0" },
  { key: "some", label: "やや重要",  color: "#7f8c8d", bg: "#f4f4f4", border: "#bdc3c7" },
  { key: "not",  label: "重要でない",color: "#bdc3c7", bg: "#fafafa", border: "#d5d8dc" },
];

const TOTAL = VALUES.length;

// =============================================
// アプリの状態
// =============================================
let deck       = shuffle([...VALUES]); // 未仕分けのカード山
let sorted     = { most: [], very: [], imp: [], some: [], not: [] };
let history    = [];   // 戻る用の履歴
let topList    = [];   // トップ選択リスト
let moveTarget = null; // 移動対象カード
let expandedCat = null;
let showNarrow = false;
let showText   = false;
let copied     = false;

// =============================================
// ユーティリティ
// =============================================
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
}

// =============================================
// カード操作
// =============================================
function sortCard(cat) {
  const current = deck[0];
  if (!current) return;
  history.push({ card: current, cat });
  sorted[cat] = [...sorted[cat], current];
  deck = deck.slice(1);
}

function undo() {
  if (!history.length) return;
  const last = history[history.length - 1];
  history = history.slice(0, -1);
  sorted[last.cat] = sorted[last.cat].filter(c => c.id !== last.card.id);
  deck = [last.card, ...deck];
}

function resetAll() {
  deck        = shuffle([...VALUES]);
  sorted      = { most: [], very: [], imp: [], some: [], not: [] };
  history     = [];
  topList     = [];
  moveTarget  = null;
  expandedCat = null;
  showNarrow  = false;
  showText    = false;
}

// =============================================
// テキスト生成・コピー
// =============================================
function genText() {
  let t = "";
  t += "══════════════════════════════════\n";
  t += "  価値観カードソート 結果\n";
  t += `  ${today()}\n`;
  t += "  出典: Miller et al. (2011)\n";
  t += "══════════════════════════════════\n\n";

  if (topList.length) {
    t += `★ 核心的価値観 トップ${topList.length}\n`;
    t += "──────────────────────────────────\n";
    topList.forEach((v, i) => {
      t += `  ${String(i + 1).padStart(2, " ")}. ${v.ja}（${v.en}）\n`;
      t += `      ${v.desc}\n`;
    });
    t += "\n";
  }

  CATS.forEach(c => {
    t += `${c.label}（${sorted[c.key].length}個）\n`;
    t += "──────────────────────────────────\n";
    t += `  ${sorted[c.key].map(v => v.ja).join("、") || "なし"}\n\n`;
  });

  t += "──────────────────────────────────\n";
  t += "出典: Miller, C'de Baca, Matthews &\n";
  t += "Wilbourne (2011) Personal Values Card Sort\n";
  t += "University of New Mexico\n";
  return t;
}

function doCopy() {
  const text = genText();
  const onSuccess = () => {
    copied = true;
    render();
    setTimeout(() => { copied = false; render(); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => { fallbackCopy(text); onSuccess(); });
  } else {
    fallbackCopy(text);
    onSuccess();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

// =============================================
// 画像ダウンロード
// =============================================
function dlImage() {
  const top = topList.length > 0 ? topList : [];
  const W = 1100;
  const bodyRows = top.length * 2 + 2 + CATS.reduce((a, c) => a + 2 + Math.ceil(Math.max(sorted[c.key].length, 1) / 6), 0) + 4;
  const H = Math.max(900, 220 + bodyRows * 30 + 160);

  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext("2d");

  // 背景
  ctx.fillStyle = "#fafafa";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#f0f0ee";
  ctx.fillRect(0, 0, W, 80);
  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 80);
  ctx.lineTo(W, 80);
  ctx.stroke();

  // ヘッダー
  ctx.textAlign = "center";
  ctx.fillStyle = "#1a1a1a";
  ctx.font = "bold 30px 'Noto Sans JP',sans-serif";
  ctx.fillText("価値観カードソート 結果", W / 2, 50);
  ctx.fillStyle = "#999";
  ctx.font = "13px sans-serif";
  ctx.fillText(`${today()} ／ Miller, C'de Baca, Matthews & Wilbourne (2011) University of New Mexico`, W / 2, 70);

  let y = 115;
  ctx.textAlign = "left";

  // トップリスト
  if (top.length) {
    ctx.fillStyle = "#2980b9";
    ctx.font = "bold 19px sans-serif";
    ctx.fillText(`★ 核心的価値観 トップ${top.length}`, 60, y);
    y += 28;
    top.forEach((v, i) => {
      ctx.fillStyle = "#1a1a1a";
      ctx.font = "bold 17px sans-serif";
      ctx.fillText(`${i + 1}. ${v.ja}（${v.en}）`, 80, y);
      y += 22;
      ctx.fillStyle = "#777";
      ctx.font = "13px sans-serif";
      ctx.fillText(v.desc, 100, y);
      y += 28;
    });
    y += 8;
  }

  // カテゴリ別
  CATS.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.font = "bold 17px sans-serif";
    ctx.fillText(`${c.label}（${sorted[c.key].length}個）`, 60, y);
    y += 26;
    if (sorted[c.key].length) {
      const names = sorted[c.key].map(v => v.ja);
      const cols = 6;
      for (let r = 0; r < Math.ceil(names.length / cols); r++) {
        ctx.fillStyle = "#444";
        ctx.font = "14px sans-serif";
        ctx.fillText(names.slice(r * cols, (r + 1) * cols).join("  "), 80, y);
        y += 22;
      }
    } else {
      ctx.fillStyle = "#ccc";
      ctx.font = "13px sans-serif";
      ctx.fillText("なし", 80, y);
      y += 22;
    }
    y += 8;
  });

  const a = document.createElement("a");
  a.download = `価値観カードソート_${new Date().toISOString().slice(0, 10)}.png`;
  a.href = cv.toDataURL("image/png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// =============================================
// 画面描画
// =============================================
function render() {
  const done = deck.length === 0;
  const progress = TOTAL - deck.length;

  // プログレスバー更新
  document.getElementById("pf").style.width = `${(progress / TOTAL) * 100}%`;
  document.getElementById("pl1").textContent = `${progress}/${TOTAL} 完了`;
  document.getElementById("pl2").textContent = done ? "✓ 仕分け完了" : `残り ${deck.length} 枚`;

  const mainEl = document.getElementById("main");

  if (!done) {
    renderCard(mainEl);
  } else {
    renderResult(mainEl);
  }

  renderSections();
}

function renderCard(mainEl) {
  const cur = deck[0];
  mainEl.innerHTML = `
    <div class="undo-row">
      <button class="btn-sm" id="undobtn" ${!history.length ? "disabled" : ""}>← 戻る</button>
    </div>
    <div class="card">
      <div class="card-num">No.${cur.id} / 100</div>
      <div class="card-ja">${cur.ja}</div>
      <div class="card-en">${cur.en}</div>
      <div class="card-desc">${cur.desc}</div>
    </div>
    <div class="btns">
      ${CATS.map(c => `<button class="btn-sort btn-${c.key}" data-cat="${c.key}">${c.label}</button>`).join("")}
    </div>`;

  document.getElementById("undobtn")?.addEventListener("click", () => { undo(); render(); });
  mainEl.querySelectorAll("[data-cat]").forEach(btn =>
    btn.addEventListener("click", () => { sortCard(btn.dataset.cat); render(); })
  );
  initCardDragSort(mainEl);
}

function initCardDragSort(mainEl) {
  const card = mainEl.querySelector(".card");
  const btnWrap = mainEl.querySelector(".btns");
  const buttons = [...mainEl.querySelectorAll("[data-cat]")];
  if (!card || !btnWrap || buttons.length === 0) return;

  let drag = null;

  const clearTargets = () => {
    btnWrap.classList.remove("drag-active");
    buttons.forEach(btn => btn.classList.remove("is-drop-target"));
  };

  const pickTarget = (x, y) => {
    let next = null;
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const hit = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      btn.classList.toggle("is-drop-target", hit);
      if (hit) next = btn;
    });
    btnWrap.classList.toggle("drag-active", !!next);
    return next;
  };

  const resetCard = () => {
    drag = null;
    card.classList.remove("is-dragging");
    card.style.transform = "";
    clearTargets();
  };

  card.classList.add("drag-enabled");
  card.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    drag = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      activeBtn: null,
    };
    card.setPointerCapture(e.pointerId);
    card.classList.add("is-dragging");
    clearTargets();
    e.preventDefault();
  });

  card.addEventListener("pointermove", e => {
    if (!drag || drag.pointerId !== e.pointerId) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const rotate = Math.max(-8, Math.min(8, dx / 18));
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
    drag.activeBtn = pickTarget(e.clientX, e.clientY);
  });

  const finishDrag = e => {
    if (!drag || drag.pointerId !== e.pointerId) return;
    const target = drag.activeBtn || pickTarget(e.clientX, e.clientY);
    const cat = target?.dataset.cat;
    resetCard();
    if (!cat) return;
    sortCard(cat);
    render();
  };

  card.addEventListener("pointerup", finishDrag);
  card.addEventListener("pointercancel", resetCard);
  card.addEventListener("lostpointercapture", resetCard);
}

function renderResult(mainEl) {
  const veryAll = sorted.most.concat(sorted.very);

  const narrowHTML = showNarrow ? buildNarrowHTML(veryAll) : "";
  const interviewHTML = buildInterviewHTML(veryAll);

  mainEl.innerHTML = `
    ${narrowHTML}
    <div class="done-box">
      <div class="done-title">結果を保存</div>
      <div class="dl-row">
        <button class="btn-dl img" id="dlimg">📄 画像で保存</button>
        <button class="btn-dl txt ${copied ? "ok" : ""}" id="dlcopy">${copied ? "✓ コピー完了" : "📋 テキストコピー"}</button>
      </div>
      <button class="toggle-link" id="togglePreview">${showText ? "テキストを閉じる" : "テキストプレビュー"}</button>
      ${showText ? `<pre class="preview">${genText()}</pre>` : ""}
    </div>
    ${interviewHTML}
    <div style="text-align:center;margin-top:1rem;margin-bottom:.5rem;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn-sm" id="restart">最初からやり直す</button>
      ${veryAll.length > 0 ? `<button class="btn-sm" id="openNarrow">トップ${topList.length ? topList.length + "を編集" : "を選ぶ"}</button>` : ""}
    </div>`;

  document.getElementById("dlimg")?.addEventListener("click", () => { try { dlImage(); } catch (e) { console.error(e); } });
  document.getElementById("dlcopy")?.addEventListener("click", doCopy);
  document.getElementById("togglePreview")?.addEventListener("click", () => { showText = !showText; render(); });
  document.getElementById("restart")?.addEventListener("click", () => { resetAll(); render(); });
  document.getElementById("openNarrow")?.addEventListener("click", () => { showNarrow = true; render(); });
  document.getElementById("closeNarrow")?.addEventListener("click", () => { showNarrow = false; render(); });

  mainEl.querySelectorAll("[data-topid]").forEach(el =>
    el.addEventListener("click", () => {
      const id = parseInt(el.dataset.topid);
      const v = VALUES.find(x => x.id === id);
      if (!v) return;
      if (topList.find(x => x.id === id)) {
        topList = topList.filter(x => x.id !== id);
      } else if (topList.length < 10) {
        topList.push(v);
      }
      render();
    })
  );

  mainEl.querySelectorAll(".q-card").forEach(el =>
    el.addEventListener("click", () => {
      const text = el.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    })
  );
}

function buildNarrowHTML(veryAll) {
  const tags = veryAll.map(v => {
    const selected = topList.find(x => x.id === v.id);
    const disabled = topList.length >= 10 && !selected;
    return `<span class="tag" data-topid="${v.id}"
      style="background:${selected ? "#ddeeff" : "#f0f0f0"};
             border-color:${selected ? "#2980b9" : "#ddd"};
             color:${selected ? "#2980b9" : "#666"};
             opacity:${disabled ? 0.35 : 1};
             cursor:${disabled ? "not-allowed" : "pointer"}"
    >${v.ja}</span>`;
  }).join("");

  return `<div class="narrow-box">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem">
      <div class="narrow-title">「最も重要」「とても重要」からトップを選択（最大10個）</div>
      <span class="narrow-count">${topList.length}/10</span>
    </div>
    <div class="tags">${tags}</div>
    <div style="text-align:right;margin-top:8px"><button class="btn-sm" id="closeNarrow">閉じる</button></div>
  </div>`;
}

function buildInterviewHTML(veryAll) {
  const topForQ = topList.length > 0 ? topList : veryAll.slice(0, 5);
  if (!topForQ.length) return "";

  const questions = [
    v => `「<span class="q-val">${v}</span>」はあなたにとってどんな意味がありますか？`,
    v => `なぜ「<span class="q-val">${v}</span>」を重要な価値観として選びましたか？`,
    v => `「<span class="q-val">${v}</span>」はあなたにとってどのような意味で重要ですか？`,
    v => `日常生活で「<span class="q-val">${v}</span>」をどのように示してきましたか？`,
    v => `「<span class="q-val">${v}</span>」にさらに忠実に生きるとしたら、どんなことができますか？`,
  ];

  const qCards = questions.map((qfn, i) =>
    `<div class="q-card" data-q="${i}">${qfn(topForQ[Math.min(i, topForQ.length - 1)].ja)}</div>`
  ).join("");

  return `<div class="interview-box">
    <div class="interview-title">
      面談用 振り返り質問<br>
      <span style="font-weight:400;font-size:12px;color:#999">
        上位価値観：${topForQ.map(v => `<strong style="color:#333">${v.ja}</strong>`).join("、")}
      </span>
    </div>
    ${qCards}
    <div class="q-hint">クリックするとテキストをコピーできます。出典の推奨質問（Miller et al., 2011）</div>
  </div>`;
}

function renderSections() {
  const done = deck.length === 0;
  const secsEl = document.getElementById("secs");

  const tiers = [
    { key: "top", label: "★ トップ", items: topList, show: topList.length > 0, color: "#2980b9", bg: "#ddeeff", border: "#90bce0" },
    ...CATS.map(c => ({ key: c.key, label: c.label, items: sorted[c.key], show: true, color: c.color, bg: c.bg, border: c.border })),
  ];

  secsEl.innerHTML = tiers
    .filter(t => t.show || t.items.length > 0)
    .map(tier => buildSectionHTML(tier, done))
    .join("");

  // セクション開閉
  secsEl.querySelectorAll("[data-seckey]").forEach(el =>
    el.addEventListener("click", () => {
      const k = el.dataset.seckey;
      expandedCat = expandedCat === k ? null : k;
      moveTarget = null;
      renderSections();
    })
  );

  // 移動元選択
  secsEl.querySelectorAll("[data-mv-id]").forEach(el =>
    el.addEventListener("click", e => {
      e.stopPropagation();
      if (deck.length > 0) return;
      const id = parseInt(el.dataset.mvId);
      const from = el.dataset.mvFrom;
      const v = VALUES.find(x => x.id === id);
      moveTarget = (moveTarget && moveTarget.card.id === id && moveTarget.fromCat === from) ? null : { card: v, fromCat: from };
      renderSections();
    })
  );

  // 移動先確定
  secsEl.querySelectorAll("[data-to]").forEach(el =>
    el.addEventListener("click", e => {
      e.stopPropagation();
      if (!moveTarget) return;
      const to = el.dataset.to;
      const { card, fromCat } = moveTarget;

      if (fromCat === "top") {
        topList = topList.filter(x => x.id !== card.id);
      } else {
        sorted[fromCat] = sorted[fromCat].filter(x => x.id !== card.id);
        topList = topList.filter(x => x.id !== card.id);
        if (to === "top") {
          const inHigh = sorted.most.find(x => x.id === card.id) || sorted.very.find(x => x.id === card.id);
          if (!inHigh) sorted.most = [...sorted.most, card];
          if (topList.length < 10) topList = [...topList, card];
        } else {
          sorted[to] = [...sorted[to], card];
        }
      }

      moveTarget = null;
      render();
    })
  );
}

function buildSectionHTML(tier, done) {
  const isExpanded = expandedCat === tier.key;
  const mv = moveTarget;

  const preview = tier.items.slice(0, 20).map(v =>
    `<span class="tag" style="background:${tier.bg};border-color:${tier.border};color:${tier.color}">${v.ja}</span>`
  ).join("") + (tier.items.length > 20 ? `<span style="font-size:11px;color:#bbb">+${tier.items.length - 20}</span>` : "");

  let expandedHTML = "";
  if (isExpanded) {
    const tagList = tier.items.map(v => {
      const isSelected = mv && mv.card.id === v.id && mv.fromCat === tier.key;
      return `<span class="tag" data-mv-id="${v.id}" data-mv-from="${tier.key}"
        style="background:${tier.bg};border-color:${isSelected ? tier.color : tier.border};
               border-width:${isSelected ? "2px" : "1px"};color:${tier.color};
               cursor:${done ? "pointer" : "default"}"
      >${v.ja}${done ? ` <span style="font-size:9px;opacity:.4">↕</span>` : ""}</span>`;
    }).join("");

    let moveMenu = "";
    if (done && mv && mv.fromCat === tier.key) {
      const targets = [{ key: "top", label: "★ トップ" }, ...CATS.map(c => ({ key: c.key, label: c.label }))].filter(t => t.key !== tier.key);
      moveMenu = `<div class="move-menu">
        <div class="move-label">「${mv.card.ja}」を移動：</div>
        <div class="move-btns">${targets.map(t => `<button class="btn-move" data-to="${t.key}">${t.label}</button>`).join("")}</div>
      </div>`;
    }

    expandedHTML = `<div class="sec-body">
      <div class="tags">${tagList || '<span style="font-size:12px;color:#bbb">なし</span>'}</div>
      ${moveMenu}
    </div>`;
  }

  return `<div class="sec">
    <div class="sec-hdr" data-seckey="${tier.key}">
      <div style="display:flex;align-items:center;gap:8px">
        <span class="sec-title" style="color:${tier.color}">${tier.label}</span>
        <span class="sec-badge">${tier.items.length}</span>
      </div>
      <span class="sec-arrow" style="${isExpanded ? "transform:rotate(180deg)" : ""}">▼</span>
    </div>
    ${!isExpanded && tier.items.length > 0 ? `<div style="padding:0 14px 10px"><div class="tags">${preview}</div></div>` : ""}
    ${expandedHTML}
  </div>`;
}

// =============================================
// 起動
// =============================================
render();

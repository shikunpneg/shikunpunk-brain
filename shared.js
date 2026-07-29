/* ============================================================
   Shikunpunk 的大脑 — 共享脚本
   拉绳物理动画 / 忽明忽暗翻页转场 / PDF 阅读器
   ============================================================ */

/* ---------- 拉绳物理动画：下拉 → 回弹 → 惯性摆动 ---------- */
function pullString(switchEl) {
  const str = switchEl.querySelector(".pull-string");
  const tl = gsap.timeline();
  tl.to(str, { y: 26, duration: 0.22, ease: "power2.in" });
  tl.to(str, { y: 0, duration: 0.9, ease: "elastic.out(1.1, 0.35)" });
  tl.to(str, { rotation: 4, duration: 0.15, ease: "power1.out" }, 0.05);
  tl.to(str, { rotation: -3, duration: 0.35, ease: "power1.inOut" }, 0.2);
  tl.to(str, { rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" }, 0.55);
  return tl;
}

/* ---------- 翻页转场：拉灯 → 灭灯黑屏 → 跳转 → 亮灯 ---------- */
const PageNav = {
  busy: false,
  // 前往某页（先灭灯）
  go(url) {
    if (this.busy) return;
    this.busy = true;
    const veil = document.getElementById("pageVeil");
    gsap.timeline({
      onComplete: () => { window.location.href = url; }
    })
      .to(veil, { opacity: 1, duration: 0.45, ease: "power2.in" })
      .to(veil, { opacity: 1, duration: 0.25 }); // 黑屏停留
  },
  // 页面载入后亮灯（每页 onload 调用）
  arrive() {
    const veil = document.getElementById("pageVeil");
    gsap.set(veil, { opacity: 1 });
    // 亮灯带一点闪烁，像灯丝通电
    gsap.timeline()
      .to(veil, { opacity: 0.4, duration: 0.06, delay: 0.1 })
      .to(veil, { opacity: 0.8, duration: 0.06 })
      .to(veil, { opacity: 0, duration: 0.6, ease: "power2.out" });
  },
  // 绑定一个拉环为翻页开关
  bindSwitch(el, url) {
    if (!el) return;
    el.addEventListener("click", () => {
      pullString(el);
      setTimeout(() => this.go(url), 350);
    });
  }
};

/* ---------- 全屏 PDF 阅读器 ---------- */
const PdfReader = {
  open(url, title) {
    let reader = document.getElementById("pdfReader");
    if (!reader) {
      reader = document.createElement("div");
      reader.id = "pdfReader";
      reader.className = "pdf-reader";
      reader.innerHTML =
        '<div class="pdf-reader-bar">' +
          '<div class="pdf-reader-title"></div>' +
          '<button class="pdf-close" aria-label="关闭">✕</button>' +
        '</div>' +
        '<iframe class="pdf-frame"></iframe>';
      document.body.appendChild(reader);
      reader.querySelector(".pdf-close").addEventListener("click", () => this.close());
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") this.close(); });
    }
    reader.querySelector(".pdf-frame").src = url;
    reader.querySelector(".pdf-reader-title").textContent = title || "";
    reader.classList.add("open");
    document.body.style.overflow = "hidden";
    gsap.fromTo(reader, { opacity: 0 }, { opacity: 1, duration: 0.35 });
  },
  close() {
    const reader = document.getElementById("pdfReader");
    if (!reader || !reader.classList.contains("open")) return;
    gsap.to(reader, { opacity: 0, duration: 0.3, onComplete: () => {
      reader.classList.remove("open");
      reader.querySelector(".pdf-frame").src = "";
      document.body.style.overflow = "";
    }});
  }
};

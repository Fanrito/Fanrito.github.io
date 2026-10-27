"use strict";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = "fanzhouzhe@foxmail.com";
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "邮箱已复制，期待你的来信。";
    } catch {
      copyStatus.textContent = "请选中上方邮箱复制，或点击邮箱发送邮件。";
    }
  });
}

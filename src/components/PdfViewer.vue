<script setup>
import { onMounted } from "vue";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// const pdfUrl = new URL("@/assets/pg.pdf", import.meta.url).href;

onMounted(async () => {
  try {
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    const container = document.getElementById("pdfContainer");
    const scale = 1.5;
    const outputScale = window.devicePixelRatio || 1;

    container.innerHTML = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = viewport.width * outputScale;
      canvas.height = viewport.height * outputScale;
      context.scale(outputScale, outputScale);

      canvas.style.width = "100%";
      canvas.style.height = "auto";
      canvas.style.display = "block";
      canvas.style.margin = "0 auto 16px";
      canvas.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      canvas.style.borderRadius = "6px";
      canvas.style.background = "#fff";

      await page.render({ canvasContext: context, viewport }).promise;

      container.appendChild(canvas);
    }
  } catch (err) {
    console.error("PDF render error:", err);
  }
});
</script>

<template>
  <div id="pdfContainer" class="pdf-container">Loading PDF…</div>
</template>

<style scoped>
.pdf-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  background: #f4f4f4;
  overflow-x: hidden;
}
</style>

function setup() {
  // 建立填滿整個視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 使用 HSB 模式，讓顏色過渡更自然 (色相 0-360, 飽和度 0-100, 亮度 0-100)
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0, 0, 95); // 設置淺灰色背景 (HSB 格式)

  let spacing = 60; // 圓形之間的中心距離
  let baseSize = 40; // 圓形的基礎直徑

  // 使用雙重迴圈產生 X 與 Y 軸的規律排列
  for (let x = spacing / 2; x < width + spacing; x += spacing) {
    for (let y = spacing / 2; y < height + spacing; y += spacing) {
      // 加入基於時間與座標的動態縮放效果
      let wave = sin(frameCount * 0.05 + (x + y) * 0.01) * 10;

      // 根據座標與時間計算色相，確保每個圓顏色不同且會動態變化
      let hueValue = (x + y + frameCount * 2) % 360;
      fill(hueValue, 60, 90);
      noStroke();
      ellipse(x, y, baseSize + wave, baseSize + wave);
    }
  }
}

function windowResized() {
  // 當瀏覽器視窗大小改變時，自動調整畫布大小以維持填滿狀態
  resizeCanvas(windowWidth, windowHeight);
}
export async function getDominantHue(svgPath) {
  const res = await fetch(svgPath);
  const svgText = await res.text();
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
  const paths = svgDoc.querySelectorAll("path[fill]");
  let dominantHue = 0;
  let maxWeight = 0;

  paths.forEach((path) => {
    const fill = path.getAttribute("fill");
    const length = path.getTotalLength();
    const hue = rgbToHue(hexOrRgbToRgb(fill));

    if (length > maxWeight) {
      maxWeight = length;
      dominantHue = hue;
    }
  });

  return dominantHue;
}

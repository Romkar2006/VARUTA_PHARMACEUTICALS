import * as THREE from 'three';

interface CardTextureProps {
  skuName: string;
  category: string;
  actives: string;
  dosage: string;
  tag: string;
  gradientStart: string;
  gradientEnd: string;
  accentColor: string;
}

export const createProductTexture = ({
  skuName,
  category,
  actives,
  dosage,
  tag,
  gradientStart,
  gradientEnd,
  accentColor,
}: CardTextureProps): THREE.CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Background Card Base
  const grad = ctx.createLinearGradient(0, 0, 0, 680);
  grad.addColorStop(0, gradientStart);
  grad.addColorStop(1, gradientEnd);

  // Rounded Card Fill
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(0, 0, 512, 680, 32);
  ctx.fill();

  // Subtle Border
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 4;
  ctx.stroke();

  // Top Tag Pill
  ctx.fillStyle = accentColor;
  ctx.beginPath();
  ctx.roundRect(32, 36, 220, 36, 18);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 14px system-ui';
  ctx.fillText(tag.toUpperCase(), 48, 59);

  // FSSAI Badge Top Right
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.font = '500 12px system-ui';
  ctx.fillText('FSSAI LIC. 13624999000034', 310, 58);

  // Center Product Icon Circle
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.beginPath();
  ctx.arc(256, 220, 90, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Center Shield Graphic
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('🛡️', 256, 245);

  // SKU Name
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 46px system-ui';
  ctx.fillText(skuName, 36, 400);

  // Category
  ctx.fillStyle = accentColor;
  ctx.font = '600 18px system-ui';
  ctx.fillText(category.toUpperCase(), 36, 435);

  // Divider
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(36, 460);
  ctx.lineTo(476, 460);
  ctx.stroke();

  // Active Ingredients
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = '500 16px system-ui';
  ctx.fillText('Active Formulation:', 36, 495);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 15px system-ui';
  const lines = actives.split('·');
  lines.forEach((line, idx) => {
    ctx.fillText(`• ${line.trim()}`, 36, 525 + idx * 26);
  });

  // Bottom Dosage Strip
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.beginPath();
  ctx.roundRect(36, 600, 440, 44, 12);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = '600 14px system-ui';
  ctx.fillText(`Standard Dosage: ${dosage}`, 52, 627);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

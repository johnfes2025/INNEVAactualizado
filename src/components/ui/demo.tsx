"use client";

import GlowingText from "./glowing-text";

const settings = {
  textColor: "#d8d8d8",
  glowColor: "#ffffff",
  fontSize: 2.2,
  letterSpacing: 0.02,
  lineHeight: 1.55,
  glowIntensity: 0.7,
  characterStagger: 0.045,
  revealDuration: 0.5,
  lineGap: 0.15,
};

export default function GlowingTextDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <GlowingText
      eyebrow=""
      text={
`Every character ignites on arrival,
holds its glow just long enough to read,
then dims to a steady afterglow.
Terminal typography, rebuilt for the web.`
      }
      textColor={s.textColor}
      glowColor={s.glowColor}
      fontSize={s.fontSize}
      letterSpacing={s.letterSpacing}
      lineHeight={s.lineHeight}
      glowIntensity={s.glowIntensity}
      characterStagger={s.characterStagger}
      revealDuration={s.revealDuration}
      lineGap={s.lineGap}
      className="justify-center text-center"
    />
  );
}

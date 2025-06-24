type Slot = { min: number; max: number };

function getPriceSlots(max: number): Slot[] {
  const step = max / 4;
  const slots: Slot[] = [];

  for (let i = 0; i < 4; i++) {
    const min = Math.floor(i * step);
    const maxValue = Math.floor((i + 1) * step);
    slots.push({ min, max: maxValue });
  }
  slots.unshift({ min: 0, max });

  return slots;
}
export default getPriceSlots;

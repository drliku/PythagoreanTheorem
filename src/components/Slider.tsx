import type { CSSProperties } from 'react';
import { fmtLength } from '../lib/format';

interface Props {
  id: string;
  label: string;
  symbol: string;
  value: number;
  min: number;
  max: number;
  step: number;
  color: string;
  onChange: (v: number) => void;
}

export function Slider({ id, label, symbol, value, min, max, step, color, onChange }: Props) {
  const fill = ((value - min) / (max - min)) * 100;
  const style = { '--fill': `${fill}%`, '--accent': color } as CSSProperties;
  const nudge = (d: number) => onChange(Math.round(Math.min(max, Math.max(min, value + d)) * 100) / 100);

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label htmlFor={id} className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-navy">
          <span
            className="grid h-6 w-6 place-items-center rounded-lg font-display text-sm font-extrabold text-white"
            style={{ backgroundColor: color }}
          >
            <span className="normal-case">{symbol}</span>
          </span>
          {label} <span className="normal-case">{symbol}</span>
        </label>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={`Decrease ${symbol}`}
            onClick={() => nudge(-0.1)}
            className="grid h-7 w-7 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            −
          </button>
          <span className="min-w-[3.5rem] rounded-lg border-2 border-slate-200 px-2 py-0.5 text-center font-mono text-sm font-semibold tabular-nums text-slate-800">
            {fmtLength(value)}
          </span>
          <button
            type="button"
            aria-label={`Increase ${symbol}`}
            onClick={() => nudge(0.1)}
            className="grid h-7 w-7 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            +
          </button>
        </div>
      </div>
      <input
        id={id}
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={style}
        onChange={(e) => onChange(Math.round(parseFloat(e.target.value) * 100) / 100)}
      />
      <div className="mt-0.5 flex justify-between font-mono text-[10px] text-slate-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

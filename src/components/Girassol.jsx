import React, { useMemo } from 'react'
import '../style/girassol.css'

const STAGE_CONFIG = {
  0: { stem: 0, leaf1: 0, leaf2: 0, leaf3: 0, sprout: 0, bud: 0, petals: 0, center: 0, wilted: false, seed: true },
  1: { stem: 10, leaf1: 0, leaf2: 0, leaf3: 0, sprout: 1, bud: 0, petals: 0, center: 0, wilted: false, seed: false },
  2: { stem: 42, leaf1: 1, leaf2: 1, leaf3: 0, sprout: 0, bud: 0, petals: 0, center: 0, wilted: false, seed: false },
  3: { stem: 70, leaf1: 1, leaf2: 1, leaf3: 0.7, sprout: 0, bud: 0.6, petals: 0, center: 0, wilted: false, seed: false },
  4: { stem: 100, leaf1: 1, leaf2: 1, leaf3: 1, sprout: 0, bud: 1, petals: 0, center: 0, wilted: false, seed: false },
  5: { stem: 100, leaf1: 1, leaf2: 1, leaf3: 1, sprout: 0, bud: 0, petals: 1, center: 1, wilted: false, seed: false },
  6: { stem: 100, leaf1: 0.75, leaf2: 0.75, leaf3: 0.75, sprout: 0, bud: 0, petals: 0.9, center: 1, wilted: true, seed: false }
}

const STAGE_LABELS = {
  0: 'Sementinha recém-plantada',
  1: 'Brotinho com folhinhas',
  2: 'Muda crescendo',
  3: 'Caule alto e botão se formando',
  4: 'Botão prestes a abrir',
  5: 'Girassol florido',
  6: 'Murcho — precisa de cuidado'
}

export function calculateStage(missionsCompleted, totalMissions, isWilted = false) {
  if (isWilted) return 6
  if (!totalMissions || totalMissions === 0) return 0
  const ratio = missionsCompleted / totalMissions
  if (ratio === 0) return 0
  if (ratio < 0.2) return 1
  if (ratio < 0.4) return 2
  if (ratio < 0.6) return 3
  if (ratio < 0.8) return 4
  return 5
}

export function getStageLabel(stage) {
  return STAGE_LABELS[stage] || ''
}

const OUTER_PETAL_COUNT = 16
const INNER_PETAL_COUNT = 16

const Girassol = ({
  missionsCompleted = 0,
  totalMissions = 0,
  isWilted = false,
  showLabel = true,
  className = ''
}) => {
  const stage = calculateStage(missionsCompleted, totalMissions, isWilted)
  const c = STAGE_CONFIG[stage]

  const baseX = 200
  const baseY = 328
  const maxTop = 135
  const stemTop = baseY - ((baseY - maxTop) * c.stem / 100)
  const stemWidth = 2 + c.stem * 0.025

  const stemColor = c.wilted ? '#8A7A45' : '#6DA038'
  const leafColor = c.wilted ? '#A89758' : '#7DB847'
  const leafColorLight = c.wilted ? '#B8A868' : '#8FBF4F'
  const leafVein = c.wilted ? '#8A7A45' : '#5A8F32'
  const centerColor = c.wilted ? '#5A3A1E' : '#6B4423'
  const centerInner = c.wilted ? '#4A2E18' : '#7D5330'
  const petalOuter = c.wilted ? '#C9A845' : '#FFC93B'
  const petalInner = c.wilted ? '#B89535' : '#FFB01E'

  const stemPath = c.wilted
    ? `M ${baseX} ${baseY} Q ${baseX + 3} 260 ${baseX + 12} 220 Q ${baseX + 20} 200 ${baseX + 28} ${stemTop}`
    : `M ${baseX} ${baseY} Q ${baseX - 1} ${(baseY + stemTop) / 2} ${baseX} ${stemTop}`

  const flowerX = c.wilted ? baseX + 28 : baseX
  const flowerY = stemTop
  const wiltTransform = c.wilted ? `rotate(30 ${flowerX} ${flowerY})` : ''

  const outerPetals = useMemo(() => {
    return Array.from({ length: OUTER_PETAL_COUNT }, (_, i) => ({
      angle: i * 360 / OUTER_PETAL_COUNT,
      delay: i * 0.05,
      index: i
    }))
  }, [])

  const innerPetals = useMemo(() => {
    return Array.from({ length: INNER_PETAL_COUNT }, (_, i) => ({
      angle: i * 360 / INNER_PETAL_COUNT + 360 / INNER_PETAL_COUNT / 2,
      delay: 0.5 + i * 0.04,
      index: i
    }))
  }, [])

  const petalsVisible = c.petals > 0
  const budPetalPeek = c.bud >= 1

  const plantClass = c.wilted ? 'gs-wilting' : (c.stem > 20 ? 'gs-swaying' : '')

  const makeLeaf = (progress, sideLeft, y, size) => {
    if (progress <= 0) return null
    const dir = sideLeft ? -1 : 1
    const length = 24 * size
    const tipX = baseX + dir * length
    const tipY = y + 3
    const ctrlX1 = baseX + dir * (length * 0.4)
    const ctrlY1 = y - 8
    const ctrlX2 = baseX + dir * (length * 0.4)
    const ctrlY2 = y + 10

    return (
      <g
        className="gs-leaf-group"
        style={{
          opacity: progress,
          transform: `scale(${progress})`,
          transformOrigin: `${baseX}px ${y}px`
        }}
      >
        <path
          d={`M ${baseX} ${y} Q ${ctrlX1} ${ctrlY1} ${tipX} ${tipY} Q ${ctrlX2} ${ctrlY2} ${baseX} ${y + 3} Z`}
          fill={leafColor}
        />
        <path
          d={`M ${baseX} ${y + 1} Q ${ctrlX1} ${y + 1} ${tipX - dir * 3} ${tipY}`}
          stroke={leafVein}
          strokeWidth="0.7"
          fill="none"
          opacity={c.wilted ? 0.4 : 0.9}
        />
      </g>
    )
  }

  return (
    <div className={`girassol-wrapper ${className}`}>
      <div className="girassol-stage">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="340" cy="70" r="28" fill={c.wilted ? '#E8C568' : '#FFD96B'} opacity={c.wilted ? 0.7 : 1} />
          {!c.wilted && (
            <g className="gs-ray">
              <circle cx="340" cy="70" r="40" fill="none" stroke="#FFD96B" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.6" />
            </g>
          )}
          <g className="gs-cloud">
            <ellipse cx="90" cy="80" rx="32" ry="10" fill={c.wilted ? '#C8C0A8' : '#FFFFFF'} opacity="0.85" />
            <ellipse cx="110" cy="72" rx="24" ry="9" fill={c.wilted ? '#C8C0A8' : '#FFFFFF'} opacity="0.85" />
          </g>
          {!c.wilted && (
            <g className="gs-cloud" style={{ animationDelay: '-10s' }}>
              <ellipse cx="230" cy="50" rx="22" ry="7" fill="#FFFFFF" opacity="0.75" />
            </g>
          )}

          <ellipse cx="200" cy="340" rx="180" ry="14" fill="#8B6B3D" opacity="0.35" />
          <circle cx="70" cy="355" r="2" fill="#A8884D" />
          <circle cx="320" cy="350" r="1.5" fill="#A8884D" />
          <circle cx="150" cy="365" r="1.5" fill="#A8884D" />
          <path d="M 40 330 Q 50 325 60 330" stroke="#7DA843" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 50 332 L 50 326" stroke="#7DA843" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 340 335 Q 350 328 360 335" stroke="#7DA843" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 350 337 L 350 330" stroke="#7DA843" strokeWidth="1.2" strokeLinecap="round" />

          <g className={plantClass}>
            {c.seed && (
              <g className="gs-seed-group">
                <ellipse cx={baseX} cy={baseY} rx="8" ry="5" fill="#4A3520" />
                <path d={`M ${baseX} ${baseY} L ${baseX} ${baseY - 6}`} stroke="#7DA843" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}

            {c.sprout > 0 && (
              <g className="gs-sprout-group" style={{ opacity: c.sprout }}>
                <ellipse cx={baseX} cy={baseY} rx="10" ry="4" fill="#4A3520" opacity="0.5" />
                <path d={`M ${baseX} ${baseY} L ${baseX} ${baseY - 14}`} stroke={stemColor} strokeWidth="2" strokeLinecap="round" fill="none" />
                <ellipse cx={baseX - 5} cy={baseY - 13} rx="5" ry="2.8" fill={leafColorLight} transform={`rotate(-35 ${baseX - 5} ${baseY - 13})`} />
                <ellipse cx={baseX + 5} cy={baseY - 13} rx="5" ry="2.8" fill={leafColorLight} transform={`rotate(35 ${baseX + 5} ${baseY - 13})`} />
              </g>
            )}

            {c.stem > 0 && c.sprout === 0 && (
              <path
                className="gs-stem"
                d={stemPath}
                stroke={stemColor}
                strokeWidth={stemWidth}
                strokeLinecap="round"
                fill="none"
              />
            )}

            {makeLeaf(c.leaf1, true, 282, 1.0)}
            {makeLeaf(c.leaf2, false, 250, 1.0)}
            {makeLeaf(c.leaf3, true, 215, 0.9)}

            {c.bud > 0 && (
              <g
                className="gs-bud-group"
                style={{
                  transform: `scale(${c.bud})`,
                  transformOrigin: `${baseX}px ${flowerY}px`,
                  opacity: c.bud
                }}
              >
                <ellipse cx={baseX - 6} cy={flowerY + 4} rx="7" ry="10" fill={leafColorLight} transform={`rotate(-20 ${baseX - 6} ${flowerY + 4})`} opacity="0.9" />
                <ellipse cx={baseX + 6} cy={flowerY + 4} rx="7" ry="10" fill={leafColorLight} transform={`rotate(20 ${baseX + 6} ${flowerY + 4})`} opacity="0.9" />
                <ellipse cx={baseX} cy={flowerY + 2} rx="12" ry="15" fill="#6DA038" />
                <path d={`M ${baseX} ${flowerY - 13} Q ${baseX + 11} ${flowerY - 5} ${baseX + 11} ${flowerY + 3}`} stroke="#5A8F32" strokeWidth="0.6" fill="none" />
                <path d={`M ${baseX} ${flowerY - 13} Q ${baseX - 11} ${flowerY - 5} ${baseX - 11} ${flowerY + 3}`} stroke="#5A8F32" strokeWidth="0.6" fill="none" />
                <path d={`M ${baseX} ${flowerY - 13} L ${baseX} ${flowerY + 3}`} stroke="#5A8F32" strokeWidth="0.6" fill="none" />
                {budPetalPeek && (
                  <g className="gs-bud-petals">
                    <path d={`M ${baseX - 8} ${flowerY - 6} Q ${baseX - 5} ${flowerY - 14} ${baseX} ${flowerY - 13}`} fill="#FFC93B" />
                    <path d={`M ${baseX + 8} ${flowerY - 6} Q ${baseX + 5} ${flowerY - 14} ${baseX} ${flowerY - 13}`} fill="#FFC93B" />
                    <path d={`M ${baseX - 4} ${flowerY - 10} Q ${baseX - 2} ${flowerY - 16} ${baseX} ${flowerY - 13}`} fill="#FFB01E" />
                    <path d={`M ${baseX + 4} ${flowerY - 10} Q ${baseX + 2} ${flowerY - 16} ${baseX} ${flowerY - 13}`} fill="#FFB01E" />
                  </g>
                )}
              </g>
            )}

            {petalsVisible && (
              <g className="gs-flower-group" transform={wiltTransform}>
                {outerPetals.map(({ angle, delay, index }) => (
                  <g
                    key={`outer-${index}`}
                    className="gs-petal-outer"
                    transform={`translate(${flowerX} ${flowerY}) rotate(${angle})`}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <ellipse cx="0" cy="-34" rx="9" ry="17" fill={petalOuter} />
                  </g>
                ))}
                {innerPetals.map(({ angle, delay, index }) => (
                  <g
                    key={`inner-${index}`}
                    className="gs-petal-inner"
                    transform={`translate(${flowerX} ${flowerY}) rotate(${angle})`}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <ellipse cx="0" cy="-26" rx="6" ry="12" fill={petalInner} />
                  </g>
                ))}
                <g className="gs-flower-center" style={{ opacity: c.center }}>
                  <circle cx={flowerX} cy={flowerY} r={20 * c.center} fill={centerColor} />
                  <circle cx={flowerX} cy={flowerY} r={Math.max(0, 20 * c.center - 3)} fill={centerInner} />
                  {c.center > 0.8 && !c.wilted && (
                    <g fill="#4A2E18">
                      <circle cx={flowerX - 6} cy={flowerY - 4} r="1.2" />
                      <circle cx={flowerX + 4} cy={flowerY - 6} r="1.2" />
                      <circle cx={flowerX - 2} cy={flowerY + 2} r="1.2" />
                      <circle cx={flowerX + 7} cy={flowerY + 3} r="1.2" />
                      <circle cx={flowerX - 8} cy={flowerY + 4} r="1.2" />
                      <circle cx={flowerX + 2} cy={flowerY + 7} r="1.2" />
                      <circle cx={flowerX - 3} cy={flowerY - 8} r="1.2" />
                      <circle cx={flowerX + 9} cy={flowerY - 2} r="1.2" />
                      <circle cx={flowerX - 9} cy={flowerY - 1} r="1.2" />
                      <circle cx={flowerX + 1} cy={flowerY - 2} r="1.2" />
                    </g>
                  )}
                </g>
              </g>
            )}
          </g>

          {stage === 5 && !c.wilted && (
            <g className="gs-butterfly" transform="translate(280 180)">
              <ellipse cx="0" cy="0" rx="6" ry="4" fill="#FF9FB8" opacity="0.9" />
              <ellipse cx="-5" cy="-2" rx="5" ry="3.5" fill="#FFB8CC" opacity="0.9" />
              <circle cx="0" cy="0" r="1" fill="#5C3B00" />
            </g>
          )}
        </svg>
      </div>
      {showLabel && (
        <p className="girassol-label">{getStageLabel(stage)}</p>
      )}
    </div>
  )
}

export default Girassol
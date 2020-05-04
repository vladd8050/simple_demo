import { h, render, Fragment } from 'preact';

export const DropDown1 = () => {
    return (
        <div className="filter iconBefore pTooltip menu pOptionsTip visible">
  <div className="text F1 S2 C6 CH8 W2 L1 U1">Filter</div>
  <div className="optionsPanel pSpriteAfter clicking">
    <div className="optionsPanelInner pM pNormal">
      <div className="options pNarrow">
        <div
          className="option F1 S3 CH8 C6 W2 L1 U1  "
          tabIndex={0}
          optionindex={0}
        >
          View All
        </div>
        <div
          className="option F1 S3 CH8 C6 W2 L1 U1  "
          tabIndex={0}
          optionindex={1}
        >
          Selected
        </div>
        <div
          className="option F1 S3 CH8 C6 W2 L1 U1  "
          tabIndex={0}
          optionindex={2}
        >
          Client Hidden
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
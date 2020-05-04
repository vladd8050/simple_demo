import { h, render, Fragment } from 'preact';

export const Select = () => (
<div
  className="field selectField templateEdit"
  data-fldid="pricingId"
  data-field={1}
>
  <label className htmlFor="rform_pt5_1">
    Price List
  </label>
  <div
    id="rform_pt5_1-dd-placeholder"
    className="dd-container"
    style={{ width: 260 }}
  >
    <div
      className="dd-select"
      style={{ width: 260, background: "rgb(238, 238, 238)" }}
    >
      <input
        className="dd-selected-value"
        type="hidden"
        id="rform_pt5_1"
        name="undefined"
        defaultValue={10}
      />
      <a className="dd-selected">
        <label className="dd-selected-text">hanan test 1</label>
      </a>
      <span className="dd-pointer dd-pointer-down" />
    </div>
    <ul
      className="dd-options dd-click-off-close"
      style={{ width: 260, overflow: "hidden", display: "none" }}
    >
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={0}
          />{" "}
          <label className="dd-option-text">FloriColor</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={1}
          />{" "}
          <label className="dd-option-text">Seagull Lab</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={2}
          />{" "}
          <label className="dd-option-text">Marketing</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={3}
          />{" "}
          <label className="dd-option-text">Test MegaPixie</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={4}
          />{" "}
          <label className="dd-option-text">Lehman Test</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={5}
          />{" "}
          <label className="dd-option-text">David - Fresh Start</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={6}
          />{" "}
          <label className="dd-option-text">Test The Simple Sales System</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={7}
          />{" "}
          <label className="dd-option-text">The Simple Sales System</label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={8}
          />{" "}
          <label className="dd-option-text">
            The Simple Sales System H0810191
          </label>
        </a>
      </li>
      <li>
        <a className="dd-option">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={9}
          />{" "}
          <label className="dd-option-text">
            Isle Studio Wedding Books (BETA)
          </label>
        </a>
      </li>
      <li>
        <a className="dd-option dd-option-selected">
          {" "}
          <input
            className="dd-option-value"
            type="hidden"
            defaultValue={10}
          />{" "}
          <label className="dd-option-text">hanan test 1</label>
        </a>
      </li>
    </ul>
  </div>
  <div className="arrow smallMobileIconBefore" />
</div>);

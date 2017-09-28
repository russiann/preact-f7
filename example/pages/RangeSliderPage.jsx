import { h } from 'preact';
import { Page, Navbar } from '../../dist/preact-f7';

const RangeSlider = () => (
  <Page>
    <Navbar title="RangeSlider" />
    <div className="block-title">Volume</div>
    <div className="list simple-list">
      <ul>
        <li>
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">volume_mute_fill</i>
            <i className="icon material-icons md-only">volume_mute</i>
          </div>
          <div className="item-cell flex-shrink-3">
            <div className="range-slider range-slider-init">
              <input type="range" min="0" max="100" step="1" />
            </div>
          </div>
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">volume_fill</i>
            <i className="icon material-icons md-only">volume_up</i>
          </div>
        </li>
      </ul>
    </div>
    <div className="block-title">Brightness 2</div>
    <div className="list simple-list">
      <ul>
        <li>
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">circle</i>
            <i className="icon material-icons md-only">brightness_low</i>
          </div>
          <div className="item-cell flex-shrink-3">
            <div className="range-slider range-slider-init color-orange" data-label="true">
              <input type="range" min="0" max="100" step="1" />
            </div>
          </div>
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">circle_half</i>
            <i className="icon material-icons md-only">brightness_high</i>
          </div>
        </li>
      </ul>
    </div>
    <div className="block-title display-flex justify-content-space-between">Price Filter <span className="price-value">$200 - $400</span></div>
    <div className="list simple-list">
      <ul>
        <li className="item-row">
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">money_dollar</i>
            <i className="icon material-icons md-only">attach_money</i>
          </div>
          <div className="item-cell item-cell-shrink-3">
            <div className="range-slider range-slider-init color-green"
              data-label="true"
              data-dual="true"
              data-min="0"
              data-max="500"
              data-step="1"
              data-value-left="200"
              data-value-right="400"
            ></div>
          </div>
          <div className="item-cell width-auto flex-shrink-0">
            <i className="icon f7-icons ios-only">money_dollar_fill</i>
            <i className="icon material-icons md-only">monetization_on</i>
          </div>
        </li>
      </ul>
    </div>
  </Page>
);


export default RangeSlider;

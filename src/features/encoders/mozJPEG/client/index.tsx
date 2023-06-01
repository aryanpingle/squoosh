import {
  EncodeOptions,
  MozJpegColorSpace,
  getParameterDescription,
} from '../shared/meta';
import type WorkerBridge from 'client/lazy-app/worker-bridge';
import { h, Component } from 'preact';
import {
  inputFieldChecked,
  inputFieldValueAsNumber,
  preventDefault,
} from 'client/lazy-app/util';
import * as style from 'client/lazy-app/Compress/Options/style.css';
import linkState from 'linkstate';
import Range from 'client/lazy-app/Compress/Options/Range';
import Checkbox from 'client/lazy-app/Compress/Options/Checkbox';
import Expander from 'client/lazy-app/Compress/Options/Expander';
import Select from 'client/lazy-app/Compress/Options/Select';
import Revealer from 'client/lazy-app/Compress/Options/Revealer';

export function encode(
  signal: AbortSignal,
  workerBridge: WorkerBridge,
  imageData: ImageData,
  options: EncodeOptions,
) {
  return workerBridge.mozjpegEncode(signal, imageData, options);
}

interface Props {
  options: EncodeOptions;
  onChange(newOptions: EncodeOptions): void;
}

interface State {
  showAdvanced: boolean;
}

export class Options extends Component<Props, State> {
  state: State = {
    showAdvanced: false,
  };

  onChange = (event: Event) => {
    const form = (event.currentTarget as HTMLInputElement).closest(
      'form',
    ) as HTMLFormElement;
    const { options } = this.props;

    const newOptions: EncodeOptions = {
      // Copy over options the form doesn't currently care about, eg arithmetic
      ...this.props.options,
      // And now stuff from the form:
      // .checked
      baseline: inputFieldChecked(form.baseline, options.baseline),
      progressive: inputFieldChecked(form.progressive, options.progressive),
      optimize_coding: inputFieldChecked(
        form.optimize_coding,
        options.optimize_coding,
      ),
      trellis_multipass: inputFieldChecked(
        form.trellis_multipass,
        options.trellis_multipass,
      ),
      trellis_opt_zero: inputFieldChecked(
        form.trellis_opt_zero,
        options.trellis_opt_zero,
      ),
      trellis_opt_table: inputFieldChecked(
        form.trellis_opt_table,
        options.trellis_opt_table,
      ),
      auto_subsample: inputFieldChecked(
        form.auto_subsample,
        options.auto_subsample,
      ),
      separate_chroma_quality: inputFieldChecked(
        form.separate_chroma_quality,
        options.separate_chroma_quality,
      ),
      // .value
      quality: inputFieldValueAsNumber(form.quality, options.quality),
      chroma_quality: inputFieldValueAsNumber(
        form.chroma_quality,
        options.chroma_quality,
      ),
      chroma_subsample: inputFieldValueAsNumber(
        form.chroma_subsample,
        options.chroma_subsample,
      ),
      smoothing: inputFieldValueAsNumber(form.smoothing, options.smoothing),
      color_space: inputFieldValueAsNumber(
        form.color_space,
        options.color_space,
      ),
      quant_table: inputFieldValueAsNumber(
        form.quant_table,
        options.quant_table,
      ),
      trellis_loops: inputFieldValueAsNumber(
        form.trellis_loops,
        options.trellis_loops,
      ),
    };
    this.props.onChange(newOptions);
  };

  render({ options }: Props, { showAdvanced }: State) {
    // I'm rendering both lossy and lossless forms, as it becomes much easier when
    // gathering the data.
    return (
      <form class={style.optionsSection} onSubmit={preventDefault}>
        <div
          class={style.optionOneCell}
          title={getParameterDescription('quality')}
        >
          <Range
            name="quality"
            min="0"
            max="100"
            value={options.quality}
            onInput={this.onChange}
          >
            Quality:
          </Range>
        </div>
        <label class={style.optionReveal}>
          <Revealer
            checked={showAdvanced}
            onChange={linkState(this, 'showAdvanced')}
          />
          Advanced settings
        </label>
        <Expander>
          {showAdvanced ? (
            <div>
              <label
                class={style.optionTextFirst}
                title={getParameterDescription('color_space')}
              >
                Channels:
                <Select
                  name="color_space"
                  value={options.color_space}
                  onChange={this.onChange}
                >
                  <option value={MozJpegColorSpace.GRAYSCALE}>Grayscale</option>
                  <option value={MozJpegColorSpace.RGB}>RGB</option>
                  <option value={MozJpegColorSpace.YCbCr}>YCbCr</option>
                </Select>
              </label>
              <Expander>
                {options.color_space === MozJpegColorSpace.YCbCr ? (
                  <div>
                    <label
                      class={style.optionToggle}
                      title={getParameterDescription('auto_subsample')}
                    >
                      Auto subsample chroma
                      <Checkbox
                        name="auto_subsample"
                        checked={options.auto_subsample}
                        onChange={this.onChange}
                      />
                    </label>
                    <Expander>
                      {options.auto_subsample ? null : (
                        <div
                          class={style.optionOneCell}
                          title={getParameterDescription('chroma_subsample')}
                        >
                          <Range
                            name="chroma_subsample"
                            min="1"
                            max="4"
                            value={options.chroma_subsample}
                            onInput={this.onChange}
                          >
                            Subsample chroma by:
                          </Range>
                        </div>
                      )}
                    </Expander>
                    <label
                      class={style.optionToggle}
                      title={getParameterDescription('separate_chroma_quality')}
                    >
                      Separate chroma quality
                      <Checkbox
                        name="separate_chroma_quality"
                        checked={options.separate_chroma_quality}
                        onChange={this.onChange}
                      />
                    </label>
                    <Expander>
                      {options.separate_chroma_quality ? (
                        <div
                          class={style.optionOneCell}
                          title={getParameterDescription('chroma_quality')}
                        >
                          <Range
                            name="chroma_quality"
                            min="0"
                            max="100"
                            value={options.chroma_quality}
                            onInput={this.onChange}
                          >
                            Chroma quality:
                          </Range>
                        </div>
                      ) : null}
                    </Expander>
                  </div>
                ) : null}
              </Expander>
              <label
                class={style.optionToggle}
                title={getParameterDescription('baseline')}
              >
                Pointless spec compliance
                <Checkbox
                  name="baseline"
                  checked={options.baseline}
                  onChange={this.onChange}
                />
              </label>
              <Expander>
                {options.baseline ? null : (
                  <label
                    class={style.optionToggle}
                    title={getParameterDescription('progressive')}
                  >
                    Progressive rendering
                    <Checkbox
                      name="progressive"
                      checked={options.progressive}
                      onChange={this.onChange}
                    />
                  </label>
                )}
              </Expander>
              <Expander>
                {options.baseline ? (
                  <label
                    class={style.optionToggle}
                    title={getParameterDescription('optimize_coding')}
                  >
                    Optimize Huffman table
                    <Checkbox
                      name="optimize_coding"
                      checked={options.optimize_coding}
                      onChange={this.onChange}
                    />
                  </label>
                ) : null}
              </Expander>
              <div
                class={style.optionOneCell}
                title={getParameterDescription('smoothing')}
              >
                <Range
                  name="smoothing"
                  min="0"
                  max="100"
                  value={options.smoothing}
                  onInput={this.onChange}
                >
                  Smoothing:
                </Range>
              </div>
              <label
                class={style.optionTextFirst}
                title={getParameterDescription('quant_table')}
              >
                Quantization:
                <Select
                  name="quant_table"
                  value={options.quant_table}
                  onChange={this.onChange}
                >
                  <option
                    value="0"
                    title={
                      'Standard Quant Tables given in Annex K of the CCITT paper'
                    }
                  >
                    JPEG Annex K
                  </option>
                  <option value="1" title={'Flat Quant Tables'}>
                    Flat
                  </option>
                  <option
                    value="2"
                    title={
                      'Tuned for Mean Structural Similarity\nTested on the Kodak Image Set'
                    }
                  >
                    MSSIM-tuned Kodak
                  </option>
                  <option
                    value="3"
                    title={'Tested on images of buildings (indoor & outdoor)'}
                  >
                    ImageMagick
                  </option>
                  <option
                    value="4"
                    title={
                      'Tuned for Peak Signal-Noise Ratio\nTested on the Kodak Image Set'
                    }
                  >
                    PSNR-HVS-M-tuned Kodak
                  </option>
                  <option
                    value="5"
                    title={
                      'Tables from "Relevance of Human Vision to JPEG-DCT Compression"\n(1992) Klein, Silverstein and Carney'
                    }
                  >
                    Klein et al
                  </option>
                  <option
                    value="6"
                    title={
                      'Table from "DCTune Perceptual Optimization of Compressed Dental X-Rays"\n(1997) Watson, Taylor, Borthwick'
                    }
                  >
                    Watson et al
                  </option>
                  <option
                    value="7"
                    title={
                      'Table from "A Visual Detection Model for DCT Coefficient Quantization"\n(12/9/93) Ahumada, Watson, Peterson'
                    }
                  >
                    Ahumada et al
                  </option>
                  <option
                    value="8"
                    title={
                      'Table from "An Improved Detection Model for DCT Coefficient Quantization"\n(1993) Peterson, Ahumada and Watson'
                    }
                  >
                    Peterson et al
                  </option>
                </Select>
              </label>
              <label
                class={style.optionToggle}
                title={getParameterDescription('trellis_multipass')}
              >
                Trellis multipass
                <Checkbox
                  name="trellis_multipass"
                  checked={options.trellis_multipass}
                  onChange={this.onChange}
                />
              </label>
              <Expander>
                {options.trellis_multipass ? (
                  <label
                    class={style.optionToggle}
                    title={getParameterDescription('trellis_opt_zero')}
                  >
                    Optimize zero block runs
                    <Checkbox
                      name="trellis_opt_zero"
                      checked={options.trellis_opt_zero}
                      onChange={this.onChange}
                    />
                  </label>
                ) : null}
              </Expander>
              <label
                class={style.optionToggle}
                title={getParameterDescription('trellis_opt_table')}
              >
                Optimize after trellis quantization
                <Checkbox
                  name="trellis_opt_table"
                  checked={options.trellis_opt_table}
                  onChange={this.onChange}
                />
              </label>
              <div
                class={style.optionOneCell}
                title={getParameterDescription('trellis_loops')}
              >
                <Range
                  name="trellis_loops"
                  min="1"
                  max="50"
                  value={options.trellis_loops}
                  onInput={this.onChange}
                >
                  Trellis quantization passes:
                </Range>
              </div>
            </div>
          ) : null}
        </Expander>
      </form>
    );
  }
}

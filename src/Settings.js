import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { produce } from 'immer';
import { PanelBody, PanelRow, TabPanel, TextControl, SelectControl, __experimentalBoxControl as BoxControl, RangeControl, ToggleControl } from "@wordpress/components";

import {
	BColor,
	BtnGroup,
	MultiShadowControl,
	Typography
} from "../../Components";

const pathAlignments = [
	{ label: __('left', 'text-path'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'text-path'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'text-path'), value: 'right', icon: 'editor-alignright' }
];

const Settings = ({ attributes, setAttributes }) => {
	const { svgPath, strokeColor, mainText, padding, alignment, textTypo, textColor, textShadow, fillColor, floating, bgColor } = attributes;
	const { translate, rotate, scale, enabled: floatingEnabled } = floating;
	const { translateX, translateY, duration, delay } = translate;
	const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
	const { scaleX, scaleY } = scale;


	const updateObj = (attr, key, val, nestKey = false) => {
		const newObj = produce(attributes[attr], draft => {
			if (false !== nestKey) {
				draft[key][nestKey] = val;
			} else {
				draft[key] = val;
			}
		});
		setAttributes({ [attr]: newObj })
	}



	return <InspectorControls>
		<TabPanel
			className="bPlTabPanel"
			tabs={[
				{ name: "general", title: __("General") },
				{ name: "style", title: __("Style") },
			]}
		>
			{(tab) => <>
				{tab.name === "general" && (
					<PanelBody
						className="bPlPanelBody"
						title={__("Settings", "text-path")} >
						<TextControl
							labelPosition="left"
							className="mt20"
							label={__("Title Text", "text-path")}
							value={mainText}
							onChange={(val) => setAttributes({ mainText: val })}
						/>
						<SelectControl
							label="Path Type"
							className="mt20"
							labelPosition="left"
							value={svgPath}
							options={[
								{ label: 'Wave', value: "M0,42.2494C62.5,42.2494,62.5.25,125,.25s62.5,41.9994,125,41.9994" },
								{ label: 'Wave Two', value: "M0,0.25C62.5,0.25,62.5,42.2494,125,42.2494S187.5,0.25,250,0.25" },
								{ label: 'Circle', value: "M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" },
								{ label: 'Arc', value: "M.25,125.25a125,125,0,0,1,250,0" },
								{ label: 'Line', value: "M 0 27 l 250 -22" },
								{ label: 'Oval', value: "M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875" },
								{ label: 'Spiral', value: "M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023" },
							]}
							onChange={(val) => setAttributes({ svgPath: val })}
						/>
					</PanelBody>
				)}

				{tab.name === "style" && <>

					<PanelBody
						className="bPlPanelBody"
						title={__("Content", "text-path")}
					>


						<BtnGroup
							className="mt20"
							label={__("Alignment", "text-path")}
							value={alignment}
							onChange={val => setAttributes({ alignment: val })}
							options={pathAlignments} isIcon={true}
						/>

						<PanelRow className="mt20">
							<BoxControl
								label={__('Padding', 'text-path')}
								values={padding}
								resetValues={{
									"top": "0px",
									"right": "0px",
									"bottom": "0px",
									"left": "0px"
								}}
								onChange={(value) => setAttributes({ padding: value })}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody
						className="bPlPanelBody"
						title={__("Floating", "text-path")}
						initialOpen={false} >
						<ToggleControl
							label={__("Enable", "map-block")}
							value={floatingEnabled}
							checked={floatingEnabled}
							onChange={(val) => updateObj('floating', 'enabled', val)}
						/>
						{floatingEnabled && <>
							<PanelBody
								initialOpen={false}
								className="bPlPanelBody mt20"
								title={__("Translate", "text-path")}>

								<RangeControl
									label={__("translate-X", "text-path")}
									value={translateX}
									onChange={(val) => updateObj('floating', 'translate', val, 'translateX')}
									// onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, translateY: val } } })}
									min={0}
									max={100}
									step={1}
									allowReset={true}
									resetFallbackValue={15.8239}
								/>

								<RangeControl
									label={__("translate-Y", "text-path")}
									value={translateY}
									onChange={(val) => updateObj('floating', 'translate', val, 'translateY')}
									min={0}
									max={100}
									step={1}
									allowReset={true}
									resetFallbackValue={1.08383}
								/>
								<RangeControl
									label={__("duration", "text-path")}
									value={duration}
									onChange={(val) => updateObj('floating', 'translate', val, 'duration')}
									min={0}
									max={100}
									step={1}
									allowReset={true}
									resetFallbackValue={1000}
								/>
								<RangeControl
									label={__("delay", "text-path")}
									value={delay}
									onChange={(val) => updateObj('floating', 'translate', val, 'delay')}
									min={0}
									max={10}
									step={1}
									allowReset={true}
									resetFallbackValue={0}
								/>
							</PanelBody>

							<PanelBody
								className="bPlPanelBody"
								initialOpen={false}
								title={__("Rotate", "text-path")}
							>
								<RangeControl
									label={__("Rotate-X", "text-path")}
									value={rotateX}
									onChange={(val) => updateObj('floating', 'rotate', val, 'rotateX')}
									min={0}
									max={180}
									step={1}
									allowReset={true}
									resetFallbackValue={-21.5199}
								/>
								<RangeControl
									label={__("Rotate-Y", "text-path")}
									value={rotateY}
									onChange={(val) => updateObj('floating', 'rotate', val, 'rotateY')}
									min={0}
									max={180}
									step={1}
									allowReset={true}
									resetFallbackValue={9.75444}
								/>
								<RangeControl
									label={__("Rotate-Z", "text-path")}
									value={rotateZ}
									onChange={(val) => updateObj('floating', 'rotate', val, 'rotateZ')}
									min={0}
									max={180}
									step={1}
									allowReset={true}
									resetFallbackValue={-36.4564}
								/>
								<RangeControl
									label={__("duration", "text-path")}
									value={rotateDuration}
									onChange={(val) => updateObj('floating', 'rotate', val, 'rotateDuration')}
									min={0}
									max={10000}
									step={1}
									allowReset={true}
									resetFallbackValue={1000}
								/>
								<RangeControl
									label={__("delay", "text-path")}
									value={rotateDelay}
									onChange={(val) => updateObj('floating', 'rotate', val, 'rotateDelay')}
									min={0}
									max={5000}
									step={1}
									allowReset={true}
									resetFallbackValue={0}
								/>
							</PanelBody>

							<PanelBody
								className="bPlPanelBody"
								initialOpen={false}
								title={__("Scale", "text-path")}
							>
								<RangeControl
									label={__("scale-X", "text-path")}
									value={scaleX}
									onChange={(val) => updateObj('floating', 'scale', val, 'scaleX')}
									min={0}
									max={5}
									step={1}
									allowReset={true}
									resetFallbackValue={0.803472}
								/>
								<RangeControl
									label={__("scale-Y", "text-path")}
									value={scaleY}
									onChange={(val) => updateObj('floating', 'scale', val, 'scaleY')}
									min={0}
									max={5}
									step={1}
									allowReset={true}
									resetFallbackValue={1.04335}
								/>
							</PanelBody>
						</>}
					</PanelBody>

					<PanelBody
						className="bPlPanelBody"
						title={__("SVG", "text-path")}
						initialOpen={false}
					>
						<BColor label={__('Background Color', 'text-path')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} defaultColor='#0000' />
						<BColor label={__('Stroke Color', 'text-path')} value={strokeColor} onChange={val => setAttributes({ strokeColor: val })} defaultColor='#0000' />

						<BColor label={__('fill Color', 'text-path')} value={fillColor} onChange={val => setAttributes({ fillColor: val })} defaultColor='#ffff' />
					</PanelBody>
					<PanelBody
						className="bPlPanelBody"
						title={__("Title", "text-path")}
						initialOpen={false}
					>
						<BColor label={__('Title Color', 'text-path')} value={textColor} onChange={val => setAttributes({ textColor: val })} defaultColor='#31304D' />

						<Typography label={__('Title Typography', 'text-path')} value={textTypo} onChange={val => setAttributes({ textTypo: val })} defaults={{ fontSize: 16 }} produce={produce} />

						<MultiShadowControl label={__('Title Shadow', 'text-path')} value={textShadow} onChange={val => setAttributes({ textShadow: val })} type="text" produce={produce} />
					</PanelBody>
				</>}
			</>}
		</TabPanel>
	</InspectorControls>;
};

export default Settings;

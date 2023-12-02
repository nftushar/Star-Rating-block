import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from './utils/icons';
import produce from "immer";
import { PanelBody, TabPanel, TextControl, SelectControl, RangeControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

import { BColor, BtnGroup, MultiShadowControl, Typography } from "../../Components"
import { emUnit, pxUnit } from "../../Components/utils/options";


const iconAlignments = [
	{ label: __('left', 'rating'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'rating'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'rating'), value: 'right', icon: 'editor-alignright' }
];


const Settings = ({ attributes, setAttributes }) => {
	const { svgPath, rating, strokeColor, prefix, gap, alignment, textTypo, textColor, textShadow } = attributes;

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
						<SelectControl
							label="Path Type"
							labelPosition="left"
							value={svgPath}
							options={[
								{ label: 'Circle', value: "M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" },
								{ label: 'Arc', value: "M0 50 A50 50, 0, 1, 1, 100 50" },
								{ label: 'Line', value: "M 0 27 l 250 -22" },
								{ label: 'Oval', value: "M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875" },
								{ label: 'Spiral', value: "M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023" },
							]}
							onChange={(val) => setAttributes({ svgPath: val })}
						/>

						<TextControl
							className="mt20"
							label={__("Prefix", "text-path")}
							value={prefix}
							onChange={(val) => setAttributes({ prefix: val })}
						/>

						<RangeControl
							className="mt20"
							label={__("Rating", "text-path")}
							labelPosition="left"
							value={rating}
							onChange={(val) => setAttributes({ rating: val })}
							min={1}
							max={svgPath}
							step={0.1}
						/>
					</PanelBody>
				)}

				{tab.name === "style" && (
					<PanelBody
						className="bPlPanelBody"
						title={__("Title", "text-path")}
					>
						<UnitControl
							label={__("Gap", "text-path")}
							labelPosition="left"
							value={gap}
							onChange={(val) => setAttributes({ gap: val })}
							units={[pxUnit(10), emUnit(1)]}
							isResetValueOnUnitChange={true}
						/>

						<BtnGroup
							className="mt20"
							label={__("Alignment", "text-path")}
							value={alignment}
							onChange={val => setAttributes({ alignment: val })}
							options={iconAlignments} isIcon={true} />

						<BColor label={__('Stroke Color', 'text-path')} value={strokeColor} onChange={val => setAttributes({ strokeColor: val })} defaultColor='#0000' />

						<BColor label={__('Text Color', 'text-path')} value={textColor} onChange={val => setAttributes({ textColor: val })} defaultColor='#0000' />

						<Typography label={__('Text Typography', 'text-path')} value={textTypo} onChange={val => setAttributes({ textTypo: val })} defaults={{ fontSize: 16 }} produce={produce} />

						<MultiShadowControl label={__('Text Shadow', 'text-path')} value={textShadow} onChange={val => setAttributes({ textShadow: val })} type="text" produce={produce} />

					</PanelBody>
				)}
			</>}
		</TabPanel>
	</InspectorControls>;
};

export default Settings;

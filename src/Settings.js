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
	const { ratingScale, rating, iconStyle, prefix, gap, alignment, textTypo, textColor, textShadow } = attributes;

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
						title={__("Settings", "text-path")}
					>
						<SelectControl
							label="Rating Scale"
							labelPosition="left"
							value={ratingScale}
							options={[
								{ label: '0-5', value: 5 },
								{ label: '0-10', value: 10 },
							]}
							onChange={(val) => setAttributes({ ratingScale: parseInt(val) })}
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
							max={ratingScale}
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

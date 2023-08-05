import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from './utils/icons';
// import produce from "immer";
import { PanelBody, TabPanel, TextControl, SelectControl, RangeControl } from "@wordpress/components";

import { BtnGroup, ColorControl } from "../../Components"

const iconOptions = [
	{ label: __('Solid', 'rating'), value: 'solid', icon: solidStar },
	{ label: __('Outline', 'rating'), value: 'outline', icon: outlineStar }
];
const iconAlignments = [
	{ label: __('left', 'rating'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'rating'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'rating'), value: 'right', icon: 'editor-alignright' }
];


const Settings = ({ attributes, setAttributes }) => {
	const { ratingScale, rating, iconStyle, prefix, alignment } = attributes;

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
						title={__("Settings", "star-rating")}
					>
						<SelectControl
							label="Rating Scale"
							labelPosition="left"
							value={ratingScale}
							options={[
								{ label: '0-5', value: 5 },
								{ label: '0-10', value: 10 },
							]}
							onChange={(val) => setAttributes({ ratingScale: val })}
						/>

						<TextControl
							className="mt20"
							label={__("Prefix", "star-rating")}
							value={prefix}
							onChange={(val) => setAttributes({ prefix: val })}
						/>

						<RangeControl
							className="mt20"
							label={__("Rating", "star-rating")}
							labelPosition="left"
							value={rating}
							onChange={(val) => setAttributes({ rating: val })}
						/>

						<BtnGroup
							className="mt20"
							label={__("Icon Style", "star-rating")}
							value={iconStyle}
							onChange={val => setAttributes({ iconStyle: val })}
							options={iconOptions} isIcon={true} />

						<BtnGroup
							className="mt20"
							label={__("Alignment", "star-rating")}
							value={alignment}
							onChange={val => setAttributes({ alignment: val })}
							options={iconAlignments} isIcon={true} />
					</PanelBody>
				)}

				{tab.name === "style" && (
					<PanelBody
						className="bPlPanelBody"
						title={__("Title", "star-rating")}
					>



					</PanelBody>
				)}
			</>}
		</TabPanel>
	</InspectorControls>;
};

export default Settings;
